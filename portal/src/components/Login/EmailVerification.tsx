// src/components/EmailVerificationDialog.tsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface EmailVerificationDialogProps {
  email: string;
  onResend: () => void;
  onContinue: () => void;
  onClose: () => void;
}

const EmailVerificationDialog: React.FC<EmailVerificationDialogProps> = ({ email, onResend, onContinue, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={true}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#1e1e2f',
          color: '#fff',
          borderRadius: 3,
          padding: 2,
        },
      }}
    >
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#fff',
          }}
        >
          <CloseIcon />
        </IconButton>
        Confirm your email
      </DialogTitle>
      <DialogContent>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Please check your email & click the verification link to activate your account.
        </Typography>
        <TextField
          fullWidth
          label="Email"
          value={email}
          variant="outlined"
          sx={{ mb: 2, backgroundColor: '#2c2c3c', borderRadius: 2 }}
          InputLabelProps={{
            style: { color: '#ccc' },
          }}
          InputProps={{
            style: { color: '#fff' },
          }}
        />
        <Button
          onClick={onResend}
          variant="contained"
          fullWidth
          sx={{
            mb: 2,
            backgroundColor: '#555',
            '&:hover': { backgroundColor: '#777' },
          }}
        >
          Resend email
        </Button>
        <Button
          onClick={onContinue}
          variant="contained"
          fullWidth
          color="primary"
        >
          Continue
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EmailVerificationDialog;
