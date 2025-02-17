import { Navbar, Nav, Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import {Link, useLocation } from 'react-router-dom';
import netflixLogo from "../assets/logo.png";

const NetNavBar = function() {
  const location = useLocation()
  console.log('Localizza Obiettivo', location)


    return (
      <Navbar expand="lg" className="bg-black">
        <Container fluid>
          <Link to='/' className='navbar-nav'>
          <img src={netflixLogo} alt='logo' style={{ height:'55px'}} />
          </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

        
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/home" className="text-white fw-bold">
                Home
              </Link>
              <Link to="/"  className="text-secondary fw-bold">
                TV Shows
              </Link>
              <Link to="/" className="text-secondary fw-bold">
                Movies
              </Link>
              <Link to="/" className="text-secondary fw-bold">
                Recently Added
              </Link>
              <Link to="/"  className="text-secondary fw-bold">
                My List
              </Link>
            </Nav>
            <div className="me-2">
              <Icon.Search className="text-white mx-3" />
              <span className="text-white me-3 fw-bold">KIDS</span>
              <Icon.Bell className="text-white me-4" />
              <span>
                <Icon.PersonCircle className="text-white" />
              </span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default NetNavBar;
