import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Theme from './theme.jsx';

export default function PrimarySearchAppBar({ children }) {
  return (
    <AppBar position="static" sx={{ height: '100%vh', background: Theme.palette.tertiary }}>
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
