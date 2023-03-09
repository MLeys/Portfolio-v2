import React from "react";
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import {
  Button,
  Box,
  Paper,
  Grid,
  
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

   );
}

export default MainLayout;