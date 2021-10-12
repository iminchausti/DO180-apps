import React, { Component } from "react";
import { Accordion, Card, Button, Container, Col, Row } from "react-bootstrap";
import "../styles/vision.css";
import "../styles/heading.css";
import { motion } from "framer-motion";
import Image from "../img/WebPlatResponse.png";
import Image2 from "../img/WebPlatCirc.png";
import Image3 from "../img/TechRunway2.png";
import Image4 from "../img/lyresketch.png";
import Image5 from "../img/hydrasketch.png";
import Image6 from "../img/OrionSketch.png";
import Background from "../img/backgroundstars.JPG";
import Image7 from "../img/pegasussketch.png";

var sectionStyle ={
  
  height:"450px",
  backgroundImage:`url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize:"cover",
  color:"white"

 
}


class Vision extends Component {
  render() {
    return (
      <Container style={{
        marginTop:"5%"
      }}fluid>



<div id="paralax" style={sectionStyle}>

<Container style={{marginTop:"5%", paddingTop: "5%"}}>



<Row><Col><h4>Benefits of Web Platform</h4></Col></Row>
<div>_______________________________________________________________________________________</div>
<Row>
  <Col>
  <div>
  <h5>ES and NG as a whole are going through Digital Transformation</h5>
  <p><strong>Web Platform Supports Digital Transformation by Enabling</strong></p>
 <ul>
   <li>Dev*Ops Tools</li>
   <li>Capabilities</li>
   <li>Software Development Best Practices</li>
 </ul>

<p><strong>We have a TEAM Focused Approach</strong></p>
 <ul>

   <li>Focus on YOUR Team and where you can improve 
</li>
   <li>Constantly looking into NEW Tools to bring to customers
</li>
 </ul>
  </div>
  </Col>
</Row>
<Row><Col></Col><Col align='center'><a  class="fcc-btn" href="#head"> <span><strong>&#708;</strong></span></a>
</Col><Col></Col></Row>
</Container>


</div>


<div style={{height:"40px"}}></div>

<Container id="offerings"></Container>
<Container fluid id="offeringspage">
  <div style={{marginTop:"4%"}}></div>
<Row>
 <Col><div><h3 id="black">OFFERINGS</h3></div></Col>
</Row><div style={{
  marginTop:"8%"
}}></div>
<Row>
<Col>
<Card style={{ width: '12rem' }}>

  <Card.Img style={{width: '140px', margin:'0 Auto'}}variant="top" src={Image5} />
  <Card.Body>
   
    <Card.Text>
     <strong>HYDRA &nbsp;</strong>
                   Our current most popular offering. Large IIS servers where we host more than 200+ Applications. 

    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>

<Card style={{ width: '12rem' }}>

  <Card.Img style={{width: '145px', margin:'0 Auto'}}variant="top" src={Image6} />
  <Card.Body>
   
    <Card.Text>
     <strong>ORION & RIGEL: &nbsp;</strong>
External & Global Enterprise Hosting. Similar to Hydra but external or global applications. 
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '12rem' }}>

  <Card.Img style={{width: '148px', margin:'0 Auto'}}variant="top" src={Image7} />
  <Card.Body>
   
    <Card.Text>
     <strong>PEGASUS: &nbsp;</strong>
SAMS, EAS, MATOMO, ASER. Tools to relentlessly automate everything. 
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>

<Card style={{ width: '12rem' }}>

  <Card.Img style={{width: '140px', margin:'0 Auto'}}variant="top" src={Image4} />
  <Card.Body>
   
    <Card.Text>
     <strong>LYRE: &nbsp;</strong>
     CI/CD Release on demand. This offering allows you to deploy your code anytime, anyday. 

    </Card.Text>
  </Card.Body>
</Card>
</Col>



</Row>

    
  


                </Container>

    <Container id="request"></Container>
                <Container fluid style={{marginTop:"5%"}}>

                <Row>
 <Col><div><h3 id="black">How To Request Our Services</h3></div></Col>
</Row>

<div style={{height:'11px'}}></div>
<Row><Col>

<div style={{marginRight:'20px', marginBottom:
'10px'}}>
  <h5>Customer Intake</h5>
<p>The links below are found on the <a href="https://oursites.myngc.com/ESS/BAS/EHS/SitePages/Home.aspx">EHS Home Page</a></p>

<ul>
  <li><a href="https://oursites.myngc.com/ESS/BAS/EHS/Shared%20Documents/Enterprise%20INTERNAL%20Hosting%20Service%20Request.xlsx?Web=1">INTERNAL Enterprise Hosting includes Pipeline Service Request Form</a>
</li>
  <li><a href="https://oursites.myngc.com/ESS/BAS/EHS/Shared%20Documents/Enterprise%20EXTERNAL%20Hosting%20Service%20Request.xlsx?Web=1">EXTERNAL Enterprise Hosting Service Request Form</a>
</li>
  <li><a href="https://oursites.myngc.com/ESS/BAS/EHS/Shared%20Documents/International%20Hosting%20Service%20Request.xlsx">GLOBAL Enterprise Hosting Service Request Form</a>
</li>
  
</ul>

<p>The links below are found on the <a href="https://globalshare.amer.myngc.com/ess/espef/ES_TFS/SitePages/Home.aspx">AzDO Home Page</a>
</p>
<ul>
  <li><a href="https://globalshare.amer.myngc.com/ess/espef/ES_TFS/Lists/TFS_Team_Requests/NewForm.aspx?Source=https://globalshare.amer.myngc.com/ess/espef/ES_TFS/Lists/TFS_Team_Requests/AllItems.aspx&RootFolder=">Click Here</a> to Request an Azure DevOps (previously TFS) Project or Team
</li>
  <li><a href="https://globalshare.amer.myngc.com/ess/espef/ES_TFS/Lists/Additional%20GIT%20Repo%20Request/Item/newifs.aspx?List=6792d052-5fb9-421b-97d8-595ec08af815&Source=https://globalshare.amer.myngc.com/ess/espef/ES_TFS/Lists/Additional%20GIT%20Repo%20Request/AllItems.aspx&RootFolder=&Web=83c10b12-0818-4892-8163-0f3ec575511f">Click Here</a> to Request an Additional GIT Repo for a Azure DevOps Existing Project or Team
</li>
  <li><a href="https://globalshare.amer.myngc.com/ess/espef/ES_TFS/Lists/RenameProjectorTeam/NewForm.aspx?Source=https://globalshare.amer.myngc.com/ess/espef/ES_TFS/Lists/RenameProjectorTeam/Requestor%20View.aspx&RootFolder=">Click Here</a> to Request a CI/CD Pipeline (Pre-requisite: existing AzDO Team and GIT Repo)
</li>

  </ul>
 

</div>
</Col>
</Row>

</Container>


<Container fluid id="support">
<Row>
  <Col xs md="7">
  <h4>WHO WE SUPPORT</h4><br/>
  <div class="yellowBox"><h5>ES Sector Programs</h5></div>
  <div class="yellowBox"><h5>Non-ES Sector Programs</h5></div>
  <div class="yellowBox"><h5>Product Teams (ie. HFSL)</h5></div>
  </Col>
  <Col xs md="5">
    <img id="circle" src={Image2}/>
  </Col>
  <Col></Col>
</Row>
</Container>

                <Container fluid style={{marginTop:"5%"}}>
                <Row>

<Col><h3 id="black">2021 TECHNICAL RUNWAY</h3></Col>
</Row>
<div style={{marginTop:"3%"}}></div>
<Row><Col xs md="1"></Col><Col xs md="8"align='center' xs md="8"><img id="runway" src={Image3}/></Col><Col xs md="3"></Col>
</Row>

                </Container>

      </Container>
    );
  }
}

export default Vision;
