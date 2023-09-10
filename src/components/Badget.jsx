import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
// import { BadgeContext } from '../context/BadgeContext';
import Box from '@mui/material/Box';
import theme from './theme';
import { styled } from '@mui/material/styles';
import { ShoppingCart } from '@mui/icons-material';

export default function ButtonAppBar() {
  const badgeCount = 1;
  const shapeStyles = {
    bgcolor: theme.palette.quinary,
    width: 100,
    height: 50,
    color: 'white',
    textAlign: 'center',
    fontSize: '14px',
    fontFamily: 'Open Sans, sans-serif',
    borderRadius: '5px'
  };
  const rectangle = (
    <Box sx={shapeStyles}>
      <IconButton sx={{ width: '100%', color: 'white', height: '100%' }}>
        <ShoppingCart></ShoppingCart>
        <p className="Cart">Cart</p>
      </IconButton>
    </Box>
  );

  const BadgeCustom = styled(Badge)({
    color: theme.palette.tertiary,
    borderRadius: '5px',
    backgroundColor: theme.palette.quinary,
    width: '100%',
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.primary
    }
  });

  return <BadgeCustom badgeContent={badgeCount ? badgeCount : 1}>{rectangle}</BadgeCustom>;
}
