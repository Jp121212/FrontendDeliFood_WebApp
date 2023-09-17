import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import Inputlabel from '@mui/material/InputLabel';
import { FormControl, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function BasicSelect(props) {
  const [value, setValue] = useState('');

  const Form1 = styled(FormControl)({
    width: props.widthSelect1 ? props.widthSelect1 : '100%',
    fontFamily: 'Poppins, sans-serif'
  });

  const Select2 = styled(Select)({
    backgroundColor: '#F5F5F5',
    width: props.widthSelect ? props.widthSelect : '50%',
    height: props.height ? props.height : '40px',
    borderRadius: '5px',
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
      fontFamily: 'Poppins, sans-serif'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderWidth: '0px',
      borderColor: 'white',
      fontFamily: 'Poppins, sans-serif'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: '0px',
      borderColor: 'white',
      fontFamily: 'Poppins, sans-serif'
    },
    '& .MuiOutlinedInput-input': {},
    '& .MuiSelect-root': {
      fontFamily: 'Poppins, sans-serif'
    },
    '& .label': {
      borderColor: 'white',
      fontFamily: 'Poppins, sans-serif'
    },
    '& .MuiSelect-icon': {
      color: props.color ? props.color : 'none'
    }
  });

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    props.onChange(selectedValue);
  };

  return (
    <Form1>
      <Inputlabel>{props.label}</Inputlabel>
      <Select2
        id={props.selectId}
        value={value}
        onChange={handleChange}
        startAdornment={
          <IconButton>
            <LocationOnIcon />
          </IconButton>
        }>
        {props.options &&
          props.options.map((el, i) => {
            return (
              <MenuItem value={el} key={i}>
                {el}
              </MenuItem>
            );
          })}
      </Select2>
    </Form1>
  );
}
