import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Container, Paper, Typography } from '@mui/material';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase'; // Zorg ervoor dat Firebase Auth geïmporteerd is
import socket from '../socket';
import Login from './Login'; // Login component importeren van je inlogscherm
import { signOut } from "firebase/auth"; // Firebase signOut functie
import { User } from "firebase/auth"; // Importeer het juiste type voor Firebase-gebruiker

// Type voor de berichten
interface Message {
  text: string;
  timestamp?: Date;
}

const Chat: React.FC = () => {
  // State voor het getypte bericht
  const [message, setMessage] = useState<string>(''); 

  // State voor de berichtenlijst
  const [messages, setMessages] = useState<Message[]>([]);

  // State voor de ingelogde gebruiker, met het correcte type User van Firebase
  const [user, setUser] = useState<User | null>(null); 

  // Controleer of de gebruiker is ingelogd
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Sla de huidige gebruiker op
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return; // Als de gebruiker niet is ingelogd, haal geen berichten op

    // Haal chatberichten op van Firestore, gesorteerd op timestamp
    const q = query(collection(db, 'chatMessages'), orderBy('timestamp', 'asc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const loadedMessages: Message[] = []; // Tijdelijke array voor berichten
      querySnapshot.forEach((doc) => {
        loadedMessages.push(doc.data() as Message); // Typcasting naar Message type
      });
      setMessages(loadedMessages); // Zet berichten in de state
    });

    return () => unsubscribe();
  }, [user]); // Berichten worden opgehaald wanneer er een gebruiker is

  // Functie voor het verzenden van een bericht
  const sendMessage = async () => {
    if (message.trim()) {
      try {
        // Verstuur het bericht via socket.io
        socket.emit('message', message);

        // Voeg het bericht toe aan Firestore met een timestamp
        await addDoc(collection(db, 'chatMessages'), {
          text: message,
          timestamp: serverTimestamp(), // Timestamp van de server
        });

        setMessage(''); // Maak het invoerveld leeg
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Error sending message:', error.message);
          alert('Failed to send message: ' + error.message);
        } else {
          console.error('Unknown error occurred:', error);
        }
      }
    }
  };

  // Functie om de gebruiker uit te loggen
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null); // Reset de gebruiker naar null na uitloggen
  };

  // Als de gebruiker niet is ingelogd, laat het inlogscherm zien
  if (!user) {
    return <Login onLogin={(username) => setUser(username as unknown as User)} />; // Laat login scherm zien als niet ingelogd
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Paper style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h5" gutterBottom>
          Chat Room
        </Typography>
        
        {/* Uitlogknop */}
        <Button variant="contained" color="secondary" onClick={handleLogout} style={{ marginBottom: '20px' }}>
          Logout
        </Button>
        
        {/* Berichtenbox */}
        <Box
          style={{
            height: '400px',
            overflowY: 'scroll',
            backgroundColor: '#fff',
            padding: '10px',
            border: '1px solid #ccc',
            marginBottom: '20px',
          }}
        >
          {/* Toon elk bericht */}
          {messages.map((msg, index) => (
            <Typography key={index} style={{ marginBottom: '10px' }}>
              {msg.text}
            </Typography>
          ))}
        </Box>
        
        {/* Invoerveld voor een nieuw bericht */}
        <Box display="flex">
          <TextField
            label="Type a message..."
            variant="outlined"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={sendMessage}
            style={{ marginLeft: '10px' }}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Chat;
