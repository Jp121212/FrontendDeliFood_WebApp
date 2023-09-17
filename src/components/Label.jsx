import { InputLabel } from '@mui/material';

function Form(props) {
  const label = {
    fontFamily: 'Poppins, sans-serif',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '12px',
    marginTop: '15px',
    marginBottom: '5px'
  };

  return <InputLabel style={label}>{props.InputLabel}</InputLabel>;
}
export default Form;
