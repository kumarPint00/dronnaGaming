// src/components/HelpChatComponent.tsx
"use client";

import React from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SendIcon from '@mui/icons-material/Send';
import LanguageIcon from '@mui/icons-material/Language';

interface ChatMessage {
  text: string;
  sender: string;
  color: string;
}

const useStyles = makeStyles(() => ({
  chatContainer: {
    width: '300px',
    backgroundColor: '#1b263b',
    borderRadius: '12px',
    padding: '10px 0',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  header: {
    backgroundColor: '#2b3a67',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  chatTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  chatMessages: {
    padding: '20px',
    height: '250px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  chatBubble: {
    padding: '10px 15px',
    borderRadius: '12px',
    maxWidth: '80%',
    color: '#fff',
    wordWrap: 'break-word',
  },
  inputArea: {
    backgroundColor: '#243447',
    borderRadius: '0 0 12px 12px',
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
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
  GamesLogo: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#ffffff',
  },
}));

const HelpChatComponent: React.FC = () => {
  const classes = useStyles();

  // Placeholder messages
  const messages: ChatMessage[] = [
    { text: 'Hey there! How can we help?', sender: 'Support', color: '#374151' },
    { text: 'Oi! Você fala português?', sender: 'User', color: '#10b981' },
    { text: 'Ei! Como podemos ajudar?', sender: 'Support', color: '#374151' },
    { text: '実際のところ、日本語を話すことに切り替えてもいいですか？', sender: 'User', color: '#ef4444' },
  ];

  return (
    <Box className={classes.chatContainer}>
      {/* Header */}
      <Box className={classes.header}>
        <Typography className={classes.GamesLogo}>Dronna</Typography>
        <Box display="flex" alignItems="center">
          <LanguageIcon style={{ color: '#fff', marginRight: '5px' }} />
          <Typography variant="body2" style={{ color: '#fff' }}>
            EN
          </Typography>
        </Box>
      </Box>

      {/* Chat Messages */}
      <Box className={classes.chatMessages}>
        {messages.map((message, index) => (
          <Box
            key={index}
            className={classes.chatBubble}
            style={{ backgroundColor: message.color, alignSelf: message.sender === 'User' ? 'flex-end' : 'flex-start' }}
          >
            <Typography variant="body2">{message.text}</Typography>
          </Box>
        ))}
      </Box>

      {/* Input Area */}
      <Box className={classes.inputArea}>
        <TextField
          placeholder="Write a reply..."
          variant="standard"
          fullWidth
          className={classes.inputField}
          InputProps={{
            disableUnderline: true,
          }}
        />
        <IconButton className={classes.sendButton}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default HelpChatComponent;
