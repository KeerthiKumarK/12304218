// src/pages/Home.jsx
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Snackbar,
  Alert
} from '@mui/material';
import Logger from '../components/LoggerMiddleware';
import UrlInputForm from '../components/UrlInputForm';
import ShortenedUrlCard from '../components/ShortenedUrlCard';
import { generateShortCode } from '../utils/shortcode';
import { isValidUrl, isAlphanumeric } from '../utils/validation';
import { getShortUrls, saveShortUrls } from '../utils/storage';

export default function Home() {
  const [urls, setUrls] = useState([
    { id: 1, url: '', validity: '', customCode: '' }
  ]);
  const [results, setResults] = useState(getShortUrls());
  const [errorMsg, setErrorMsg] = useState('');

  const handleAddRow = () => {
    if (urls.length >= 5) {
      setErrorMsg('You can only shorten up to 5 URLs at once.');
      return;
    }
    const newEntry = {
      id: urls.length + 1,
      url: '',
      validity: '',
      customCode: ''
    };
    setUrls([...urls, newEntry]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const handleShorten = () => {
    const existingCodes = new Set(getShortUrls().map(entry => entry.code));
    const newResults = [];

    for (const { url, validity, customCode } of urls) {
      if (!isValidUrl(url)) {
        setErrorMsg(`Invalid URL: ${url}`);
        return;
      }

      const code = customCode || generateShortCode();

      if (customCode && (!isAlphanumeric(customCode) || existingCodes.has(customCode))) {
        setErrorMsg(`Invalid or duplicate shortcode: ${customCode}`);
        return;
      }

      if (existingCodes.has(code)) {
        setErrorMsg(`Generated duplicate shortcode. Try again.`);
        return;
      }

      existingCodes.add(code);

      const validMinutes = validity && !isNaN(validity) ? parseInt(validity) : 30;
      const createdAt = new Date();
      const expiresAt = new Date(createdAt.getTime() + validMinutes * 60000);

      const entry = {
        originalUrl: url,
        shortUrl: `http://localhost:3000/${code}`,
        code,
        createdAt,
        expiresAt,
        clicks: []
      };

      Logger.log('Shortened URL Created', entry);
      newResults.push(entry);
    }

    const allData = [...getShortUrls(), ...newResults];
    setResults(allData);
    saveShortUrls(allData);
    setUrls([{ id: 1, url: '', validity: '', customCode: '' }]);
  };

  const handleCloseError = () => setErrorMsg('');

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ marginTop: 30 }}>
        URL Shortener
      </Typography>

      <Grid container spacing={2}>
        {urls.map((data, index) => (
          <Grid item xs={12} key={data.id}>
            <UrlInputForm index={index} data={data} onChange={handleChange} />
          </Grid>
        ))}
      </Grid>

      <Box mt={2} display="flex" gap={2}>
        <Button variant="contained" color="primary" onClick={handleAddRow}>
          + Add URL
        </Button>
        <Button variant="contained" color="success" onClick={handleShorten}>
          Shorten URLs
        </Button>
      </Box>

      <Box mt={4}>
        <Typography variant="h5">Shortened URLs</Typography>
        {results.map((entry, index) => (
          <ShortenedUrlCard key={index} data={entry} />
        ))}
      </Box>

      <Snackbar open={!!errorMsg} autoHideDuration={4000} onClose={handleCloseError}>
        <Alert severity="error" onClose={handleCloseError}>
          {errorMsg}
        </Alert>
      </Snackbar>
    </Container>
  );
}
 

