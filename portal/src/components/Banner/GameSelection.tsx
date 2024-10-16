// GameSelection.tsx
import React from 'react';
import { Box, Grid } from '@mui/material';
import GameCard from './GameCard'; // Import GameCard component

const games = [
  {
    title: 'CASINO',
    description: 'Dive into our in-house games, live casino and slots',
    iconSrc: '/icons/casino-icon.png',
    background: 'linear-gradient(135deg, #1d2671, #c33764)',
  },
  {
    title: 'SPORTS',
    description: 'Bet on Football, Cricket, NFL, eSports & over 80 sports!',
    iconSrc: '/icons/sports-icon.png',
    background: 'linear-gradient(135deg, #6a3093, #a044ff)',
  },
  {
    title: 'LOTTERY',
    description: 'Participate in lotteries and win big prizes',
    iconSrc: '/icons/lottery-icon.png',
    background: 'linear-gradient(135deg, #11998e, #38ef7d)',
  },
  {
    title: 'RACING',
    description: 'Bet on thrilling horse and car races',
    iconSrc: '/icons/racing-icon.png',
    background: 'linear-gradient(135deg, #ff512f, #dd2476)',
  },
  {
    title: 'UPDOWN',
    description: 'Predict price movements and win rewards',
    iconSrc: '/icons/updown-icon.png',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
  },
  {
    title: 'BINGO',
    description: 'Play bingo and have fun with friends!',
    iconSrc: '/icons/bingo-icon.png',
    background: 'linear-gradient(135deg, #ff5f6d, #ffc371)',
  },
];

const GameSelection = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#1b263b' }}>
      <Grid container spacing={3}>
        {/* Left Column: Two Large Cards Stacked Vertically and Taking Full Height */}
        <Grid item xs={12} md={6}>
          <Grid container direction="row" spacing={3} sx={{ height: '100%', width: '100%'}}>
            {games.slice(0, 2).map((game, index) => (
              <Grid item xs key={index} sx={{ flex: 1, height: '100%', width: '100%'}}>
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

        {/* Right Column: Four Smaller Cards in a 2x2 Grid */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {games.slice(2).map((game, index) => (
              <Grid item xs={12} sm={6} key={index}>
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
