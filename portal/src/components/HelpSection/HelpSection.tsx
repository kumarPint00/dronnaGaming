// src/components/HelpSection.tsx
"use client";

import React from 'react';
import { Box, Grid, Typography, TextField, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SendIcon from '@mui/icons-material/Send';
import LanguageIcon from '@mui/icons-material/Language';
import HelpChatComponent from './HelpChatSection';

interface ChatMessage {
  text: string;
  sender: string;
  color: string;
}

const useStyles = makeStyles(() => ({
  sectionRoot: {
    backgroundColor: '#0d1b2a',
    padding: '40px 20px',
    color: '#fff',
  },
  leftContent: {
    flex: 1,
    paddingRight: '20px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '40px',
  },
  chatBox: {
    backgroundColor: '#1b263b',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '400px',
    position: 'relative',
  },
  chatHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  chatMessages: {
    flex: 1,
    overflowY: 'auto',
    paddingRight: '10px',
  },
  chatBubble: {
    marginBottom: '10px',
    padding: '10px 15px',
    borderRadius: '12px',
    maxWidth: '80%',
    color: '#fff',
  },
  inputArea: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#243447',
    borderRadius: '12px',
    padding: '5px 10px',
    marginTop: '10px',
  },
  inputField: {
    flex: 1,
    color: '#fff',
    '& .MuiInputBase-root': {
      color: '#fff',
    },
  },
  sendButton: {
    color: '#fff',
  },
}));

const HelpSection: React.FC = () => {
  const classes = useStyles();

  const messages: ChatMessage[] = [
    { text: 'Hey there! How can we help?', sender: 'English Support', color: '#374151' },
    { text: 'Oi! Você fala português?', sender: 'User', color: '#10b981' },
    { text: 'Ei! Como podemos ajudar?', sender: 'Suporte português', color: '#374151' },
    { text: '実際のところ、日本語を話すことに切り替えてもいいですか？', sender: 'User', color: '#ef4444' },
  ];

  return (
    <Box className={classes.sectionRoot}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Text Section */}
        <Grid item xs={12} md={6} className={classes.leftContent}>
          <Typography className={classes.title}>Our help team speaks your language</Typography>
          <Typography className={classes.subtitle}>
            Get 24/7 support from our live customer support team in your native language.
          </Typography>
        </Grid>

        {/* Right Chat Box Section */}
        <Grid item xs={12} md={4}>
            <HelpChatComponent/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HelpSection;
