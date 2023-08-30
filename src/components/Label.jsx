import { InputLabel } from '@mui/material';

function Form(props) {
  const label = {
    fontFamily: 'Open Sans, sans-serif',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '12px',
    marginTop: '15px',
    marginLeft: '10px'
  };

  return <InputLabel style={label}>{props.InputLabel}</InputLabel>;
}
export default Form;
