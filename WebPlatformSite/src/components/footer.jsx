import React, { Component } from "react";
import { Jumbotron, Button, Row, Col, Container } from "react-bootstrap";
import "../styles/heading.css";
import { motion } from "framer-motion";

import Image from "../img/backgroundstars.JPG";

var sectionStyle ={
  
  height:"300px",
  backgroundImage:`url(${Image})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize:"cover",
  color:"white",
  marginTop:"60px"
  
}


class Footer extends Component {
  render() {
    return (
      <div>

        <div style={ sectionStyle }>
        <Row><Col style={{marginTop:'-14px'}}align='center'><a  class="fcc-btn" href="#head"> <span><strong>&#708;</strong></span></a></Col></Row>

       <Container fluid>
           <Col>&copy; 2021 Web Platform </Col>
         

       </Container>
        
        </div>

      </div>
      
    );
  }
}

export default Footer;