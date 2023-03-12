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
  Stack
  
  
} from '@mui/material'

import HeaderPortfolio from "../../Components/HeaderPortfolio/HeaderPortfolio";
import DrawerPortfolio from "../../Components/DrawerPortfolio/DrawerPortfolio";

const boxProps = {
  width: '100',
  height: '85vh',
  
  opacity: 1,
  '&:hover': {
    backgroundColor: 'seondary.main',
    opacity: .9,
  },
}


function MainLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = 120;

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };

  return ( 
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeaderPortfolio handleDrawerToggle={handleDrawerToggle} />
      <DrawerPortfolio
        handleDrawerToggle={handleDrawerToggle} 
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
      />
        

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
       
        <Toolbar /> {/* Provides spacing away from header */}
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={1}
        >
          <Outlet />
        </Stack>
      </Box>

    </Box>
          


   );
}

export default MainLayout;