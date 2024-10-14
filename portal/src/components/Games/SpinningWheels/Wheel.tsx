'use client'
import { useState } from 'react';
import { RouletteWheel } from 'react-casino-roulette';

import 'react-casino-roulette/dist/index.css';

export const Wheel = () => {
  const [start, setStart] = useState(false);
  const [winningBet, setWinningBet] = useState('-1');

  const doSpin = () => {
    setWinningBet('00');
    setStart(true);
  };

  return (
    <div>
      <div
        style={{ display: 'flex', justifyContent: 'center' ,marginTop: '200px'}}
      >
        <RouletteWheel start={start} winningBet={winningBet} />
      </div>
      <div>
        <button type="button" disabled={start} onClick={doSpin}>
          Spin
        </button>
      </div>
    </div>
  );
};