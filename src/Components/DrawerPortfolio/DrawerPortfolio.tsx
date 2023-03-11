import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import Container from '@mui/material/Container';



const drawerWidth = 120;


function DrawerPortfolio(props: { handleDrawerToggle?: any; mobileOpen?: any; }) {
  const { handleDrawerToggle } = props;
  const {mobileOpen} = props



  const drawer = (
    <div>
      <Box sx={{
        textAlign: 'center',
      }} >
        <img
          className="selfImage"
          style={{ width: '100%', height: '40%'}}
          src='https://i.imgur.com/FPjCW0h.png'
          
        />
        <h3 >Mike Leys</h3>
      </Box>

      <Divider />
      <List>
        {['About', 'Skills', 'Projects', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>

              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="portfolio sections"
    >
      {/* Drawer for small screen with menu action */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* Drawer hides on small screen */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
 
  );
}
export default DrawerPortfolio;