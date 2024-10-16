// File: components/Footer.tsx
import React from 'react';
import { Box, Grid, Typography, Link, Select, MenuItem, Divider } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#0a1e33', color: '#fff', padding: '40px 0' }}>
      {/* Top Section */}
      <Grid container spacing={3} justifyContent="space-between" sx={{ padding: '0 80px' }}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Casino</Typography>
          <Link href="#" color="inherit" underline="hover">Casino Games</Link><br />
          <Link href="#" color="inherit" underline="hover">Slots</Link><br />
          <Link href="#" color="inherit" underline="hover">Live Casino</Link><br />
          <Link href="#" color="inherit" underline="hover">Roulette</Link><br />
          <Link href="#" color="inherit" underline="hover">Blackjack</Link><br />
          <Link href="#" color="inherit" underline="hover">Providers</Link><br />
          <Link href="#" color="inherit" underline="hover">Promos & Competitions</Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Sports</Typography>
          <Link href="#" color="inherit" underline="hover">Sportsbook</Link><br />
          <Link href="#" color="inherit" underline="hover">Live Sports</Link><br />
          <Link href="#" color="inherit" underline="hover">Soccer</Link><br />
          <Link href="#" color="inherit" underline="hover">Basketball</Link><br />
          <Link href="#" color="inherit" underline="hover">Tennis</Link><br />
          <Link href="#" color="inherit" underline="hover">eSports</Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Support</Typography>
          <Link href="#" color="inherit" underline="hover">Help Center</Link><br />
          <Link href="#" color="inherit" underline="hover">Fairness</Link><br />
          <Link href="#" color="inherit" underline="hover">Responsible Gambling</Link><br />
          <Link href="#" color="inherit" underline="hover">Gamble Aware</Link><br />
          <Link href="#" color="inherit" underline="hover">Live Support</Link><br />
          <Link href="#" color="inherit" underline="hover">Self Exclusion</Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">About Us</Typography>
          <Link href="#" color="inherit" underline="hover">VIP Club</Link><br />
          <Link href="#" color="inherit" underline="hover">Affiliate</Link><br />
          <Link href="#" color="inherit" underline="hover">Privacy Policy</Link><br />
          <Link href="#" color="inherit" underline="hover">AML Policy</Link><br />
          <Link href="#" color="inherit" underline="hover">Terms of Service</Link>
        </Grid>
      </Grid>

      <Divider sx={{ backgroundColor: '#fff', margin: '20px 0' }} />

      {/* Middle Section - Logos */}
      <Grid container justifyContent="center" sx={{ paddingBottom: '20px' }}>
        {/* Add logo images here */}
        <Image src="/up365LogoDark.webp" alt="Logo" width={100} height={100} style={{ margin: '0 15px' }} />
        {/* Repeat the above img tag for more logos */}
      </Grid>

      <Divider sx={{ backgroundColor: '#fff', margin: '20px 0' }} />

      {/* Bottom Section */}
      <Box textAlign="center" sx={{ padding: '20px 0' }}>
        <Typography variant="body2">© 2024 UP365GAMING.com | All Rights Reserved.</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
          <LanguageIcon />
          <Select
            defaultValue="English"
            sx={{ color: '#fff', marginLeft: '10px', marginRight: '20px' }}
          >
            <MenuItem value="English">English</MenuItem>
            {/* Add more languages here */}
          </Select>
          <Select
            defaultValue="Decimal"
            sx={{ color: '#fff' }}
          >
            <MenuItem value="Decimal">Decimal</MenuItem>
            {/* Add more formats here */}
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
