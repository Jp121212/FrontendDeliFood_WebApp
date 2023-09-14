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
    width: props.widthSelect1 ? props.widthSelect1 : '50%',
    fontFamily: 'Open Sans, sans-serif'
  });

  const Select2 = styled(Select)({
    backgroundColor: '#F5F5F5',
    width: props.widthSelect ? props.widthSelect : '50%',
    minWidth: props.minWidth ? props.minWidth : '200px',
    height: props.height ? props.height : '40px',
    borderRadius: '5px',
    fontSize: '14px',
    fontFamily: 'Open Sans, sans-serif',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderWidth: '0px',
      borderColor: 'white'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: '0px',
      borderColor: 'white'
    },
    '& .MuiOutlinedInput-input': {},
    '& .MuiSelect-root': {},
    '& .label': {
      borderColor: 'white'
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
