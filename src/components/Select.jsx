import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Inputlabel from '@mui/material/InputLabel';
import { SvgIcon } from '@mui/material';
import theme from '../components/theme.jsx';
// import InputAdornment from '@mui/material/InputAdornment';

export default function BasicSelect(props) {
  const [value, setValue] = useState('');

  const Form1 = styled(FormControl)({
    width: props.widthSelect1 ? props.widthSelect1 : '100%',
    fontFamily: 'Poppins, sans-serif'
  });

  const Select2 = styled(Select)({
    backgroundColor: '#F5F5F5',
    padding: '0px',
    margin: '0px',
    width: props.widthSelect ? props.widthSelect : '100%',
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
    console.log(selectedValue);
    props.onChange(selectedValue);
  };

  return (
    <Form1>
      <Inputlabel
        size="small"
        sx={{
          fontFamily: 'Poppins , sans-serif',
          fontSize: '14px',
          display: 'flex',
          paddingLeft: '0px',
          fontWeight: '400'
        }}
        id="demo-select-small-label">
        <SvgIcon sx={{ height: '20px', color: theme.palette.quinary }}>
          <LocationOnIcon />
        </SvgIcon>
        {props.label}
      </Inputlabel>
      <Select2
        labelId="demo-select-small-label"
        id={props.selectId}
        value={value}
        label={props.label}
        onChange={handleChange}>
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
