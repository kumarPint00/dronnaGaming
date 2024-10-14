'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  useMediaQuery,
  Snackbar,
  Alert,
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from 'chart.js';
import { useTheme } from '@mui/material/styles';

// Register required Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

const AviatorGame = () => {
  // Constants for game settings
  const INITIAL_MULTIPLIER = 1.0;
  const MULTIPLIER_INCREMENT = 1.02; // Adjusted increment for smoother exponential growth
  const UPDATE_INTERVAL_MS = 100;

  // State variables
  const [multiplier, setMultiplier] = useState(INITIAL_MULTIPLIER);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [crashPoint, setCrashPoint] = useState(0);
  const [betAmount, setBetAmount] = useState<number | ''>('');
  const [hasCashedOut, setHasCashedOut] = useState(false);
  const [chartData, setChartData] = useState<number[]>([]);
  const [winnings, setWinnings] = useState<number | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [leaderboard, setLeaderboard] = useState<{ name: string; winnings: number }[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info'>('info');

  // References
  const planeImageRef = useRef<HTMLImageElement | null>(null);
  const cashOutSoundRef = useRef<HTMLAudioElement | null>(null);
  const crashSoundRef = useRef<HTMLAudioElement | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasCashedOutRef = useRef(hasCashedOut);
  const crashPointRef = useRef(crashPoint);

  // Load the plane image and sounds
  useEffect(() => {
    // Load plane image
    planeImageRef.current = new Image();
    planeImageRef.current.src = '/plane.webp'; // Ensure this path is correct
    planeImageRef.current.onload = () => {
      setIsImageLoaded(true);
    };
    planeImageRef.current.onerror = (error) => {
      console.error('Error loading plane image:', error);
    };

    // Load sounds
    cashOutSoundRef.current = new Audio('/sounds/flew.mp3');
    crashSoundRef.current = new Audio('/sounds/crash.mp3');
  }, []);

  // Update refs when state changes
  useEffect(() => {
    hasCashedOutRef.current = hasCashedOut;
  }, [hasCashedOut]);

  useEffect(() => {
    crashPointRef.current = crashPoint;
  }, [crashPoint]);

  // Game logic
  useEffect(() => {
    if (isGameRunning) {
      intervalRef.current = setInterval(() => {
        setMultiplier((prevMultiplier) => {
          const newMultiplier = parseFloat(
            (prevMultiplier * MULTIPLIER_INCREMENT).toFixed(3)
          );

          // Update chart data
          setChartData((prevData) => [...prevData, newMultiplier]);

          // Check for crash
          if (newMultiplier >= crashPointRef.current) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            setIsGameRunning(false);
            if (crashSoundRef.current) {
              crashSoundRef.current.play();
            }
            if (!hasCashedOutRef.current) {
              setNotification(
                `Game Over! The plane crashed at ${crashPointRef.current.toFixed(
                  2
                )}x. You lost.`
              );
              setSnackbarMessage(
                `Game Over! The plane crashed at ${crashPointRef.current.toFixed(
                  2
                )}x. You lost.`
              );
              setSnackbarSeverity('error');
              setSnackbarOpen(true);
            }
          }

          return newMultiplier;
        });
      }, UPDATE_INTERVAL_MS);
    }

    return () => {
      // Cleanup interval on unmount or when game stops
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isGameRunning]);

  // Start a new game
  const handleStartGame = () => {
    if (!betAmount || betAmount <= 0) {
      setSnackbarMessage('Please enter a valid bet amount.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }
    setMultiplier(INITIAL_MULTIPLIER);
    setHasCashedOut(false);
    setCrashPoint(generateCrashPoint());
    setIsGameRunning(true);
    setChartData([INITIAL_MULTIPLIER]);
    setWinnings(null);
    setNotification(null);
  };

  // Cash out before the plane crashes
  const handleCashOut = () => {
    if (isGameRunning && !hasCashedOut) {
      setHasCashedOut(true);
      setIsGameRunning(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (cashOutSoundRef.current) {
        cashOutSoundRef.current.play();
      }
      const calculatedWinnings = parseFloat((multiplier * (betAmount as number)).toFixed(2));
      setWinnings(calculatedWinnings);
      setNotification(
        `You cashed out at ${multiplier.toFixed(
          2
        )}x! Your winnings are: $${calculatedWinnings}`
      );
      setSnackbarMessage(
        `You cashed out at ${multiplier.toFixed(
          2
        )}x! Your winnings are: $${calculatedWinnings}`
      );
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      // Update the leaderboard
      const playerName = 'Player 1'; // Replace with actual user name if authentication is implemented
      setLeaderboard((prev) => [...prev, { name: playerName, winnings: calculatedWinnings }]);
    }
  };

  // Generate a random crash point with a house edge
  const generateCrashPoint = () => {
    const random = Math.random();
    const houseEdge = 0.9; // 1% house edge

    const crashPoint = 1 / (1 - random * houseEdge);

    // Set a maximum crash point to avoid extremely high multipliers
    const maxCrashPoint = 100; // For example, limit to 100x
    return parseFloat(Math.min(crashPoint, maxCrashPoint).toFixed(2));
  };

  // Handle bet amount input changes
  const handleBetAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setBetAmount(value);
    } else {
      setBetAmount('');
    }
  };

  // Plane Plugin
  const planePlugin = {
    id: 'planePlugin',
    afterDatasetsDraw: (chart) => {
      if (!isImageLoaded || !planeImageRef.current) {
        return; // Exit if the image isn't loaded yet
      }

      const { ctx } = chart;
      const dataset = chart.data.datasets[0];
      const meta = chart.getDatasetMeta(0);
      const dataPoints = meta.data;
      const lastPointIndex = dataPoints.length - 1;

      if (lastPointIndex > 0) {
        const currentPoint = dataPoints[lastPointIndex].getProps(['x', 'y'], true);
        const previousPoint = dataPoints[lastPointIndex - 1].getProps(['x', 'y'], true);

        const deltaX = currentPoint.x - previousPoint.x;
        const deltaY = currentPoint.y - previousPoint.y;
        const angle = Math.atan2(deltaY, deltaX);

        const imgWidth = 40;
        const imgHeight = 40;

        ctx.save();
        ctx.translate(currentPoint.x, currentPoint.y);
        ctx.rotate(angle);
        ctx.drawImage(
          planeImageRef.current,
          -imgWidth / 2,
          -imgHeight / 2,
          imgWidth,
          imgHeight
        );
        ctx.restore();
      }
    },
  };

  // Gradient Fill Plugin
  const gradientFillPlugin = {
    id: 'gradientFillPlugin',
    beforeDatasetsDraw: (chart) => {
      const {
        ctx,
        chartArea: { top, bottom },
      } = chart;

      const gradient = ctx.createLinearGradient(0, top, 0, bottom);
      gradient.addColorStop(0, 'rgba(102, 255, 0, 0.5)'); // Top color
      gradient.addColorStop(1, 'rgba(222, 255, 100, 0.5)'); // Bottom color (adjusted alpha)

      chart.data.datasets[0].backgroundColor = gradient;
    },
  };

  // Chart configuration
  const chartOptions = {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        beginAtZero: true,
        suggestedMax: multiplier * 1.1,
        ticks: {
          color: '#ffffff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  const chartDataset = {
    labels: chartData.map((_, index) => index.toString()),
    datasets: [
      {
        data: chartData,
        borderColor: '#66ff00',
        fill: true, // Enable shading under the line
        pointRadius: 0,
        tension: 0.1,
      },
    ],
  };

  // Responsive design adjustments
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundImage: 'radial-gradient(circle, #222222 0%, #000000 100%)',
        color: '#ffffff',
        padding: isSmallScreen ? '20px 10px' : '40px 20px',
        borderRadius: '12px',
        textAlign: 'center',
        position: 'relative',
        maxWidth: '600px',
        margin: isSmallScreen ? '20px auto' : '40px auto',
        boxShadow: '0 0 20px rgba(0,0,0,0.5)',
      }}
    >
      {/* Multiplier Display */}
      <Typography
        variant={isSmallScreen ? 'h4' : 'h3'}
        sx={{
          color: isGameRunning ? '#66ff00' : '#ffffff',
          mt: 2,
          fontWeight: 'bold',
        }}
      >
        {multiplier.toFixed(2)}x
      </Typography>

      {/* Chart */}
      <Box sx={{ mt: isSmallScreen ? 2 : 4 }}>
        <Line
          data={chartDataset}
          options={chartOptions}
          plugins={[planePlugin, gradientFillPlugin]}
        />
      </Box>

      {/* Bet Amount Input */}
      <Box sx={{ mt: isSmallScreen ? 2 : 4 }}>
        <TextField
          label="Bet Amount"
          type="number"
          value={betAmount}
          onChange={handleBetAmountChange}
          sx={{
            mt: 2,
            mb: 2,
            width: '80%',
            input: { color: '#ffffff' },
            label: { color: '#aaaaaa' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#555555',
              },
              '&:hover fieldset': {
                borderColor: '#888888',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#66ff00',
              },
            },
          }}
          InputProps={{ inputProps: { min: 0 }, style: { color: '#ffffff' } }}
          InputLabelProps={{ style: { color: '#aaaaaa' } }}
        />
      </Box>

      {/* Winnings Display */}
      {winnings !== null && (
        <Typography variant="h5" sx={{ mt: 2, color: '#66ff00' }}>
          Winnings: ${winnings.toFixed(2)}
        </Typography>
      )}

      {/* Notification Messages */}
      {notification && (
        <Typography variant="body1" sx={{ mt: 2, color: '#ff9800' }}>
          {notification}
        </Typography>
      )}

      {/* Buttons */}
      {isGameRunning ? (
        <Button
          variant="contained"
          onClick={handleCashOut}
          sx={{
            mt: 2,
            backgroundColor: '#ff1744',
            '&:hover': {
              backgroundColor: '#d50000',
            },
          }}
          disabled={hasCashedOut}
          aria-label="Cash Out"
        >
          Cash Out
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={handleStartGame}
          sx={{
            mt: 2,
            backgroundColor: '#2979ff',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
          aria-label="Start Game"
        >
          Start Game
        </Button>
      )}

      {/* Leaderboard */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Leaderboard
        </Typography>
        <ol>
          {leaderboard
            .sort((a, b) => b.winnings - a.winnings)
            .slice(0, 5)
            .map((entry, index) => (
              <li key={index}>
                <Typography variant="body1">
                  {entry.name}: ${entry.winnings.toFixed(2)}
                </Typography>
              </li>
            ))}
        </ol>
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AviatorGame;
