import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={3}>
            <h4>Career Compass</h4>
            <p>Your source for career guidance.</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Subscribe</h5>
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} Career Compass</p>
          </Col>
          <Col md={6}>
            <p className="text-md-right">Phone: +91 8921104627</p>
            <p className="text-md-right">Email: info@careercompass.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
