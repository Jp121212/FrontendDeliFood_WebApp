import * as React from 'react';
import Badge from '@mui/material/Badge';
import theme from './theme';
import { styled } from '@mui/material/styles';

export default function ButtonAppBar({ children }) {
  const badgeCount = 1;

  const BadgeCustom = styled(Badge)({
    color: theme.palette.tertiary,
    borderRadius: '5px',
    backgroundColor: theme.palette.quinary,
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.primary
    }
  });

  return <BadgeCustom badgeContent={badgeCount ? badgeCount : 1}>{children}</BadgeCustom>;
}
