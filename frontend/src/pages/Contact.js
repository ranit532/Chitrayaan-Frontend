
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container className="mt-5 text-center">
        <h2 className="mb-4">Contact Us</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="lead">For more details, you can reach us at:</p>
            <h3>Phone: <a href="tel:+918250461109">+91-8250461109</a></h3>
            <p className="lead mt-4">Visit our Instagram page:</p>
            <h3><a href="https://www.instagram.com/chitrayaan.official/" target="_blank" rel="noopener noreferrer">Chitrayaan Official Instagram</a></h3>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Contact;
