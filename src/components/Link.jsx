import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import theme from '../components/theme.jsx';

const StyledLink = styled(Link)(() => ({
  color: '#000000',
  marginRight: '20px',
  marginLeft: '20px',
  fontSize: '14px',
  '&:hover': {
    color: theme.palette.primary,
    textDecorationThickness: '1px',
    textUnderlineOffset: '30%'
  }
}));

export default StyledLink;
