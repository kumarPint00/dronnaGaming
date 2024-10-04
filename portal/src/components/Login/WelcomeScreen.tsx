// src/components/WelcomeDialog.js
import React, { FC } from 'react';
import { Dialog, DialogTitle, DialogContent, Button, Typography } from '@mui/material';

interface WelcomeDialogProps {
  open: boolean;
  onClose: () => void;
  onSetupWallet: () => void;
}

const WelcomeDialog: FC<WelcomeDialogProps> = ({ open, onClose, onSetupWallet }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Welcome to Stake!</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          We know you’re eager to get started, so let’s quickly set up your wallet.
        </Typography>
        <Button onClick={onSetupWallet} color="primary">Setup Wallet</Button>
        <Button onClick={onClose}>Skip for Later</Button>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog;
