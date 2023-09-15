import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import theme from '../components/theme.jsx';

const StyledLink = styled(Link)((props) => ({
  color: props.color ? props.color : theme.palette.quinary,
  fontSize: '14px',
  width: '100%',
  marginRight: '10%',
  '&:hover': {
    color: theme.palette.primary,
    textDecorationThickness: '1px',
    textUnderlineOffset: '30%'
  }
}));

export default StyledLink;
