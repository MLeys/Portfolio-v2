import React from "react";
// import './LandingPage.css'
import { Link, NavLink } from "react-router-dom";
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
        // src='https://imgur.com/TxFILz0.png' 
        // src='https://imgur.com/A4dBpPl.png'
        // src='https://imgur.com/YuRGyJt.png'
        // src='https://imgur.com/67TTydA.png'
        src='https://imgur.com/aKPQCLg.png'
        https://i.imgur.com/FPjCW0h.png
      />

      <Rail
        id='leftRail'
        className="rail" 
        close="very"
        internal position='left' 
        size="massive"
        style={{ placeItems: 'center', verticalAlign: 'middle'}}
        >
          <Container as={Link} to='/portfolio'>
            <p>
              <div>Michael Leys</div>
              <div>Software Engineer / Web Development</div>
            </p>
          </Container>

        
      </Rail>
      <Button as={Link} to='/portfolio'>
          Main Page
      </Button>

    </Container>

  );
}

export default LandingPage;