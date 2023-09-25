import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const Input = styled(TextField)(({ inputsize }) => ({
  backgroundColor: '#F5F5F5',
  borderRadius: '5px',
  '& ::placeholder': {
    color: '#000000',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px'
  },
  width: inputsize === 'large' ? '100%' : '50%',
  '& .MuiOutlinedInput-root': {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    '& fieldset': {
      border: 'none'
    },
    '&:hover fieldset': {
      border: 'none'
    },
    '&.Mui-focused fieldset': {
      border: 'none'
    }
  }
}));

export default Input;
