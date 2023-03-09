import React from "react";
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import Item from '@mui/material/ListItem';
// import {
//   Grid,
//   Segment,
//   Container,
 
// } from 'semantic-ui-react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function MainLayout() {
  return ( 
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
      
        // <Grid 
        //   stretched={true}
        //   celled={true}
        // >
        //     <Grid.Row>
        //     <Grid.Column  width={3}>
        //       sidebar

        //     </Grid.Column>
        //     <Grid.Column as={Container} width={13}>
        //       Right        
        //       <h3> main Layout </h3>
        //     <Outlet />
        //   </Grid.Column>

        //   </Grid.Row>


        // </Grid>
   );
}

export default MainLayout;