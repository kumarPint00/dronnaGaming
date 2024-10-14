// components/roulette_components/weel/Weel.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';
import './Weel.css';
import options from '../options.json';

interface WeelProps {
  updateNum: (num: string) => void;
  isSpinning: (spinning: boolean) => void;
  arr: string[];
}

const Weel: React.FC<WeelProps> = ({ updateNum, isSpinning, arr }) => {
  const baseSize = 200;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [spinState, setSpinState] = useState({
    spinAngleStart: Math.random() * 10 + 10,
    spinTimeTotal: Math.random() * 3000 + 4000,
    startAngle: 0,
    spinTime: 0,
    text: '',
  });

  const arc = Math.PI / (options.length / 2);
  let spinTimer: NodeJS.Timeout | null = null;

  useEffect(() => {
    drawRouletteWheel();
  }, [spinState.startAngle]);

  useEffect(() => {
    return () => {
      if (spinTimer) clearTimeout(spinTimer);
    };
  }, []);

  const drawRouletteWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const outsideRadius = baseSize - 25;
    const insideRadius = baseSize - 85;
    const textRadius = baseSize - 45;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '14px Helvetica, Arial';

    for (let i = 0; i < options.length; i++) {
      const angle = spinState.startAngle + i * arc;
      ctx.fillStyle = options[i].color;

      // Draw the segments
      ctx.beginPath();
      ctx.arc(baseSize, baseSize, outsideRadius, angle, angle + arc, false);
      ctx.arc(baseSize, baseSize, insideRadius, angle + arc, angle, true);
      ctx.fill();

      // Draw the text
      ctx.save();
      ctx.fillStyle = 'white';
      ctx.translate(
        baseSize + Math.cos(angle + arc / 2) * textRadius,
        baseSize + Math.sin(angle + arc / 2) * textRadius
      );
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      const text = options[i].number;
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    }

    // Draw the arrow
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(baseSize + 10, baseSize - (outsideRadius + 20));
    ctx.lineTo(baseSize, baseSize - (outsideRadius - 5));
    ctx.lineTo(baseSize - 10, baseSize - (outsideRadius + 20));
    ctx.fill();
  };

  const spin = () => {
    setSpinState((prevState) => ({ ...prevState, spinTime: 0 }));
    rotate();
  };

  const rotate = () => {
    if (spinState.spinTime > 2800) {
      stopRotateWheel();
      return;
    }

    const spinAngle =
      spinState.spinAngleStart -
      easeOut(spinState.spinTime, 0, spinState.spinAngleStart, spinState.spinTimeTotal);

    setSpinState((prevState) => ({
      ...prevState,
      startAngle: prevState.startAngle + (spinAngle * Math.PI) / 180,
      spinTime: prevState.spinTime + 10,
    }));

    spinTimer = setTimeout(rotate, 30);
  };

  const stopRotateWheel = () => {
    const degrees = (spinState.startAngle * 180) / Math.PI + 90;
    const index = Math.floor((360 - (degrees % 360)) / (arc * 180 / Math.PI));
    const selectedText = options[index].number;

    setSpinState((prevState) => ({ ...prevState, text: selectedText }));
    updateNum(selectedText);
    isSpinning(false);
  };

  const easeOut = (t: number, b: number, c: number, d: number) => {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  };

  const handleOnClick = () => {
    spin();
    isSpinning(true);
  };

  return (
    <Box className="roulette-container" sx={{ textAlign: 'center' }}>
      <canvas
        ref={canvasRef}
        width={baseSize * 2}
        height={baseSize * 2}
        className="roulette-canvas"
      ></canvas>

      {arr.length !== 0 ? (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleOnClick}
          sx={{ marginTop: 2 }}
        >
          <Typography variant="h5">Spin the wheel!</Typography>
        </Button>
      ) : (
        <Button variant="outlined" color="primary" sx={{ marginTop: 2 }}>
          <Typography variant="h6">
            {spinState.text || 'Put your bets and spin the wheel!'}
          </Typography>
        </Button>
      )}
    </Box>
  );
};

export default Weel;
