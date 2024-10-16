import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import LiveSportsCard from './LiveSportsCard';

const matches = [
    {
        league: 'Soccer • Premier League',
        homeTeam: 'Enugu Rangers',
        awayTeam: 'Kano Pillars FC',
        homeTeamScore: 0,
        awayTeamScore: 1,
        halfTime: '1st half',
        isLive: true,
        bettingOptions: [
          { label: '1', value: 2.45 },
          { label: 'draw', value: 3.25 },
          { label: '2', value: 2.65 },
          { label: '+5', value: 5.0 },
        ],
      },
      {
        league: 'Soccer • Premier League',
        homeTeam: 'Enugu Rangers',
        awayTeam: 'Kano Pillars FC',
        homeTeamScore: 0,
        awayTeamScore: 1,
        halfTime: '1st half',
        isLive: true,
        bettingOptions: [
          { label: '1', value: 2.45 },
          { label: 'draw', value: 3.25 },
          { label: '2', value: 2.65 },
          { label: '+5', value: 5.0 },
        ],
      },
      {
        league: 'Soccer • Premier League',
        homeTeam: 'Enugu Rangers',
        awayTeam: 'Kano Pillars FC',
        homeTeamScore: 0,
        awayTeamScore: 1,
        halfTime: '1st half',
        isLive: true,
        bettingOptions: [
          { label: '1', value: 2.45 },
          { label: 'draw', value: 3.25 },
          { label: '2', value: 2.65 },
          { label: '+5', value: 5.0 },
        ],
      },
      {
        league: 'Soccer • Premier League',
        homeTeam: 'Enugu Rangers',
        awayTeam: 'Kano Pillars FC',
        homeTeamScore: 0,
        awayTeamScore: 1,
        halfTime: '1st half',
        isLive: true,
        bettingOptions: [
          { label: '1', value: 2.45 },
          { label: 'draw', value: 3.25 },
          { label: '2', value: 2.65 },
          { label: '+5', value: 5.0 },
        ],
      },
      {
        league: 'Soccer • Premier League',
        homeTeam: 'Enugu Rangers',
        awayTeam: 'Kano Pillars FC',
        homeTeamScore: 0,
        awayTeamScore: 1,
        halfTime: '1st half',
        isLive: true,
        bettingOptions: [
          { label: '1', value: 2.45 },
          { label: 'draw', value: 3.25 },
          { label: '2', value: 2.65 },
          { label: '+5', value: 5.0 },
        ],
      },
      {
        league: 'Soccer • Premier League',
        homeTeam: 'Enugu Rangers',
        awayTeam: 'Kano Pillars FC',
        homeTeamScore: 0,
        awayTeamScore: 1,
        halfTime: '1st half',
        isLive: true,
        bettingOptions: [
          { label: '1', value: 2.45 },
          { label: 'draw', value: 3.25 },
          { label: '2', value: 2.65 },
          { label: '+5', value: 5.0 },
        ],
      },
  // Additional matches...
];

const LiveSportsSection = () => {
    return (
      <Box sx={{ padding: '20px', backgroundColor: '#10182B' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ color: '#fff' }}>
            Live Sports
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#2563eb',
              color: '#fff',
              padding: '6px 16px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#3b82f6',
              },
            }}
          >
            All
          </Button>
        </Box>
  
        {/* Horizontal Scroll Container with 3 cards visible */}
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            width: '100%',
            '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar for clean design
            padding: '10px',
          }}
        >
          {matches.map((match, index) => (
            <Box
              key={index}
              sx={{
                flex: '0 0 33.33%', // Each card takes up 1/3 of the width
                maxWidth: '33.33%',
                padding: '10px',
                minWidth: '300px', // Ensure the cards have a minimum width
              }}
            >
              <LiveSportsCard {...match} />
            </Box>
          ))}
        </Box>
      </Box>
    );
  };
  
  
export default LiveSportsSection;
