
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <a href="https://wa.me/your-whatsapp-number" className="text-white me-3">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="https://www.instagram.com/your-instagram-handle" className="text-white">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} Chitrayaan. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
