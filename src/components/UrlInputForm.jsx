 
import React from 'react';
import { TextField, Grid } from '@mui/material';

export default function UrlInputForm({ index, data, onChange }) {
  const handleChange = (e) => {
    onChange(index, e.target.name, e.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <TextField
          label="Original URL"
          name="url"
          fullWidth
          value={data.url}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Validity (minutes)"
          name="validity"
          fullWidth
          value={data.validity}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Custom Shortcode (optional)"
          name="customCode"
          fullWidth
          value={data.customCode}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}
 