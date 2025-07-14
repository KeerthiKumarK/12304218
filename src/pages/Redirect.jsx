import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findByShortcode, updateShortUrl } from '../utils/storage';



export default function Redirect() {
  const { shortcode } = useParams();

  useEffect(() => {
    const entry = findByShortcode(shortcode);

    if (!entry) {
      alert('Short URL not found.');
      return;
    }

    updateShortUrl(shortcode, (e) => {
      e.clicks.push({
        timestamp: new Date().toISOString(),
        source: document.referrer || 'direct',
        location: 'India', // Mock location
      });
    });

    window.location.href = entry.originalUrl;
  }, [shortcode]);

  return <p>Redirecting...</p>;
}

