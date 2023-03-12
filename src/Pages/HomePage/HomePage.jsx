import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Box,
  Container,
  Stack
}
from '@mui/material'

import AboutDisplay from '../../Components/AboutDisplay/AboutDisplay'
import SkillsDisplay from '../../Components/SkillsDisplay/SkillsDisplay'
import ProjectsDisplay from '../../Components/ProjectsDisplay/ProjectsDisplay'
import ContactDisplay from '../../Components/ContactDisplay/ContactDisplay'

function HomePage() {

  const boxProps = {
    width: '100',
    height: '85vh',
    opacity: 1,
    '&:hover': {
      backgroundColor: 'seondary.main',
      opacity: .9,
    },
  }



  return ( 
    <div>
      <Box sx={boxProps} className='introBox'>
        <Button variant='contained' component={Link} to="/">
            Back to Landing
        </Button>

      </Box>
      <Box className='aboutBox'sx={boxProps}> 
        <AboutDisplay />
      </Box>
      <Box className='techBox' sx={boxProps}>
        <SkillsDisplay />
      </Box>
      <Box className='projectsBox' sx={boxProps}> 
        <ProjectsDisplay />
      </Box>
      <Box className='contactBox' sx={boxProps}>
        <ContactDisplay />
      </Box>

    </div>

 


    
 
   );
}

export default HomePage;