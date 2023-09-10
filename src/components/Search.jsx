import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import { IconButton } from '@mui/material';

export default function SearchAppBar(props) {
  const Form1 = styled(FormControl)({
    width: props.widthSearch ? props.widthSearch : '100%',
    height: props.heightSearch ? props.heightSearch : '20px',
    fontFamily: 'Open Sans, sans-serif'
  });

  const StyledInputBase = styled(InputBase)(() => ({
    backgroundColor: '#F5F5F5',
    padding: '10px',
    borderRadius: '5px',
    width: '100%',
    height: '50px',
    fontSize: '14px',
    '& .MuiInputBase-input': {
      fontSize: '14px',
      borderRadius: '5px',
      fontFamily: 'Open Sans, sans-serif',
      width: '400px'
    }
  }));

  return (
    <Form1>
      <StyledInputBase
        placeholder={props.placeholder}
        onChange={props.onChange}
        startAdornment={
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>
        }></StyledInputBase>
    </Form1>
  );
}
