import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { LiveTv, InfoOutlined } from '@mui/icons-material';

interface LiveSportsCardProps {
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamScore: number;
  awayTeamScore: number;
  halfTime: string;
  isLive: boolean;
  bettingOptions: { label: string; value: number }[];
}

const LiveSportsCard: React.FC<LiveSportsCardProps> = ({
  league,
  homeTeam,
  awayTeam,
  homeTeamScore,
  awayTeamScore,
  halfTime,
  isLive,
  bettingOptions,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#1e293b',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0 8px 22px rgba(0,0,0,0.35)',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minWidth: '300px',
      }}
    >
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {league}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {isLive && (
            <>
              <LiveTv fontSize="small" sx={{ color: 'green' }} />
              <Typography variant="body2" color="green">
                Live
              </Typography>
            </>
          )}
          <IconButton size="small" sx={{ color: '#7dd3fc' }}>
            <InfoOutlined fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Team and Score Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
          {homeTeam}
        </Typography>
        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
          {homeTeamScore} : {awayTeamScore}
        </Typography>
        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
          {awayTeam}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ color: 'gray' }}>
        {halfTime}
      </Typography>

      {/* Betting Options */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        {bettingOptions.map((option, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              backgroundColor: index === 1 ? '#d9534f' : '#f97316',
              color: '#fff',
              borderRadius: '10px',
              minWidth: '60px',
              padding: '8px 12px',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: index === 1 ? '#c9302c' : '#fb8c00',
              },
            }}
          >
            {option.label} {option.value}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default LiveSportsCard;
