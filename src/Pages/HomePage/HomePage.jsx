import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Box,
  Container,
  Stack
}

from '@mui/material'


function HomePage() {

  const boxProps = {
    width: '100',
    height: 500,
    backgroundColor: 'primary.light',
    opacity: 1,
    '&:hover': {
      backgroundColor: 'seondary.main',
      opacity: .9,
    },
  }


  return ( 
    
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={1}
      >
        <Box sx={boxProps} className='introBox'>
          <Button variant='contained' component={Link} to="/">
              Back to Landing
          </Button>

        </Box>
        <Box className='aboutBox'sx={boxProps}> about</Box>
        <Box className='techBox' sx={boxProps}>tech</Box>
        <Box className='projectsBox' sx={boxProps}>projects</Box>
        <Box className='contactBox' sx={boxProps}>contact</Box>

      

      </Stack>



    
 
   );
}

export default HomePage;