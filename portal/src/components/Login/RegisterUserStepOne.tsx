'use client';
import React, { useState } from 'react';
import {
    TextField,
    Button,
    Grid,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Box,
} from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

interface RegisterStepOneProps {
    formValues: any;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onContinue: () => void;
}

const RegisterStepOne: React.FC<RegisterStepOneProps> = ({ formValues, onChange, onContinue }) => {
    const [loading, setLoading] = useState(false);

    const passwordCriteria = {
        hasUpperCase: /[A-Z]/.test(formValues.password),
        hasLowerCase: /[a-z]/.test(formValues.password),
        hasNumber: /\d/.test(formValues.password),
        isValidLength: formValues.password.length >= 8,
    };

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

 

    return (
        <>
            <Box sx={{ mb: 2, textAlign: 'center' }}>
                <Typography variant="subtitle1" sx={{ color: '#fff' }}>
                    Step 1/2: Fill out your details
                </Typography>
            </Box>
                <Grid item xs={12} mb={2}>
                    <InputLabel sx={{ color: '#fff', mb: 1 }}>
                        Email
                        <Typography component="span" sx={{ color: 'error.main', ml: 0.5 }}>*</Typography>
                    </InputLabel>
                    <TextField
                        name="email"
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        value={formValues.email}
                        onChange={onChange}
                        required
                        InputLabelProps={{ style: { color: '#fff' } }}
                        InputProps={{ style: { color: '#fff' } }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#00e676',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#00c853',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00e676',
                                },
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} mb={2}>
                    <InputLabel sx={{ color: '#fff', mb: 1 }}>
                        Username
                        <Typography component="span" sx={{ color: 'error.main', ml: 0.5 }}>*</Typography>
                    </InputLabel>
                    <TextField
                        name="username"
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        value={formValues.username}
                        onChange={onChange}
                        required
                        InputLabelProps={{ style: { color: '#fff' } }}
                        InputProps={{ style: { color: '#fff' } }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#00e676',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#00c853',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00e676',
                                },
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel sx={{ color: '#fff', mb: 1 }}>
                        Password
                        <Typography component="span" sx={{ color: 'error.main', ml: 0.5 }}>*</Typography>
                    </InputLabel>
                    <TextField
                        name="password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        value={formValues.password}
                        onChange={onChange}
                        required
                        InputLabelProps={{ style: { color: '#fff' } }}
                        InputProps={{ style: { color: '#fff' } }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#00e676',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#00c853',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00e676',
                                },
                            },
                        }}
                    />
                    <Box sx={{ mt: 1 }}>
                        <Typography variant="body2" sx={{ color: '#fff' }}>
                            {passwordCriteria.hasLowerCase ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />} Includes lower and upper case
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#fff' }}>
                            {passwordCriteria.hasNumber ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />} At least 1 number
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#fff' }}>
                            {passwordCriteria.isValidLength ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />} Minimum 8 characters
                        </Typography>
                    </Box>
                </Grid>
                <Grid container spacing={2} mt={3}>
                    <InputLabel sx={{ color: '#fff' }}>
                        Date Of Birth
                        <Typography component="span" sx={{ color: 'error.main', ml: 0.5 }}>*</Typography>
                    </InputLabel>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            border: '1px solid #00e676',
                            borderRadius: '4px',
                            padding: '8px',
                            height: '56px',
                            '&:hover': {
                                borderColor: '#00c853',
                            },
                        }}
                    >
                        <Grid item xs={4} p={1}>
                            <FormControl fullWidth>
                                <InputLabel sx={{ color: '#fff' }}>Day</InputLabel>
                                <Select
                                    name="day"
                                    value={formValues.day || ''}
                                    onChange={onChange}
                                    required
                                    sx={{
                                        color: '#fff',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#00e676',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#00c853',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#00e676',
                                        },
                                    }}
                                >
                                    {days.map((day) => (
                                        <MenuItem key={day} value={day}>{day}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4} p={1}>
                            <FormControl fullWidth>
                                <InputLabel sx={{ color: '#fff' }}>Month</InputLabel>
                                <Select
                                    name="month"
                                    value={formValues.month || ''}
                                    onChange={onChange}
                                    required
                                    sx={{
                                        color: '#fff',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#00e676',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#00c853',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#00e676',
                                        },
                                    }}
                                >
                                    {months.map((month, index) => (
                                        <MenuItem key={month} value={index + 1}>{month}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4} p={1}>
                            <FormControl fullWidth>
                                <InputLabel sx={{ color: '#fff' }}>Year</InputLabel>
                                <Select
                                    name="year"
                                    value={formValues.year || ''}
                                    onChange={onChange}
                                    required
                                    sx={{
                                        color: '#fff',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#00e676',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#00c853',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#00e676',
                                        },
                                    }}
                                >
                                    {years.map((year) => (
                                        <MenuItem key={year} value={year}>{year}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} mt={2}>
                    <Typography variant="body2" sx={{ mb: 1, color: '#fff' }}>
                        Phone (Optional)
                    </Typography>
                    <PhoneInput
                        country={'us'}
                        value={formValues.phone || ''}
                        onChange={(value) => onChange({ target: { name: 'phone', value } })}
                        inputStyle={{
                            width: '100%',
                            height: '56px',
                            color: '#962222',
                            border: '1px solid #00e676',
                            borderRadius: '4px',
                        }}
                        containerStyle={{
                            borderColor: '#00e676',
                        }}
                    />
                </Grid>
                <Grid item xs={12} mt={2}>
                    <TextField
                        label="Code (Optional)"
                        name="code"
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        value={formValues.code || ''}
                        onChange={onChange}
                        InputLabelProps={{ style: { color: '#fff' } }}
                        InputProps={{ style: { color: '#fff' } }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#00e676',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#00c853',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00e676',
                                },
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} mt={3}>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        color="success"
                        disabled={loading}
                        onClick={onContinue}
                    >
                        {loading ? 'Submitting...' : 'Continue'}
                    </Button>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                    <Typography variant="body2" sx={{ color: '#fff' }}>OR</Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                    <IconButton color="primary">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <GoogleIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <AppleIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                    <Typography variant="body2" sx={{ color: '#fff' }}>
                        Already have an account? <Button sx={{ color: '#fff' }}>Sign In</Button>
                    </Typography>
                </Grid>
        </>
    );
};

export default RegisterStepOne;
