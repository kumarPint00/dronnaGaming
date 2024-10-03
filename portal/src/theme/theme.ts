// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0066ff', // Your primary color (blue)
      light: '#3399ff', // Light shade for hover effects
      dark: '#0044cc',  // Dark shade for button hover effects
      contrastText: '#fff', // Text color on primary color
    },
    secondary: {
      main: '#ff4757', // Your secondary color (red for icons)
    },
    background: {
      default: '#0d1b2a', // Background color for sections
      paper: '#1b263b',   // Background for elements like feature boxes
    },
    text: {
      primary: '#ffffff', // Default text color
      secondary: '#b0c4de', // Subtle text color for subtitles or less important text
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
});

export default theme;
