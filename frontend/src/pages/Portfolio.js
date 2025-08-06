
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/portfolio')
      .then(response => setPortfolio(response.data))
      .catch(error => console.error('Error fetching portfolio:', error));
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container className="mt-5">
        <h2 className="text-center mb-4">Our Portfolio</h2>
        <Row>
          {portfolio.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
                  <Card.Img variant="top" src={item.thumbnail} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Modal show={selectedItem !== null} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="315"
              src={selectedItem?.link.replace("watch?v=", "embed/")}
              title={selectedItem?.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </motion.div>
  );
};

export default Portfolio;
