
   
import React from 'react';
import './Header.css'
import logo from '../../images/logo.jpg'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='header'>
            
            <Container>
                <img  className='logo' src={logo}></img>
            
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
            
                <Nav className=" nav-menu ">
 
 
                       <Link className="nav-link "  to="/home">Home</Link>
                       <Link className="nav-link"  to="/aboutus">About</Link>
                       <Link className="nav-link " to="/courses">Courses</Link>
                       <Link  className="nav-link "  to="/team">Team</Link>
                       <Link  className="nav-link "  to="/contact">Contact</Link>
                       
                </Nav>
            
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
