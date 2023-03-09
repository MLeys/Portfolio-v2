import * as React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
// import {
//   Button,
  

// } from 'semantic-ui-react'

function HomePage() {



  return ( 
    <>
      <Button variant='contained' component={Link} to="/">
          Back to Landing
      </Button>
    </>
 
   );
}

export default HomePage;