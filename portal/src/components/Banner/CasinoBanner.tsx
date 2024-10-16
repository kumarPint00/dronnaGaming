"use client"; // Ensure this marks the component as a client component

import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import styled from 'styled-components';
import Grid from '@mui/material/Grid2';

interface CasinoBannerProps {
  title: string;
  subText: string;
  buttonText: string;
  menuItems: Array<{ icon: React.ReactNode; label: string }>;
  imageSrc: string;
}

// Custom reusable button component using Styled Components and MUI
const CustomButton = styled.button`
  background-color: #0066ff;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: #0044cc;
  }
`;

// Custom reusable menu item component using Styled Components and MUI
const CustomMenuItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => {
  const MenuItemWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1a237e;
    border-radius: 8px;
    padding: 10px;
    width: 80px;
    height: 80px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
  `;

  const IconContainer = styled(Box)`
    background-color: #3d5afe;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  `;

  return (
    <MenuItemWrapper>
      <IconContainer>{icon}</IconContainer>
      <Typography variant="body2" align="center" sx={{ color: '#fff' }}>
        {label}
      </Typography>
    </MenuItemWrapper>
  );
};

// Banner container and layout using Styled Components and MUI
const BannerContainer = styled(Box)<{ isMobile: boolean }>`
  background: linear-gradient(to right, #001220, #002453);
  padding: 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin: 20px auto;
`;

const ContentContainer = styled(Box)<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  height: 90%;
  width: ${(props) => (props.isMobile ? '100%' : '60%')};
`;

const MenuContainer = styled(Box)<{ isMobile: boolean }>`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  flex-wrap: ${(props) => (props.isMobile ? 'wrap' : 'nowrap')};
`;

const ImageContainer = styled(Box)`
  height: 100%;
  width: 100%;
  max-width: 500px;
  padding-left:200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const BannerImage = styled.img`
  width: 100%;
  display: block;
`;

const CasinoBanner: React.FC<CasinoBannerProps> = ({
  title,
  subText,
  buttonText,
  menuItems,
  imageSrc,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Custom media query for mobile

  const handleButtonClick = () => {
    console.log('Explore Casino clicked!');
  };

  return (
    <BannerContainer isMobile={isMobile}>
      <Grid container spacing={2} sx={{ height: '100%', width: '100%' }}>

        <Grid size={6}>

      <ContentContainer isMobile={isMobile}>
        <Typography variant="h4" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {subText}
        </Typography>
        <MenuContainer isMobile={isMobile}>
          {menuItems.map((item, index) => (
            <CustomMenuItem key={index} icon={item.icon} label={item.label} />
          ))}
        </MenuContainer>
        <CustomButton onClick={handleButtonClick}>{buttonText}</CustomButton>
      </ContentContainer>
        </Grid>
  <Grid size={6}>
  <ImageContainer>
        <BannerImage src={imageSrc} alt="Casino banner" loading="lazy" />
      </ImageContainer>
  </Grid>
      </Grid>
    </BannerContainer>
  );
};

export default CasinoBanner;
