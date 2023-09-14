import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Icon from '@mui/material/IconButton';

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
      type={props.type}>
      {props.icon && (
        <Icon sx={{ color: 'white', height: '100%' }}>
          {props.icon}
          <p className="Cart">{props.TextInButton}</p>
        </Icon>
      )}
    </Button1>
  );
}

export default Buttons;
