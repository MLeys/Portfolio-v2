import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Card,
  Button,
  Typography
} from '@mui/material'

function AboutDisplay() {
  return ( 
    <Grid container spacing={0}>
      <Grid xs={8}>
        <Typography >
          I have always lived by the mantra "If it's worth doing, it's worth doing right."
          This mindset has allowed me to excell in many aspects of my life and 
          what has led me to pursue a new career. I strive for excellence and love to 
          learn new and improved ways of coding. At the start of this journey I have already
          aquired so much knowledge. 

        </Typography>
      </Grid>
      <Grid xs={4}>
        picture
      </Grid>
    </Grid>
   );
}

export default AboutDisplay;