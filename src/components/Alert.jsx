import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';

const severityColors = {
  success: '#259E5D',
  error: '#CE1B1B',
  warning: '#E9BD1F',
  info: '#2196f3'
};

const AlertCompont = styled(Alert)(({ severity }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '14px',
  fontWeight: '400',
  width: '90%',
  color: 'white',
  '& .MuiAlert-icon': {
    color: 'white'
  },
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  variant: 'filled',
  padding: '10px 20px',
  backgroundColor: severityColors[severity]
}));

export default AlertCompont;
