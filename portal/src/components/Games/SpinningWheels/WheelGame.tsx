// components/Roulette.tsx
'use client'
import React, { useState, useCallback } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Weel from './roulette_components/weel/Weel';
import RouletteTable from './roulette_components/table/Table';

// JSON Imports
import firstRow from './roulette_components/table/rows/FirstRow.json';
import firstBorder from './roulette_components/table/rows/FirstBorder.json';
import secondRow from './roulette_components/table/rows/SecondRow.json';
import secondBorder from './roulette_components/table/rows/SecondBorder.json';
import thirdRow from './roulette_components/table/rows/ThirdRow.json';
import thirdBorder from './roulette_components/table/rows/ThirdBorder.json';
import fourthRow from './roulette_components/table/rows/FourthRow.json';
import fifthRow from './roulette_components/table/rows/FifthRow.json';
import columnLeft from './roulette_components/table/rows/ColumnLeft.json';
import columnRight from './roulette_components/table/rows/ColumnRight.json';

// State Type
interface RouletteState {
  num: string;
  arr: string[];
  count: number;
  wins: number;
  chip: number;
  coins: number;
  losses: number;
  spinning: boolean;
  message: string;
  extArr: string[];
  firstRow: any[];
  firstBorder: any[];
  secondRow: any[];
  secondBorder: any[];
  thirdRow: any[];
  thirdBorder: any[];
  fourthRow: any[];
  fifthRow: any[];
  columnLeft: any[];
  columnRight: any[];
}

const Roulette: React.FC = () => {
  const [state, setState] = useState<RouletteState>({
    num: '',
    arr: [],
    count: 0,
    wins: 0,
    chip: 10,
    coins: 0,
    losses: 0,
    spinning: false,
    message: 'Put your bets and spin the weel!',
    extArr: [],
    firstRow,
    firstBorder,
    secondRow,
    secondBorder,
    thirdRow,
    thirdBorder,
    fourthRow,
    fifthRow,
    columnLeft,
    columnRight,
  });

  const isSpinning = useCallback((spinning: boolean) => {
    setState((prevState) => ({ ...prevState, spinning }));
  }, []);

  const resetGame = () => {
    setState((prevState) => ({
      ...prevState,
      arr: [],
      spinning: false,
      num: '',
    }));
  };

  const updateNum = (num: string) => {
    setState((prevState) => ({
      ...prevState,
      num,
      count: prevState.count + 1,
    }));
    // Determine win/loss logic here if needed
  };

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12} md={8}>
        <RouletteTable
          {...state}
          updateRow={(row, val) => setState((prev) => ({ ...prev, [row]: val }))}
          updateArr={(arr) => setState((prev) => ({ ...prev, arr }))}
          updateCoins={(coins) => setState((prev) => ({ ...prev, coins }))}
        />
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="h6" component="div">{state.message}</Typography>
          <Box display="flex" justifyContent="center" alignItems="center" mt={1}>
          </Box>
          <Typography>
            Spins: {state.count} | Wins: {state.wins} | Losses: {state.losses}
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={resetGame}>
            Reset Game
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Weel
          isSpinning={isSpinning}
          updateNum={updateNum}
          num={state.num}
          arr={state.arr}
          count={state.count}
        />
      </Grid>
    </Grid>
  );
};

export default Roulette;
