// src/components/StatsTable.jsx
import React from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails,
  Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function StatsTable({ data }) {
  return (
    <div>
      {data.map((entry, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              {entry.shortUrl} (Clicks: {entry.clicks?.length || 0})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">Original URL: {entry.originalUrl}</Typography>
            <Typography variant="body2">Created At: {new Date(entry.createdAt).toLocaleString()}</Typography>
            <Typography variant="body2">Expires At: {new Date(entry.expiresAt).toLocaleString()}</Typography>

            {entry.clicks && entry.clicks.length > 0 ? (
              <TableContainer component={Paper} style={{ marginTop: 10 }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Timestamp</TableCell>
                      <TableCell>Source</TableCell>
                      <TableCell>Location</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {entry.clicks.map((click, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{new Date(click.timestamp).toLocaleString()}</TableCell>
                        <TableCell>{click.source}</TableCell>
                        <TableCell>{click.location}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography variant="body2" style={{ marginTop: 10 }}>No clicks yet.</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
