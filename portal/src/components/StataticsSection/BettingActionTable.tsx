// src/components/BettingActionTable.tsx
"use client";

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Dummy JSON data for casino and sports betting actions
const casinoGames = ['Dronna Games Exclusive Blackjack', 'Limbo', 'Plinko', 'Slushie Party Enhanced'];
const sportsGames = ['Football - Premier League', 'Basketball - NBA', 'Tennis - Wimbledon', 'Baseball - MLB'];
const users = ['User1', 'User2', 'Hidden', 'User3', 'User4'];
const times = ['2:51 PM', '3:05 PM', '3:10 PM', '3:15 PM', '3:20 PM', '3:30 PM'];

const useStyles = makeStyles(() => ({
  sectionRoot: {
    backgroundColor: '#0d1b2a',
    padding: '40px 20px',
    color: '#fff',
    borderRadius: '12px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  toggleGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  tableContainer: {
    backgroundColor: '#1b263b',
    borderRadius: '12px',
  },
  tableHeader: {
    backgroundColor: '#243447',
  },
  tableCell: {
    color: '#fff',
  },
  positivePayout: {
    color: '#10b981', // Positive payout color
  },
  negativePayout: {
    color: '#ef4444', // Negative payout color
  },
}));

const BettingActionTable: React.FC = () => {
  const classes = useStyles();
  const [view, setView] = useState('casino');
  const [betsData, setBetsData] = useState(() => generateInitialData('casino'));

  useEffect(() => {
    // Update betsData based on the selected view
    setBetsData(generateInitialData(view));
  }, [view]);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setBetsData((prevData) => {
        // Clone the data to avoid mutating the state directly
        let updatedData = [...prevData];

        // Randomly select multiple rows to update
        const numberOfUpdates = Math.floor(Math.random() * updatedData.length) + 1;

        for (let i = 0; i < numberOfUpdates; i++) {
          const indexToUpdate = Math.floor(Math.random() * updatedData.length);
          updatedData[indexToUpdate] = generateRandomRow(view);
        }

        return updatedData;
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, [view]);

  const handleViewChange = (event: React.MouseEvent<HTMLElement>, newView: string | null) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  // Generates initial data based on the selected view
  function generateInitialData(view: string) {
    const games = view === 'casino' ? casinoGames : sportsGames;
    return Array.from({ length: 5 }, () => generateRandomRow(view));
  }

  // Generates a random row of data
  function generateRandomRow(view: string) {
    const games = view === 'casino' ? casinoGames : sportsGames;
    const randomGame = games[Math.floor(Math.random() * games.length)];
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const randomTime = times[Math.floor(Math.random() * times.length)];
    const randomAmount = (Math.random() * 1000).toFixed(2);
    const randomMultiplier = (Math.random() * 3).toFixed(2) + '×';
    const randomPayout = Math.random() > 0.5 ? (Math.random() * 1000).toFixed(2) : '-' + (Math.random() * 1000).toFixed(2);
    const payoutType = parseFloat(randomPayout) > 0 ? 'positive' : 'negative';

    return {
      game: randomGame,
      user: randomUser,
      time: randomTime,
      amount: `₹${randomAmount}`,
      multiplier: randomMultiplier,
      payout: randomPayout,
      payoutType: payoutType,
    };
  }

  return (
    <Box className={classes.sectionRoot}>
      {/* Header */}
      <Box className={classes.header}>
        <Typography variant="h4">Watch the betting action happening right now</Typography>
        <Typography variant="body1">
          Check out the live bets on popular casino games and sports to discover how much you could win.
        </Typography>
      </Box>

      {/* Toggle Button Group */}
      <Box className={classes.toggleGroup}>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleViewChange}
          aria-label="Casino or Sports view"
        >
          <ToggleButton value="casino" aria-label="casino" style={{ color: '#fff' }}>
            Casino
          </ToggleButton>
          <ToggleButton value="sports" aria-label="sports" style={{ color: '#fff' }}>
            Sports
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Betting Table */}
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead className={classes.tableHeader}>
            <TableRow>
              <TableCell className={classes.tableCell}>Game</TableCell>
              <TableCell className={classes.tableCell}>User</TableCell>
              <TableCell className={classes.tableCell}>Time</TableCell>
              <TableCell className={classes.tableCell}>Bet Amount</TableCell>
              <TableCell className={classes.tableCell}>Multiplier</TableCell>
              <TableCell className={classes.tableCell}>Payout</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {betsData.map((bet, index) => (
              <TableRow key={index}>
                <TableCell className={classes.tableCell}>{bet.game}</TableCell>
                <TableCell className={classes.tableCell}>
                  <AccountCircleIcon style={{ marginRight: '5px', color: '#9CA3AF' }} />
                  {bet.user}
                </TableCell>
                <TableCell className={classes.tableCell}>{bet.time}</TableCell>
                <TableCell className={classes.tableCell}>{bet.amount}</TableCell>
                <TableCell className={classes.tableCell}>{bet.multiplier}</TableCell>
                <TableCell
                  className={`${classes.tableCell} ${
                    bet.payoutType === 'positive' ? classes.positivePayout : classes.negativePayout
                  }`}
                >
                  {bet.payout}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BettingActionTable;
