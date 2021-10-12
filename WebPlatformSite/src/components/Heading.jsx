import React, { Component } from "react";
import { Jumbotron, Button, Row, Col, Container } from "react-bootstrap";
import "../styles/heading.css";
import { motion } from "framer-motion";

import Image from "../img/wp.jpg";

var sectionStyle ={
  
  height:"400px",
  backgroundImage:`url(${Image})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize:"cover",
  color:"white"
 
}
class Heading extends Component {
  render() {
    return (
      <div>
<Container id="head"></Container>
        <div style={ sectionStyle }>
        <Container>
        <Row>
          <Col>
          <span>The ES <strong>Web Platform</strong> </span>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col> <Button size="lg"><a href="#paralax"style={{marginBottom:'20px', textDecoration:'none', color:'white'}}>Learn more</a></Button></Col>
          <Col></Col>
        </Row>
        </Container>
      
        
        </div>
        <Container id="about"></Container>
        <Container style={{paddingTop:"100px"}}>
          <Row>
            <Col>
            <h4>We enable software developers to quickly deploy web apps and new capabilities that provide our customers value, while minimizing cognitive load and work required</h4>
           <br/>
           <h5>We Accomplish this by:</h5>
            <ul>
  <li>Understand Customer Needs</li>
  <li>Enable Software Developers the Ability to Quickly Deploy Web Apps on Multiple Infrastructures
</li>
  <li>Proactively Solve Problems and Monitor Servers / Applications
</li>
  <li>Analyze Processes, Metrics, Logs and Relentlessly Automate Them
</li>
</ul>
            </Col>
          </Row>
        </Container>

      </div>
      
    );
  }
}

export default Heading;
