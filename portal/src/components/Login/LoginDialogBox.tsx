import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from 'react-hook-form';
import { useUser } from '@/context/Context';

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

interface LoginFormInputs {
  username: string;
  password: string;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, onClose }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [loading, setLoading] = useState(false);
  const {setUser} = useUser();

  const onSubmit = (data: LoginFormInputs) => {
    setLoading(true);
    // Handle login logic here
    const userData = {
      username: data.username,
      password: data.password,
    };
    setUser(userData);

    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 1000); // Simulating a network request
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#1e1e2f',
          color: '#fff',
          borderRadius: 3,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.7)',
          padding: 2,
        },
      }}
    >
      <DialogTitle sx={{ textAlign: 'center', color: '#fff' }}>
        Sign In
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
      </DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 2 }}>
          {/* Username / Email */}
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{ required: 'Email or Username is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Email or Username"
                variant="outlined"
                margin="normal"
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ''}
                InputProps={{
                  sx: { backgroundColor: '#2c2c3c', color: '#fff', borderRadius: 2 },
                }}
                InputLabelProps={{ style: { color: '#ccc' } }}
              />
            )}
          />

          {/* Password */}
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: 'Password is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
                margin="normal"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ''}
                InputProps={{
                  sx: { backgroundColor: '#2c2c3c', color: '#fff', borderRadius: 2 },
                }}
                InputLabelProps={{ style: { color: '#ccc' } }}
              />
            )}
          />

          {/* Sign In Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
            disabled={loading}
            sx={{
              mt: 2,
              backgroundColor: '#00e676',
              color: '#000',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#00c853',
              },
            }}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </Box>

        {/* Forgot Password */}
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#ccc', cursor: 'pointer', mb: 1 }}>
            Forgot Password
          </Typography>
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            Don't have an account? <span style={{ color: '#00e676', cursor: 'pointer' }}>Register an Account</span>
          </Typography>
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Box sx={{ width: 40, height: 40, backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Replace this with actual social media icons */}
            <Typography variant="body2" sx={{ color: '#00e676' }}>F</Typography>
          </Box>
          <Box sx={{ width: 40, height: 40, backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="body2" sx={{ color: '#00e676' }}>G</Typography>
          </Box>
          <Box sx={{ width: 40, height: 40, backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="body2" sx={{ color: '#00e676' }}>T</Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
