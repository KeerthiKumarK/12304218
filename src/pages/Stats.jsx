// src/pages/Stats.jsx
import React, { useEffect, useState } from 'react';
import StatsTable from '../components/StatsTable';

export default function Stats() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('shortUrls');
    if (stored) setData(JSON.parse(stored));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h2>URL Statistics</h2>
      <StatsTable data={data} />
    </div>
  );
}
