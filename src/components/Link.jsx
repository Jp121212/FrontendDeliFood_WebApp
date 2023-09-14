import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import theme from '../components/theme.jsx';

const StyledLink = styled(Link)(() => ({
  color: '#000000',
  fontSize: '14px',
  width: '100%',
  marginRight: '5%',
  '&:hover': {
    color: theme.palette.primary,
    textDecorationThickness: '1px',
    textUnderlineOffset: '30%'
  }
}));

export default StyledLink;
