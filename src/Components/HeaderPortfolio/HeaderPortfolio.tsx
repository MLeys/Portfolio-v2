import * as React from 'react';
import {useState } from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem
} from '@mui/material'

const pages = ['Projects', 'Experience', 'Resume'];
const settings = ['About', 'Personal', 'Fun'];


function HeaderPortfolio(props: { handleDrawerToggle?: any; }) {
  const { handleDrawerToggle } = props;
  


  return (
    <AppBar
        position="fixed"

      >
        <Toolbar 
          sx={{ 
            textAlign: {justifyContent: 'center'},
            alignItems: 'center',
          }} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              mr: 1,
              display: { sm:'none' } }}
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <Typography 
            variant="h2" 
            noWrap 
            component="div"
            textAlign="center"
            sx={{
              justifyItems: { xs: 'center'},
              mr: 2,
              // display: { md: 'flex' },
              fontFamily: 'American Typewriter',
              fontWeight: 400,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}   
          >
            Mike Leys
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default HeaderPortfolio;