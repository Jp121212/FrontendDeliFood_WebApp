import Fab from '@mui/material/Fab';
import LanguageIcon from '@mui/icons-material/Language';
import i18n from '../services/i18n.js';
import { useState, useEffect } from 'react';
import theme from './theme.jsx';

function Fab1() {
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    console.log(language);
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const style = {
    position: 'fixed',
    right: '1rem',
    height: '40px',
    width: '100px',
    borderRadius: '5%',
    fontSize: '12px',
    fontFamily: 'Open Sans, sans-serif',
    color: theme.palette.quaternary,
    backgroundColor: theme.palette.quinary,
    '&:hover': {
      backgroundColor: theme.palette.primary,
      color: theme.palette.quaternary
    }
  };
  return (
    <Fab sx={style} onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}>
      <LanguageIcon sx={{ mr: 1 }}></LanguageIcon>
      {language === 'en' ? 'English' : 'Español'}
    </Fab>
  );
}

export default Fab1;
