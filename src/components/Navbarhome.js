import React from 'react'
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbarhome() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" className="mr-2">Home</Nav.Link>
              <Nav.Link href="#about" className="mr-2">About</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#service1" >For School Students</NavDropdown.Item>
                <NavDropdown.Item href="#service2">For College Students</NavDropdown.Item>
                <NavDropdown.Item href="#service3">For Freshers</NavDropdown.Item>
                <NavDropdown.Item href="#service3">For Professionals</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact" className="ml-2">Contact</Nav.Link>
            </Nav>
            <Button variant="primary" className="ml-2">Get Started</Button>
            <Button variant="outline-primary" className="ml-2">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}
