import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import InputLabel from '@mui/material/InputLabel';

export default function BasicSelect(props) {
  const [value, setValue] = useState('');

  const Select2 = styled(Select)({
    backgroundColor: '#F5F5F5',
    width: '51%',
    height: '50px',
    borderRadius: '5px',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: '1px',
      borderColor: 'white'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderWidth: '1px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: '1px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '14px'
    },
    '& .MuiOutlinedInput-input': {
      fontSize: '14px'
    },
    '& .MuiSelect-root': {},
    '& .label': {
      fontSize: '14px'
    },
    '& .MuiSelect-icon': {
      color: 'black'
    }
  });

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    props.onChange(selectedValue);
  };

  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel>
        <Box sx={{ display: 'flex', margin: 'auto' }}>
          <SvgIcon sx={{ height: '20px' }} color="#00000">
            {props.icon}
          </SvgIcon>
          <Box sx={{ margin: 'auto' }}>{props.label}</Box>
        </Box>
      </InputLabel>
      <Select2 label={props.label} id={props.selectId} value={value} onChange={handleChange}>
        {props.options &&
          props.options.map((el, i) => {
            return (
              <MenuItem value={el} key={i}>
                {el}
              </MenuItem>
            );
          })}
      </Select2>
    </FormControl>
  );
}
