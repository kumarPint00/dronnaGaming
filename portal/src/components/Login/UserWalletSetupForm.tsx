// src/components/UserDetailsForm.tsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  MenuItem,
  useMediaQuery,
  useTheme,
  Grid,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

interface UserDetailsFormProps {
  onSubmit: (data: any) => void;
  onClose: () => void;
}

const UserDetailsForm: React.FC<UserDetailsFormProps> = ({ onSubmit, onClose }) => {
  const { control, handleSubmit } = useForm();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={true}
      onClose={onClose}
      maxWidth="sm"
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
      <DialogTitle>Confirm your details</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 2 }}>
            <Grid container spacing={isMobile ? 1 : 2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="First name"
                      variant="outlined"
                      sx={{ backgroundColor: '#2c2c3c', borderRadius: 2 }}
                      InputLabelProps={{ style: { color: '#ccc' } }}
                      InputProps={{ style: { color: '#fff' } }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Last name"
                      variant="outlined"
                      sx={{ backgroundColor: '#2c2c3c', borderRadius: 2 }}
                      InputLabelProps={{ style: { color: '#ccc' } }}
                      InputProps={{ style: { color: '#fff' } }}
                    />
                  )}
                />
              </Grid>
              {/* Add other fields for country, place of birth, etc. */}
            </Grid>
          </Box>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
          >
            Save and Continue
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UserDetailsForm;
