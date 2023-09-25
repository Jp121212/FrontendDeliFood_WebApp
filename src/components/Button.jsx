import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function Buttons(props) {
  const Button1 = styled(Button)({
    margin: props.margin,
    color: props.colorText,
    boxShadow: 'none',
    textTransform: 'none',
    border: 'none',
    width: props.width,
    height: props.height,
    borderRadius: '5px',
    fontSize: props.fontSize,
    lineHeight: 1.5,
    backgroundColor: props.color,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '400',
    '&:hover': {
      backgroundColor: props.colorHover
    }
  });
  return (
    <Button1
      variant="contained"
      disableRipple
      href={props.href}
      onClick={props.onClick}
      type={props.type}
      startIcon={props.startIcon ? props.startIcon : ''}>
      {props.text}
    </Button1>
  );
}

export default Buttons;
