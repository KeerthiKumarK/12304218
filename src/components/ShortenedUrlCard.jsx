// src/components/ShortenedUrlCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';

export default function ShortenedUrlCard({ data }) {
  const { originalUrl, shortUrl, createdAt, expiresAt } = data;

  return (
    <Card style={{ margin: '10px 0' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Original URL: <Link href={originalUrl} target="_blank" rel="noopener noreferrer">{originalUrl}</Link>
        </Typography>
        <Typography variant="body1">
          Short URL: <Link href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</Link>
        </Typography>
        <Typography variant="body2">Created At: {new Date(createdAt).toLocaleString()}</Typography>
        <Typography variant="body2">Expires At: {new Date(expiresAt).toLocaleString()}</Typography>
      </CardContent>
    </Card>
  );
}
