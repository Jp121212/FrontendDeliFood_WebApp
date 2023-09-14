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
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: props.color,
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
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
