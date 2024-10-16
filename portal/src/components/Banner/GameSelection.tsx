import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import GameCard from './GameCard';
import Grid from '@mui/material/Grid2';

const games = [
  {
    title: 'CASINO',
    description: 'Dive into our in-house games, live casino and slots',
    iconSrc: '/casino.webp',
    background: 'linear-gradient(135deg, #1d2671, #c33764)',
  },
  {
    title: 'SPORTS',
    description: 'Bet on Football, Cricket, NFL, eSports & over 80 sports!',
    iconSrc: '/sports.webp',
    background: 'linear-gradient(135deg, #6a3093, #a044ff)',
  },
  {
    title: 'LOTTERY',
    description: 'Participate in lotteries and win big prizes',
    iconSrc: '/lottery.webp',
    background: 'linear-gradient(135deg, #11998e, #38ef7d)',
  },
  {
    title: 'RACING',
    description: 'Bet on thrilling horse and car races',
    iconSrc: '/racingCar.webp',
    background: 'linear-gradient(135deg, #ff512f, #dd2476)',
  },
  {
    title: 'UPDOWN',
    description: 'Predict price movements and win rewards',
    iconSrc: '/updown.webp',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
  },
  {
    title: 'BINGO',
    description: 'Play bingo and have fun with friends!',
    iconSrc: '/bingo.webp',
    background: 'linear-gradient(135deg, #ff5f6d, #ffc371)',
  },
];

// Custom styled component for the Game Card with background image
const GameCardContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .game-card': {
    width: '100%',
    height: '380px',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.3)',
    },
    color: '#fff',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const GameSelection = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#1b263b' }}>
      <Grid container spacing={3}>
        {/* Left Column: Two Large Cards Stacked Vertically and Taking Full Height */}
        <Grid size={6}>
          <Grid container direction="row" spacing={3} sx={{ height: '100%', width: '100%' }}>
            {games.slice(0, 2).map((game, index) => (
              <Grid size={6} key={index} sx={{ flex: 1, height: '100%', width: '100%' }}>
                <GameCardContainer>
                  <Box
                    className="game-card"
                    sx={{
                      backgroundImage: `url(${game.iconSrc})`, // Set image as background
                    }}
                  >
                  <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '8px', borderRadius: '8px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {game.title}
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '8px', borderRadius: '8px' }}>
        <Typography variant="body2">{game.description}</Typography>
      </Box>
                  </Box>
                </GameCardContainer>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Column: Four Smaller Cards in a 2x2 Grid */}
        <Grid size={6}>
          <Grid container spacing={3}>
            {games.slice(2).map((game, index) => (
              <Grid key={index}>
                <GameCard
                  title={game.title}
                  description={game.description}
                  iconSrc={game.iconSrc}
                  background={game.background}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GameSelection;
