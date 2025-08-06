
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const pricingTiers = [
  {
    title: '30-Second Ad',
    price: '₹2500',
    features: ['30-second cinematic ad', 'High-quality stock footage', 'Royalty-free music'],
  },
  {
    title: '60-Second Ad',
    price: '₹4000',
    features: ['60-second cinematic ad', 'High-quality stock footage', 'Royalty-free music', 'Voice-over'],
  },
];

const Pricing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container className="mt-5">
        <h2 className="text-center mb-4">Pricing</h2>
        <Row>
          {pricingTiers.map((tier, index) => (
            <Col md={6} key={index} className="mb-4">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{tier.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{tier.price}</Card.Subtitle>
                    <ul className="list-unstyled">
                      {tier.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="primary" href="/contact">Get Started</Button>
                  </Card.Footer>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <h5>Free 10-second sample for first-time clients!</h5>
        </div>
      </Container>
    </motion.div>
  );
};

export default Pricing;
