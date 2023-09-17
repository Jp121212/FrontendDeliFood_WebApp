import Grid from '@mui/material/Grid';
import Link from './Link.jsx';
import theme from './theme.jsx';
import Button from './Button.jsx';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import i18n from '../services/i18n.js';
import { useState, useEffect } from 'react';

function Footer() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <Grid
      alignItems="center"
      justifyContent="center"
      sx={{
        border: '1px solid',
        width: '30%',
        margin: 'auto',
        alignItems: 'center',
        display: 'flex'
      }}>
      <Link href="/Restaurant" color={theme.palette.tertiary} underline="hover">
        {t('About Us')}
      </Link>
      <Link href="/Restaurant" color={theme.palette.tertiary} underline="hover">
        {t('Support')}
      </Link>
      <Link href="/Restaurant" color={theme.palette.tertiary} underline="hover">
        {t('Logout')}
      </Link>
      <Button
        width="30%"
        text={language === 'en' ? 'English' : 'Español'}
        color={theme.palette.quinary}
        startIcon={<LanguageIcon></LanguageIcon>}
        colorHover={theme.palette.quinary}
        onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}></Button>
    </Grid>
  );
}

export default Footer;
