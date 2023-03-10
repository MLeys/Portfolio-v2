import React from "react";
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import {
  Button,
  Box,
  Paper,
  Toolbar,
  Typography,
  Container,
  CssBaseline, // WHATS THIS DO?
  
  
} from '@mui/material'

import HeaderPortfolio from "../../Components/HeaderPortfolio/HeaderPortfolio";
import DrawerPortfolio from "../../Components/DrawerPortfolio/DrawerPortfolio";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function MainLayout() {
  return ( 
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      {/* <HeaderPortfolio /> */}
      {/* <CssBaseline /> */}
      <DrawerPortfolio />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography> MAin component</Typography>
      </Box>

    </Box>

   );
}

export default MainLayout;