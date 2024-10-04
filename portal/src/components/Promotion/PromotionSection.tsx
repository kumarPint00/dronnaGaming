// src/components/PromoSection.tsx
"use client";

import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import StarIcon from '@mui/icons-material/Star';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ReplayIcon from '@mui/icons-material/Replay';

// Sample data for each section
const sections = [
  {
    title: 'Bonus Boosts',
    description: 'Weekly boosts and monthly bonuses mean you’ll get rewarded the more you play top casino games and bet on your favourite sports.',
    icon: <FlashOnIcon style={{ color: '#FFC107' }} />,
  },
  {
    title: 'Raffles & Races',
    description: 'Get in the draw to win 75K each week. Plus score big on daily races.',
    icon: <StarIcon style={{ color: '#FFC107' }} />,
  },
  {
    title: 'Promotions',
    description: 'Make the most from our casino promotions and sports betting bonuses which are updated weekly.',
    icon: <CardGiftcardIcon style={{ color: '#FFC107' }} />,
  },
  {
    title: 'High Returns-to-Player (RTP)',
    description: 'With enhanced RTP percentages, you stand a chance to win big every time you play.',
    icon: <ReplayIcon style={{ color: '#FFC107' }} />,
  },
];

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    backgroundColor: '#0d1b2a',
    padding: '40px 20px',
    color: '#fff',
    borderRadius: '12px',
    margin:'20px auto'

  },
  leftPanel: {
    width: '300px',
    marginRight: '20px',
  },
  listItem: {
    cursor: 'pointer',
    marginBottom: '10px',
    '&:hover': {
      backgroundColor: '#1b263b',
    },
  },
  activeListItem: {
    backgroundColor: '#1b263b',
    borderLeft: '5px solid #FFC107',
  },
  rightPanel: {
    flex: 1,
    backgroundColor: '#1b263b',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  listItemIcon: {
    color: '#FFC107',
  },
}));

const PromoSection: React.FC = () => {
  const classes = useStyles();
  const [selectedSection, setSelectedSection] = useState(0);

  return (
    <Box className={classes.root}>
      {/* Left Section */}
      <Box className={classes.leftPanel}>
        <List>
          {sections.map((section, index) => (
            <ListItem
              key={index}
              className={`${classes.listItem} ${selectedSection === index ? classes.activeListItem : ''}`}
              onClick={() => setSelectedSection(index)}
            >
              <ListItemIcon className={classes.listItemIcon}>{section.icon}</ListItemIcon>
              <ListItemText primary={section.title} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Right Section */}
      <Paper className={classes.rightPanel} elevation={3}>
        <ListItemIcon className={classes.listItemIcon}>{sections[selectedSection].icon}</ListItemIcon>
        <Typography variant="h6" gutterBottom>
          {sections[selectedSection].title}
        </Typography>
        <Typography variant="body1">{sections[selectedSection].description}</Typography>
      </Paper>
    </Box>
  );
};

export default PromoSection;
