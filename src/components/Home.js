import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarhome from './Navbarhome';
import './CSS/Home.css';
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Navbarhome />
      <Container className="mt-4">
        <h2>Welcome to Career Compass</h2>

        {/* "Discover Your Perfect Career" Section */}
        <div className="discover-section mt-4">
          <h3>Discover Your Perfect Career</h3>
          <p>
            Make smart decisions with our revolutionary AI-enabled career guidance tools and expert career counsellors.
          </p>

          <form>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <Button variant="primary">Take Free Demo</Button>
          </form>
        </div>
        <img
            src="/images/desktop.jpg" 
            alt="Beautiful Picture"
            className="img-fluid mt-4"
          />

        {/* Additional Features */}
        <div className="features-section mt-4">
          <p>
            Career Assessment | Personalized Guidance | Profile Building | Virtual Internships | College Roadmap Planning | College Applications | Scholarship Hunt
          </p>
        </div>
        <Footer />
      </Container>
   
    </div>
    
  );
}

export default Home;
