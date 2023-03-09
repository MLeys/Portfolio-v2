import React from "react";
import './LandingPage.css'
import {
  Container,
  Segment,
  Grid,
  Image

} from 'semantic-ui-react';


function LandingPage() {
  return (  
    <Container 
      style={{
        width: '100vw',
       
      }}
      // as={Grid}
      fluid={true}
    >
      First thing
      <Image 
        style={{
          width: '100vw'
        }}
        fluid={true}
        src='https://imgur.com/bUeqQX5.png'
      
      >


      </Image>
    </Container>
  );
}

export default LandingPage;