import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import Input from './Input.jsx';

export default function SearchAppBar(props) {
  const StyledInputBase = {
    backgroundColor: '#F5F5F5',
    border: 'none',
    fontFamily: 'Poppins, sans-serif',
    borderRadius: '5px',
    width: '100%',
    height: '40px',
    fontSize: '14px',
    '& .MuiInputBaseInput': {
      borderRadius: '5px',
      border: 'none',
      width: '400px',
      height: '40px'
    }
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    // Llama a la función onChange pasada como prop
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  return (
    <Input
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }}
      style={StyledInputBase}
      size="small"
      value={inputValue}
      placeholder={props.placeholder}
      onChange={handleInputChange}></Input>
  );
}
