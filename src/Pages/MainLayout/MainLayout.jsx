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


function MainLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };

  return ( 
    <Box component="main"   sx={{ display: 'flex' }}>
      <HeaderPortfolio handleDrawerToggle={handleDrawerToggle} />
      <DrawerPortfolio handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>

      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Toolbar /> {/* Provides spacing away from header */}
        
        <Outlet/>
      </Box>

    </Box>
          


   );
}

export default MainLayout;