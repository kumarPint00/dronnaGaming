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
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
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
  Home as BrowseIcon,
  Casino as CasinoIcon,
  SportsEsports as BetsIcon,
  SportsSoccer as SportsIcon,
  Games as GamesIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import { Theme, useTheme } from '@mui/material';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles((theme: Theme) => ({
  drawerPaper: {
    backgroundColor: '#102839',
    color: '#142fdd',
    width: (props: { isOpen: boolean }) => (props.isOpen ? 240 : 60),
    transition: 'width 0.3s',
    overflowX: 'hidden',
  },
  menuButton: {
    position: 'absolute',
    top: 16,
    left: (props: { isOpen: boolean }) => (props.isOpen ? 200 : 16),
    zIndex: 1300,
    color: '#142fdd',
  },
  listItem: {
    '&:hover': {
      backgroundColor: '#1f3b4d',
    },
  },
  listItemIcon: {
    color: '#142fdd',
  },
  nestedListItem: {
    paddingLeft: 4,
    '&:hover': {
      backgroundColor: '#1f3b4d',
    },
  },
  bottomNavigation: {
    display: 'flex',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#cedae3',
    zIndex: 1300,
  },
  hiddenBottomNavigation: {
    display: 'none',
  },
}));

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [openPromotions, setOpenPromotions] = useState(false);
  const [openSponsorships, setOpenSponsorships] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [value, setValue] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles({ isOpen });

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
      <Drawer
        variant="permanent"
        open={isMobile ? false : isOpen}
        classes={{ paper: classes.drawerPaper }}
      >
        <IconButton onClick={toggleSidebar} className={classes.menuButton}>
          <MenuIcon />
        </IconButton>

        <Box mt={8}>
          <List>
            {/* Promotions with dropdown */}
            <ListItem component="button" onClick={() => handleToggle(setOpenPromotions)} className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <PromotionsIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Promotions" />}
              {isOpen && (openPromotions ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            <Collapse in={openPromotions && isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem component="button" onClick={() => handleClick('$75k Weekly Raffle')} className={classes.nestedListItem}>
                  <ListItemText primary="$75k Weekly Raffle" />
                </ListItem>
                <ListItem component="button" onClick={() => handleClick('$100k Race - 24 Hours')} className={classes.nestedListItem}>
                  <ListItemText primary="$100k Race - 24 Hours" />
                </ListItem>
                <ListItem component="button" onClick={() => handleClick('Pragmatic Drops & Wins')} className={classes.nestedListItem}>
                  <ListItemText primary="Pragmatic Drops & Wins" />
                </ListItem>
                <ListItem component="button" onClick={() => handleClick('View All')} className={classes.nestedListItem}>
                  <ListItemText primary="View All" />
                </ListItem>
              </List>
            </Collapse>

            {/* Other menu items */}
            <ListItem component="button" onClick={() => handleClick('Affiliate')} className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <AffiliateIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Affiliate" />}
            </ListItem>

            <ListItem component="button" onClick={() => handleClick('VIP Club')} className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <VipClubIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="VIP Club" />}
            </ListItem>

            <ListItem component="button" onClick={() => handleClick('Blog')} className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <BlogIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Blog" />}
            </ListItem>

            <ListItem component="button" onClick={() => handleClick('Forum')} className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <ForumIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Forum" />}
            </ListItem>

            {/* Sponsorships with dropdown */}
            <ListItem component="button" onClick={() => handleToggle(setOpenSponsorships)} className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <SponsorshipsIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Sponsorships" />}
              {isOpen && (openSponsorships ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            <Collapse in={openSponsorships && isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem component="button" onClick={() => handleClick('Sponsorship Details')} className={classes.nestedListItem}>
                  <ListItemText primary="Sponsorship Details" />
                </ListItem>
              </List>
            </Collapse>

            {/* Language with dropdown */}
            <ListItem component="button" onClick={() => handleToggle(setOpenLanguage)} className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <LanguageIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Language: English" />}
              {isOpen && (openLanguage ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            <Collapse in={openLanguage && isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem component="button" onClick={() => handleClick('English')} className={classes.nestedListItem}>
                  <ListItemText primary="English" />
                </ListItem>
                <ListItem component="button" onClick={() => handleClick('Spanish')} className={classes.nestedListItem}>
                  <ListItemText primary="Spanish" />
                </ListItem>
                <ListItem component="button" onClick={() => handleClick('French')} className={classes.nestedListItem}>
                  <ListItemText primary="French" />
                </ListItem>
              </List>
            </Collapse>

            {/* Other fixed menu items */}
            <ListItem component="button" onClick={() => handleClick('Responsible Gambling')} className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <ResponsibleGamblingIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Responsible Gambling" />}
            </ListItem>

            <ListItem component="button" onClick={() => handleClick('Live Support')} className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <LiveSupportIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Live Support" />}
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={isMobile ? classes.bottomNavigation : classes.hiddenBottomNavigation}
      >
        <BottomNavigationAction label="Browse" icon={<BrowseIcon />} />
        <BottomNavigationAction label="Casino" icon={<CasinoIcon />} />
        <BottomNavigationAction label="Bets" icon={<BetsIcon />} />
        <BottomNavigationAction label="Sports" icon={<SportsIcon />} />
        <BottomNavigationAction label="Games" icon={<GamesIcon />} />
        <BottomNavigationAction label="Chat" icon={<ChatIcon />} />
      </BottomNavigation>
    </>
  );
};

export default Sidebar;
