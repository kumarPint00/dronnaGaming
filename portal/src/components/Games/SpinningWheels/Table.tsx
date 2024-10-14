'use client'
import { useState } from 'react';
import { RouletteTable } from 'react-casino-roulette';

import 'react-casino-roulette/dist/index.css';

export const Table = () => {
  const [bets, setBets] = useState({});

  const handleBet = (betData) => {
    const { id } = betData;

    setBets((prevState) => ({
      ...prevState,
      [id]: {
        icon: 'https://cdn-icons-png.flaticon.com/512/10095/10095709.png',
      },
    }));
  };

  return (
    <div style={{ maxWidth: '100%', marginTop: '200px' }}>
      <RouletteTable bets={bets} onBet={handleBet} />
    </div>
  );
};