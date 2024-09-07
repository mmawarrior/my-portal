import React from 'react';
import { Box, Typography, Grid, Link, Container } from '@mui/material'; // Import Material UI componenten
import InstagramIcon from '@mui/icons-material/Instagram'; // Icon voor Instagram
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Icon voor LinkedIn
import TwitterIcon from '@mui/icons-material/Twitter'; // Icon voor Twitter
import EmailIcon from '@mui/icons-material/Email'; // Nieuw icoon voor e-mail

// Footer component - typeaanduiding React.FC geeft aan dat dit een functionele component is in TypeScript
const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: '50px 0', borderTop: '1px solid #ddd' }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="space-between">
          
          {/* Linker sectie - Contactinformatie */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              We would love to hear from you.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px' }}>
              Feel free to reach out if you want to collaborate with us, or simply have a chat.
            </Typography>
            {/* E-mail link met icon */}
            <Link 
              href="datmma@outlook.com" 
              underline="none" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: '#000', 
                fontWeight: 'bold', 
                '&:hover': { color: '#f50057' }, // Verander kleur bij hover
                marginTop: '10px' 
              }}
            >
              <EmailIcon sx={{ marginRight: '8px' }} /> {/* E-mail icoon naast de tekst */}
              chatportal@outlook.com
            </Link>
          </Grid>

          {/* Midden sectie - Adresinformatie */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              Our Address
            </Typography>
            <Typography variant="body2">Mennica Legacy Tower,</Typography>
            <Typography variant="body2">Prosta Str. 20, 00-850 Warsaw, Poland</Typography>
            <Typography variant="body2" sx={{ marginTop: '10px' }}>
              VAT: 5252837088
            </Typography>
            <Typography variant="body2">Unikorns Sp. z o. o.</Typography>
          </Grid>

          {/* Rechter sectie - Sociale media */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              Follow Us
            </Typography>
            {/* Links naar sociale media */}
            <Link 
              href="#" 
              underline="none" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: '#000', 
                marginBottom: '5px', 
                '&:hover': { color: '#f50057' } // Hover effect voor Instagram
              }}
            >
              <InstagramIcon sx={{ marginRight: '8px' }} /> {/* Instagram icoon */}
              Instagram
            </Link>
            <Link 
              href="#" 
              underline="none" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: '#000', 
                marginBottom: '5px', 
                '&:hover': { color: '#0e76a8' } // Hover effect voor LinkedIn
              }}
            >
              <LinkedInIcon sx={{ marginRight: '8px' }} /> {/* LinkedIn icoon */}
              LinkedIn
            </Link>
            <Link 
              href="#" 
              underline="none" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: '#000', 
                marginBottom: '5px', 
                '&:hover': { color: '#1DA1F2' } // Hover effect voor Twitter
              }}
            >
              <TwitterIcon sx={{ marginRight: '8px' }} /> {/* Twitter icoon */}
              Twitter
            </Link>
          </Grid>
        </Grid>

        {/* Onderste sectie - Voettekst */}
        <Box sx={{ marginTop: '50px', borderTop: '1px solid #ddd', paddingTop: '20px', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#777' }}>
            ©chatportal 2024. All rights reserved. 
            {/* Privacybeleid link */}
            <Link href="#" underline="hover">
               Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
