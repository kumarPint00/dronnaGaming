// src/components/RegisterDialog.tsx
'use client'
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RegisterStepOne from './RegisterUserStepOne';
import RegisterStepTwo from './RegisterUserStepTwo';
import { useUser } from '@/context/Context';

const RegisterDialog: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
    const { setUser } = useUser();
    const [step, setStep] = useState(1);
    const [isChecked, setIsChecked] = useState(false);
    const [formValues, setFormValues] = useState({
        email: '',
        username: '',
        password: '',
        dateOfBirth: { day: '', month: '', year: '' },
        phone: '',
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    // Handle input change for the form
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // Proceed to Step 2
    const handleContinue = () => {
        setStep(2);
    };

    // Handle Back Button to go back to Step 1
    const handleBack = () => {
        setStep(1);
    };

    // Handle checkbox for terms and conditions
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    // Handle form submission
    const handleSubmit = () => {
       const userData ={
        email: formValues.email,
        username: formValues.username,
        password: formValues.password,
        dateOfBirth: `${formValues.dateOfBirth.year}-${formValues.dateOfBirth.month}-${formValues.dateOfBirth.day}`,
        phone: formValues.phone
       }

       setUser(userData);

        setTimeout(() => {
            console.log('Form Submitted:', formValues);
            setIsLoggedIn(true);
            onClose(); // Close the dialog
        }, 1000);

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
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
                },
            }}
        >
            <DialogTitle>
                Create an Account
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{ position: 'absolute', right: 8, top: 8, color: '#fff' }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {step === 1 ? (
                    <RegisterStepOne formValues={formValues} onChange={handleInputChange} onContinue={handleContinue} />
                ) : (
                    <RegisterStepTwo
                        isChecked={isChecked}
                        onCheckboxChange={handleCheckboxChange}
                        onBack={handleBack}
                        onSubmit={handleSubmit} // Pass the submit handler
                    />
                )}
            </DialogContent>
        </Dialog>
    );
};

export default RegisterDialog;
