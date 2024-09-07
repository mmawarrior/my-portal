import React, { useState, forwardRef } from 'react';
import { Drawer, List, ListItemText, IconButton, Box, Typography, ButtonBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

// Aangepaste Link component met forwardRef voor compatibiliteit met React Router
const CustomButtonBase = forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
  <ButtonBase component={RouterLink} ref={ref} {...props} />
));

const SideMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon for Menu - alleen zichtbaar op kleinere schermen */}
      <IconButton
        onClick={toggleDrawer(true)}
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          display: { xs: 'flex', md: 'none' }, // Alleen zichtbaar voor xs (extra-small) tot md (medium) schermen
        }}
      >
        <MenuIcon style={{ fontSize: 40 }} />
      </IconButton>

      {/* Fullscreen Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '400px',
            backgroundColor: '#f9f9f9',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          },
        }}
      >
        {/* Close Button (bovenaan) */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '20px',
          }}
        >
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon style={{ fontSize: 30 }} />
          </IconButton>
        </Box>

        {/* Navigation Menu */}
        <Box sx={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <Typography variant="h5" style={{ marginBottom: '20px', fontWeight: 'bold' }}>
            Navigation
          </Typography>
          <List>
            {['Home', 'Chat', 'Showcase', 'Expertise', 'About', 'Feed', 'Contact'].map((text, index) => (
              <Box
                key={index}
                sx={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 20px',
                  marginBottom: '10px',
                  textDecoration: 'none',
                  color: 'black',
                  borderRadius: '8px',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                }}
              >
                <CustomButtonBase
                  to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{ fontSize: '24px', fontWeight: '500' }}
                  />
                </CustomButtonBase>
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default SideMenu;
