// src/components/RegisterStepTwo.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import termsAndConditionsContent from '@/content/termsandconditions';

interface RegisterStepTwoProps {
  isChecked: boolean;
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBack: () => void;
  onSubmit: () => void; // New prop for form submission
}

const RegisterStepTwo: React.FC<RegisterStepTwoProps> = ({ isChecked, onCheckboxChange, onBack, onSubmit }) => {
  const [canCheck, setCanCheck] = useState(false);
  const termsRef = useRef<HTMLDivElement>(null);

  // Handle scrolling to enable checkbox
  const handleScroll = () => {
    if (termsRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = termsRef.current;
      if (scrollTop + clientHeight >= scrollHeight ) {
        // Allow for a slight buffer with -5 to ensure it triggers properly
        setCanCheck(true);
      }
    }
  };

  useEffect(() => {
    const termsElement = termsRef.current;
    if (termsElement) {
      termsElement.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (termsElement) {
        termsElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Dialog
      open={true}
      onClose={() => {}}
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
        <IconButton
          aria-label="back"
          onClick={onBack}
          sx={{
            position: 'absolute',
            left: 8,
            top: 8,
            color: '#fff',
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        Create an Account
        <IconButton
          aria-label="close"
          onClick={() => {}}
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
        <Box sx={{ mb: 2, textAlign: 'center' }}>
          <Typography variant="subtitle1" sx={{ color: '#bbb' }}>
            Step 2/2: Read and accept the terms and conditions
          </Typography>
        </Box>

        {/* Terms and Conditions */}
        <Box
          ref={termsRef}
          sx={{
            height: 200,
            overflowY: 'scroll',
            backgroundColor: '#2c2c3c',
            padding: 2,
            borderRadius: 2,
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
            Terms and Conditions
          </Typography>
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            {termsAndConditionsContent}
          </Typography>
        </Box>

        {/* Checkbox for agreement */}
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={onCheckboxChange}
              sx={{
                color: '#00e676',
                '&.Mui-checked': {
                  color: '#00e676',
                },
              }}
              disabled={canCheck} // Disable checkbox until scrolled
            />
          }
          label={<Typography sx={{ color: '#ccc' }}>I have read and agree to the terms and conditions</Typography>}
        />

        {/* Play Now Button */}
        <Button
          variant="contained"
          fullWidth
          color="success"
          sx={{
            mt: 2,
            backgroundColor: isChecked ? '#00e676' : '#555',
            color: '#000',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0, 255, 0, 0.5)',
            '&:hover': {
              backgroundColor: isChecked ? '#00c853' : '#555',
            },
          }}
          disabled={!isChecked}
          onClick={onSubmit} // Handle form submission
        >
          Play Now
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterStepTwo;
