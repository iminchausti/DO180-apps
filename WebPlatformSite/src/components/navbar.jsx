import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, } from "react-bootstrap";
import "../styles/navbar.css";
import { motion } from "framer-motion";
import Image from '../img/WebPlat.gif'


class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        <motion.img id="imgnav" 
          animate={{ x: 10 }}
          transition={{ type: "spring", duration: 2 }}
      
        src={Image}/>
     
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#offerings">Offerings</Nav.Link>
            <Nav.Link href="#request">Request Our Services</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="https://oursites.myngc.com/ESS/BAS/EHS/SitePages/Home.aspx" target="_blank">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="https://github.ms.northgrum.com/CathyBarthelme/Web-Platform-FAQs"target="_blank">
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    );
  }
}

export default NavBar;
