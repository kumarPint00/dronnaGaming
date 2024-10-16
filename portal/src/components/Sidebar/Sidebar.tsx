'use client';
import React, { useState, memo } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/system';
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
  Home as BrowseIcon,
  Casino as CasinoIcon,
  SportsEsports as BetsIcon,
  SportsSoccer as SportsIcon,
  Games as GamesIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerPaper = styled('div')<{ isOpen: boolean }>(({ isOpen }) => ({
  backgroundColor: '#0d2536',
  color: '#142fdd',
  width: isOpen ? 240 : 60,
  transition: 'width 0.3s',
  overflowX: 'hidden',
}));

const MenuButton = styled(IconButton)<{ isOpen: boolean }>(({ isOpen }) => ({
  position: 'absolute',
  top: 16,
  left: isOpen ? 200 : 16,
  zIndex: 1300,
  color: '#142fdd',
}));

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [openPromotions, setOpenPromotions] = useState(false);
  const [openSponsorships, setOpenSponsorships] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [value, setValue] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleToggle = (toggleFunction: React.Dispatch<React.SetStateAction<boolean>>) => {
    toggleFunction((prev) => !prev);
  };

  const handleClick = (text: string) => console.log(`${text} clicked`);

  return (
    <>
      <Drawer
        variant="permanent"
        open={!isMobile || isOpen}
        PaperProps={{ component: DrawerPaper, isOpen }}
      
      >
        <MenuButton onClick={toggleSidebar} isOpen={isOpen}>
          <MenuIcon />
        </MenuButton>

        <Box mt={8}>
          <List>
            <DropdownItem
              isOpen={isOpen}
              open={openPromotions}
              toggle={() => handleToggle(setOpenPromotions)}
              icon={<PromotionsIcon />}
              label="Promotions"
              items={[
                '$75k Weekly Raffle',
                '$100k Race - 24 Hours',
                'Pragmatic Drops & Wins',
                'View All',
              ]}
              onClick={handleClick}
            />

            <SimpleItem
              isOpen={isOpen}
              icon={<AffiliateIcon />}
              label="Affiliate"
              onClick={() => handleClick('Affiliate')}
            />

            <SimpleItem
              isOpen={isOpen}
              icon={<VipClubIcon />}
              label="VIP Club"
              onClick={() => handleClick('VIP Club')}
            />

            <SimpleItem
              isOpen={isOpen}
              icon={<BlogIcon />}
              label="Blog"
              onClick={() => handleClick('Blog')}
            />

            <DropdownItem
              isOpen={isOpen}
              open={openSponsorships}
              toggle={() => handleToggle(setOpenSponsorships)}
              icon={<SponsorshipsIcon />}
              label="Sponsorships"
              items={['Sponsorship Details']}
              onClick={handleClick}
            />

            <DropdownItem
              isOpen={isOpen}
              open={openLanguage}
              toggle={() => handleToggle(setOpenLanguage)}
              icon={<LanguageIcon />}
              label="Language: English"
              items={['English', 'Spanish', 'French']}
              onClick={handleClick}
            />

            <SimpleItem
              isOpen={isOpen}
              icon={<ResponsibleGamblingIcon />}
              label="Responsible Gambling"
              onClick={() => handleClick('Responsible Gambling')}
            />

            <SimpleItem
              isOpen={isOpen}
              icon={<LiveSupportIcon />}
              label="Live Support"
              onClick={() => handleClick('Live Support')}
            />
          </List>
        </Box>
      </Drawer>

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        style={{
          display: isMobile ? 'flex' : 'none',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#2284cf',
          zIndex: 1300,
        }}
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

const SimpleItem = memo(({ isOpen, icon, label, onClick }: any) => (
  <ListItem component="button" onClick={onClick}>
    <ListItemIcon>{icon}</ListItemIcon>
    {isOpen && <ListItemText primary={label} />}
  </ListItem>
));

const DropdownItem = memo(({ isOpen, open, toggle, icon, label, items, onClick }: any) => (
  <>
    <ListItem component="button" onClick={toggle}>
      <ListItemIcon>{icon}</ListItemIcon>
      {isOpen && <ListItemText primary={label} />}
      {isOpen && (open ? <ExpandLess /> : <ExpandMore />)}
    </ListItem>
    <Collapse in={open && isOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {items.map((item: string) => (
          <ListItem component="button" key={item} onClick={() => onClick(item)}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Collapse>
  </>
));

export default Sidebar;
