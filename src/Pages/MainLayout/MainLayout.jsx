import React from "react";
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import {
  Button,
  Box,
  Paper,
  Grid,
  Container
  
} from '@mui/material'

import HeaderPortfolio from "../../Components/HeaderPortfolio/HeaderPortfolio";
import { Header } from "semantic-ui-react";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function MainLayout() {
  return ( 
    
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <HeaderPortfolio />
      </Grid>
      <Grid xs={4} md={2}>
        <Item>Sidebar content item</Item>
        <Container> Sidebar </Container>
      </Grid>
      <Grid xs={8} md={10}>
      <Item>Main content item</Item>
        <Container> Main  </Container>
      </Grid>
    </Grid>

   );
}

export default MainLayout;