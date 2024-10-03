'use client';
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import {
  ExpandLess,
  ExpandMore,
  LocalOffer as PromotionsIcon,
  Group as AffiliateIcon,
  EmojiEvents as VipClubIcon,
  Description as BlogIcon,
  Forum as ForumIcon,
  LiveHelp as LiveSupportIcon,
  Language as LanguageIcon,
  Gavel as ResponsibleGamblingIcon,
  CardGiftcard as SponsorshipsIcon,
} from '@mui/icons-material';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [openPromotions, setOpenPromotions] = useState(false);
  const [openSponsorships, setOpenSponsorships] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle = (toggleFunction: React.Dispatch<React.SetStateAction<boolean>>) => {
    toggleFunction((prev) => !prev);
  };

  const handleClick = (text: string) => {
    // Placeholder for click handling logic
    console.log(`${text} clicked`);
  };

  return (
    <>
      {/* Toggle Button */}
    
      <Drawer
        variant="permanent"
        open={isOpen}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#102839',
            color: '#ffffff',
            width: isOpen ? 240 : 60,
            transition: 'width 0.3s',
            overflowX: 'hidden',
          },
        }}
      >
          <IconButton
        onClick={toggleSidebar}
        sx={{
          position: 'absolute',
          top: 16,
          left: isOpen ? 200 : 16,
          zIndex: 1300,
          color: '#ffffff',
        }}
      >
        <MenuIcon />
      </IconButton>

        <Box sx={{ mt: 8 }}>
          <List>
            {/* Promotions with dropdown */}
            <ListItem
              button
              onClick={() => handleToggle(setOpenPromotions)}
              sx={{
                '&:hover': { backgroundColor: '#1f3b4d' },
              }}
            >
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <PromotionsIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Promotions" />}
              {isOpen && (openPromotions ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            <Collapse in={openPromotions && isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  onClick={() => handleClick('$75k Weekly Raffle')}
                  sx={{ pl: 4, '&:hover': { backgroundColor: '#1f3b4d' } }}
                >
                  <ListItemText primary="$75k Weekly Raffle" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => handleClick('$100k Race - 24 Hours')}
                  sx={{ pl: 4, '&:hover': { backgroundColor: '#1f3b4d' } }}
                >
                  <ListItemText primary="$100k Race - 24 Hours" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => handleClick('Pragmatic Drops & Wins')}
                  sx={{ pl: 4, '&:hover': { backgroundColor: '#1f3b4d' } }}
                >
                  <ListItemText primary="Pragmatic Drops & Wins" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => handleClick('View All')}
                  sx={{ pl: 4, '&:hover': { backgroundColor: '#1f3b4d' } }}
                >
                  <ListItemText primary="View All" />
                </ListItem>
              </List>
            </Collapse>

            {/* Other menu items */}
            <ListItem button onClick={() => handleClick('Affiliate')} sx={{ '&:hover': { backgroundColor: '#1f3b4d' } }}>
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <AffiliateIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Affiliate" />}
            </ListItem>

            <ListItem button onClick={() => handleClick('VIP Club')} sx={{ '&:hover': { backgroundColor: '#1f3b4d' } }}>
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <VipClubIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="VIP Club" />}
            </ListItem>

            <ListItem button onClick={() => handleClick('Blog')} sx={{ '&:hover': { backgroundColor: '#1f3b4d' } }}>
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <BlogIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Blog" />}
            </ListItem>

            <ListItem button onClick={() => handleClick('Forum')} sx={{ '&:hover': { backgroundColor: '#1f3b4d' } }}>
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <ForumIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Forum" />}
            </ListItem>

            {/* Sponsorships with dropdown */}
            <ListItem
              button
              onClick={() => handleToggle(setOpenSponsorships)}
              sx={{ '&:hover': { backgroundColor: '#1f3b4d' } }}
            >
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <SponsorshipsIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Sponsorships" />}
              {isOpen && (openSponsorships ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            <Collapse in={openSponsorships && isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  onClick={() => handleClick('Sponsorship Details')}
                  sx={{ pl: 4, '&:hover': { backgroundColor: '#1f3b4d' } }}
                >
                  <ListItemText primary="Sponsorship Details" />
                </ListItem>
              </List>
            </Collapse>

            {/* Language with dropdown */}
            <ListItem
              button
              onClick={() => handleToggle(setOpenLanguage)}
              sx={{ '&:hover': { backgroundColor: '#1f3b4d' } }}
            >
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <LanguageIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Language: English" />}
              {isOpen && (openLanguage ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            <Collapse in={openLanguage && isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  onClick={() => handleClick('English')}
                  sx={{ pl: 4, '&:hover': { backgroundColor: '#1f3b4d' } }}
                >
                  <ListItemText primary="English" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => handleClick('Spanish')}
                  sx={{ pl: 4, '&:hover': { backgroundColor: '#1f3b4d' } }}
                >
                  <ListItemText primary="Spanish" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => handleClick('French')}
                  sx={{ pl: 4, '&:hover': { backgroundColor: '#1f3b4d' } }}
                >
                  <ListItemText primary="French" />
                </ListItem>
              </List>
            </Collapse>

            {/* Other fixed menu items */}
            <ListItem
              button
              onClick={() => handleClick('Responsible Gambling')}
              sx={{ '&:hover': { backgroundColor: '#1f3b4d' } }}
            >
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <ResponsibleGamblingIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Responsible Gambling" />}
            </ListItem>

            <ListItem
              button
              onClick={() => handleClick('Live Support')}
              sx={{ '&:hover': { backgroundColor: '#1f3b4d' } }}
            >
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <LiveSupportIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Live Support" />}
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
