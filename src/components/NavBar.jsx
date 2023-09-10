import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function PrimarySearchAppBar({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ padding: '1px', height: '90px', background: '#FEFEFE', boxShadow: 'none' }}>
        <Toolbar
          sx={{
            color: '#000000',
            fontSize: '16px',
            fontFamily: 'Poppins, sans-serif'
          }}>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
