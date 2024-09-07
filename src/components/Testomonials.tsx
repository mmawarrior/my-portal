import React from 'react'; // Importeer React-bibliotheek
import { Box, Typography, Card, CardContent } from '@mui/material'; // Importeer Material UI-componenten
import Slider from 'react-slick'; // Importeer de Slider component van react-slick voor carousels
import StarIcon from '@mui/icons-material/Star'; // Importeer het ster-icoon van Material UI

// Array van testimonials - elke testimonial bevat een rating, titel, tekst, auteur en een afbeelding
const testimonials = [
  {
    rating: 5, // Aantal sterren voor deze testimonial
    title: 'Clutch', // Titel van de testimonial
    text: 'I think working with Unikorns is a good choice for companies if they need a strong process to guide you.',
    author: 'David Hartery, Marketing Lead at Z2A Digital', // Naam van de auteur
    image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6', // Achtergrondafbeelding van Unsplash
  },
  {
    rating: 5,
    title: 'Clutch',
    text: 'They delivered the project on time and were highly responsive to changes.',
    author: 'Anonymous, CEO at BI Software Company',
    image: 'https://images.unsplash.com/photo-1556228720-844178beb0b1', // Achtergrondafbeelding van Unsplash
  },
  {
    rating: 5,
    title: 'Awesome Service',
    text: 'Their attention to detail and commitment to client success is unparalleled.',
    author: 'Jane Smith, COO at Tech Innovations',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61', // Achtergrondafbeelding van Unsplash
  },
];

// Instellingen voor de react-slick slider
const settings = {
  dots: true, // Navigatiepunten onderaan de slider
  infinite: true, // Slider loopt oneindig door
  speed: 500, // Snelheid van de overgang in milliseconden
  slidesToShow: 2, // Toon twee slides tegelijkertijd
  slidesToScroll: 1, // Scroll één slide per keer
  autoplay: true, // Slider speelt automatisch af
  autoplaySpeed: 3000, // Tijd tussen de automatische overgang van slides
  responsive: [
    {
      breakpoint: 1024, // Bij schermen kleiner dan 1024px
      settings: {
        slidesToShow: 1, // Toon slechts één slide
      },
    },
  ],
};

// Testimonials component - functionele component in TypeScript
const Testimonials: React.FC = () => {
  return (
    // Box component met padding en achtergrondkleur voor de testimonials sectie
    <Box sx={{ padding: '50px 0', backgroundColor: '#f9f9f9' }}>
      {/* Titel van de sectie */}
      <Typography variant="h4" align="center" gutterBottom>
        Testimonials
      </Typography>

      {/* Slider component met de testimonials */}
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          // Box voor elke testimonial met padding en margin voor spacing tussen de cards
          <Box key={index} sx={{ padding: '20 20px', margin: '10 20px' }}> 
            <Card
              sx={{
                height: '600px', // Hoogte van de card
                borderRadius: '25px', // Afgeronde hoeken van de card
                position: 'relative', // Positionering om lagen te creëren
                overflow: 'hidden', // Zorgt ervoor dat de inhoud binnen de card blijft
                margin: '10px', // Margin rond de card
                color: '#fff', // Tekstkleur
                backgroundImage: `url(${testimonial.image})`, // Achtergrondafbeelding van de testimonial
                backgroundSize: 'cover', // Zorgt ervoor dat de afbeelding de volledige ruimte bedekt
                backgroundPosition: 'center', // Plaatst de afbeelding in het midden
              }}
            >
              {/* Overlay over de afbeelding voor een verduisterend effect */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Zwarte overlay met 70% dekking
                }}
              ></Box>

              {/* Card-inhoud: tekst, sterren en auteur */}
              <CardContent
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 1, // Zorgt ervoor dat de content bovenop de overlay staat
                  background: 'rgba(0, 0, 0, 0.5)', // Zwarte achtergrond voor de tekst
                  color: '#fff',
                  padding: '20px',
                  textAlign: 'center', // Tekst gecentreerd
                }}
              >
                {/* Titel van de testimonial */}
                <Typography variant="h5" component="div" gutterBottom>
                  {testimonial.title}
                </Typography>

                {/* Weergeven van het aantal sterren op basis van de rating */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <StarIcon key={i} style={{ color: '#FFD700' }} /> // Gele sterren
                  ))}
                </Box>

                {/* Testimonial tekst */}
                <Typography variant="body1" gutterBottom>
                  {testimonial.text}
                </Typography>
                
                {/* Auteur van de testimonial */}
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {testimonial.author}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Testimonials; // Exporteer de Testimonials component
