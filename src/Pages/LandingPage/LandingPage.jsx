import React from "react";
import './LandingPage.css'
import {
  Container,
  Segment,
  Grid,
  Image,
  Button,
  Rail

} from 'semantic-ui-react';


function LandingPage() {
  return (  
    
    <Container 
      className="landingContainer"
      fluid={true} 
      textAlign='center'
    >
      <Image 
        className="landingImage"
        fluid={true} 
        src='https://imgur.com/bUeqQX5.png' 
      />

      <Rail
        id='leftRail'
        className="rail" 
        internal position='left' 
        size="massive"
        >
        <h2> Michael Leys </h2>
        <h3>Software Engineer / Web Development</h3>
      </Rail>

    </Container>

  );
}

export default LandingPage;