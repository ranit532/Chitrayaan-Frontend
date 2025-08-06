import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import backVideo from '../assets/back.mp4';

const Home = () => {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Fixed background video container */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={backVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>

      {/* Hero content section */}
      <div className="hero-section text-center text-white" style={{ height: '100vh' }}>
        <Container style={{ zIndex: 1, position: 'relative' }}>
          <Row>
            <Col>
              <motion.h1 className="display-3 fw-bold" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                AI-Powered Cinematic Ads for Your Brand
              </motion.h1>
              <motion.p className="lead" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                Affordable, High-Impact Ads for Your Brand
              </motion.p>
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <Button variant="warning" size="lg" href="/contact" className="glowing-btn">
                  Request Free Sample
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Spacer to push content below the hero section */}
      <div style={{ height: '100vh' }}></div>

      <div className="horizontal-scroll-section">
        <Container>
          <Row className="text-center">
            
          </Row>
        </Container>
      </div>
    </motion.div>
  );
};

export default Home;