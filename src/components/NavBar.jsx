import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function PrimarySearchAppBar({ children }) {
  return (
    <AppBar position="static" sx={{ height: '100%vh', background: '#FEFEFE' }}>
      <Toolbar
        sx={{
          height: '100%vh',
          color: '#000000',
          fontSize: '16px',
          fontFamily: 'Poppins, sans-serif'
        }}>
        {children}
      </Toolbar>
    </AppBar>
  );
}
