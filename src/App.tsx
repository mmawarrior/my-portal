import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import TempPage from './components/TempPage'; // Zorg ervoor dat dit een geldige component is
import SideMenu from './components/SideMenu'; // Het geüpdatete zijmenu
import Chat from './components/Chat'; // Zorg ervoor dat je een Chat component hebt
import Testimonials from './components/Testomonials'; // Nieuwe testimonials sectie
import Footer from './components/Footer'; // Footer component
import { AppBar, Toolbar, Typography, Button, Box, CssBaseline } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Functie om te bepalen of je op de Chat-pagina bent, met correcte types
const ShowOnNonChatPages: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const location = useLocation(); // Haal de huidige route op
  return location.pathname !== '/chat' ? <>{children}</> : null; // Render alleen als het niet de /chat pagina is
};

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline /> {/* Zorgt voor consistente weergave van elementen */}
      <div>
        {/* AppBar met het menu en navigatie */}
        <AppBar position="fixed" style={{ backgroundColor: '#fff', color: '#000' }}> {/* Fixed AppBar */}
          <Toolbar>
            {/* Hoofdtitel */}
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Chat Portal
            </Typography>

            {/* Desktop links - Alleen zichtbaar op grotere schermen */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button component={Link} to="/" color="inherit">
                Home
              </Button>
              <Button component={Link} to="/chat" color="inherit">
                Chat
              </Button>
              <Button component={Link} to="/showcase" color="inherit">
                Showcase
              </Button>
              <Button component={Link} to="/expertise" color="inherit">
                Expertise
              </Button>
              <Button component={Link} to="/about" color="inherit">
                About
              </Button>
              <Button component={Link} to="/feed" color="inherit">
                Feed
              </Button>
              <Button component={Link} to="/contact" color="inherit">
                Contact
              </Button>
            </Box>

            {/* Hamburger-menu om het SideMenu te openen - Zichtbaar op kleinere schermen */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <SideMenu />
            </Box>
          </Toolbar>
        </AppBar>

        {/* Padding-top toevoegen zodat content niet onder de navigatiebalk verdwijnt */}
        <Box sx={{ paddingTop: '80px' }}> {/* Zorgt ervoor dat content niet overlapt met de AppBar */}
          {/* Routes definiëren voor de applicatie */}
          <Routes>
            {/* Route naar de TempPage (startpagina) */}
            <Route path="/" element={<TempPage />} />

            {/* Route naar de Chat-pagina */}
            <Route path="/chat" element={<Chat />} />

            {/* Placeholder routes voor de andere pagina's */}
            <Route path="/showcase" element={<div></div>} />
            <Route path="/expertise" element={<div></div>} />
            <Route path="/about" element={<div></div>} />
            <Route path="/feed" element={<div></div>} />
            <Route path="/contact" element={<div></div>} />
          </Routes>

          {/* Testimonials en Footer alleen tonen op niet-Chat pagina's */}
          <ShowOnNonChatPages>
            <Testimonials />
            <Footer />
          </ShowOnNonChatPages>
        </Box>
      </div>
    </Router>
  );
};

export default App;
