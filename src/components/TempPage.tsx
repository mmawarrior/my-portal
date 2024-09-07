import React from 'react'; // Importeren van React bibliotheek
import { Typography, Box, Button, Grid, Container } from '@mui/material'; // Importeren van Material UI componenten

// HomePage component - gebruik van React.FC om het als functionele component te definiëren
const HomePage: React.FC = () => {
  return (
    // Container component voor een vaste maximale breedte en om de inhoud gecentreerd te houden
    <Container maxWidth="lg" style={{ marginTop: '100px' }}>
      
      {/* Hoofdtitel van de pagina */}
      <Typography variant="h1" style={{ fontWeight: 'bold' }}>
        Creative Chat <span style={{ color: '#333' }}>Portal</span> {/* Deel van de tekst met aangepaste kleur */}
      </Typography>

      {/* Ondertitel met een beetje ruimte boven (marginTop) */}
      <Typography variant="h5" style={{ marginTop: '20px', color: '#666' }}>
        Connect with users, exchange ideas, and create memorable chat experiences.
      </Typography>

      {/* Grid container om knoppen horizontaal te positioneren met ruimte ertussen */}
      <Grid container spacing={3} style={{ marginTop: '50px' }}>
        
        {/* Elke Grid item heeft een knop die volledige breedte (fullWidth) inneemt */}
        <Grid item xs={12} sm={3}> {/* Op kleine schermen (xs) neemt het de hele breedte, op middelgrote schermen (sm) 1/4 */}
          <Button variant="outlined" fullWidth>
            Chat Rooms {/* Tekst op de knop */}
          </Button>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Button variant="outlined" fullWidth>
            User Profiles
          </Button>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Button variant="outlined" fullWidth>
            File Sharing
          </Button>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Button variant="outlined" fullWidth>
            Settings
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage; // Exporteer de HomePage component zodat deze elders in de app kan worden gebruikt
