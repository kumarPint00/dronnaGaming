// LotteryDrawSection.tsx
import React, { useRef } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import LotteryCard from './LotteryCard';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const lotteries = [
  {
    title: 'FAST KENO 20/80',
    prize: '$3,000.00',
    drawTime: '00h : 00m : 00s',
    flagSrc: '/path-to-flag.png', // Add proper path for flag images
    betButtonLabel: 'Bet Now',
  },
  {
    title: 'Marruecos Keno 20/80',
    prize: '$2,500.00',
    drawTime: '00h : 00m : 00s',
    flagSrc: '/path-to-flag.png',
    betButtonLabel: 'Bet Now',
  }, {
    title: 'FAST KENO 20/80',
    prize: '$3,000.00',
    drawTime: '00h : 00m : 00s',
    flagSrc: '/path-to-flag.png', // Add proper path for flag images
    betButtonLabel: 'Bet Now',
  },
  {
    title: 'Marruecos Keno 20/80',
    prize: '$2,500.00',
    drawTime: '00h : 00m : 00s',
    flagSrc: '/path-to-flag.png',
    betButtonLabel: 'Bet Now',
  }, {
    title: 'FAST KENO 20/80',
    prize: '$3,000.00',
    drawTime: '00h : 00m : 00s',
    flagSrc: '/path-to-flag.png', // Add proper path for flag images
    betButtonLabel: 'Bet Now',
  },
  {
    title: 'Marruecos Keno 20/80',
    prize: '$2,500.00',
    drawTime: '00h : 00m : 00s',
    flagSrc: '/path-to-flag.png',
    betButtonLabel: 'Bet Now',
  }, {
    title: 'FAST KENO 20/80',
    prize: '$3,000.00',
    drawTime: '00h : 00m : 00s',
    flagSrc: '/path-to-flag.png', // Add proper path for flag images
    betButtonLabel: 'Bet Now',
  },
  {
    title: 'Marruecos Keno 20/80',
    prize: '$2,500.00',
    drawTime: '00h : 00m : 00s',
    flagSrc: '/path-to-flag.png',
    betButtonLabel: 'Bet Now',
  }, {
    title: 'FAST KENO 20/80',
    prize: '$3,000.00',
    drawTime: '00h : 00m : 00s',
    flagSrc: '/path-to-flag.png', // Add proper path for flag images
    betButtonLabel: 'Bet Now',
  },
  {
    title: 'Marruecos Keno 20/80',
    prize: '$2,500.00',
    drawTime: '00h : 00m : 00s',
    flagSrc: '/path-to-flag.png',
    betButtonLabel: 'Bet Now',
  },
  // Add other lottery cards here
];

const LotteryDrawSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#10182B', position: 'relative' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Upcoming Lottery Draw
        </Typography>
        <IconButton
        onClick={scrollLeft}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          zIndex: 2,
          transform: 'translateY(-50%)',
          backgroundColor: '#fff',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        }}
      >
        <ArrowBackIos />
      </IconButton>
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
        <IconButton
        onClick={scrollRight}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          zIndex: 2,
          transform: 'translateY(-50%)',
          backgroundColor: '#fff',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
      </Box>

      {/* Left Arrow */}


      {/* Horizontal Scroll Container */}
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          gap: 3,
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
          paddingBottom: '10px',
        }}
      >
        {lotteries.map((lottery, index) => (
          <Box key={index} sx={{ minWidth: '260px', flex: '0 0 auto' }}>
            <LotteryCard {...lottery} />
          </Box>
        ))}
      </Box>

      {/* Right Arrow */}

    </Box>
  
  );
};

export default LotteryDrawSection;
