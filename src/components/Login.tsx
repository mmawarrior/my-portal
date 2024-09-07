import React, { useState } from 'react'; // Importeren van React en de useState hook
import { Box, Button, TextField, Typography, Container } from '@mui/material'; // Importeren van Material UI componenten
import { auth } from '../firebase'; // Firebase authenticatie importeren
import { signInWithEmailAndPassword } from 'firebase/auth'; // Firebase inlog functie voor e-mail en wachtwoord

// Interface voor de props die aan de Login component worden doorgegeven
interface LoginProps {
  onLogin: (username: string) => void; // Functie die uitgevoerd wordt bij succesvolle login
}

// Login component
const Login: React.FC<LoginProps> = ({ onLogin }) => {
  // State voor het opslaan van het e-mailadres en wachtwoord
  const [email, setEmail] = useState('dat@dat.nl'); // Vooraf ingevulde waarde als voorbeeld
  const [password, setPassword] = useState('dat@dat.nl'); // Vooraf ingevulde waarde als voorbeeld

  // Functie die wordt aangeroepen wanneer de gebruiker probeert in te loggen
  const handleLogin = async () => {
    try {
      // Probeer in te loggen met Firebase's signInWithEmailAndPassword functie
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Haal de ingelogde gebruiker op
      onLogin(user.email || ''); // Roep de onLogin functie aan met het e-mailadres van de gebruiker (gebruikersnaam)
    } catch (error: any) {
      // Als er een fout optreedt, log de fout in de console en toon een alert met de foutmelding
      console.error('Error logging in:', error.message);
      alert('Failed to login: ' + error.message);
    }
  };

  return (
    // Container voor de login-box, beperkt tot een kleine breedte
    <Container maxWidth="xs" style={{ marginTop: '100px' }}>
      <Box textAlign="center"> {/* Centraal uitgelijnde inhoud */}
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Chat Portal {/* Titel van het login scherm */}
        </Typography>

        {/* Invoerveld voor het e-mailadres */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update de email state bij elke invoer
          style={{ marginBottom: '20px' }} // Ruimte onder het invoerveld
        />

        {/* Invoerveld voor het wachtwoord */}
        <TextField
          label="Password"
          variant="outlined"
          type="password" // Zorgen dat het wachtwoord niet leesbaar is
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update de password state bij elke invoer
          style={{ marginBottom: '20px' }} // Ruimte onder het invoerveld
        />

        {/* Login-knop die de handleLogin functie aanroept */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin} // Roep de handleLogin functie aan bij een klik
        >
          Login {/* Tekst op de knop */}
        </Button>
      </Box>
    </Container>
  );
};

export default Login; // Exporteer de Login component zodat deze elders in de applicatie kan worden gebruikt
