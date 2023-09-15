import { Outlet } from 'react-router';
import PrimarySearchAppBar from '../components/NavBar.jsx';
import '../styles/navbar.css';
import { Box } from '@mui/material';
import Link from '../components/Link.jsx';
import Select from '../components/Select.jsx';
import { useState, React } from 'react';
import SearchInput from '../components/Search.jsx';
import Button1 from '../components/Button.jsx';
import theme from '../components/theme.jsx';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '../components/Badget.jsx';
import Footer from '../components/Footer.jsx';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../services/i18n.js';

export default function MainLayout() {
  const { t } = useTranslation();
  const [sort, setSort] = useState({
    sort: ''
  });

  const CitySelect = (selectedValue) => {
    setSort({ sort: selectedValue });
  };

  const options = [
    'Alajuela',
    'Sanjose',
    'Cartago',
    'Heredia',
    'Guanacaste',
    'Puntarenas',
    'Limon'
  ];
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <div className="body">
          <div className="NavBar">
            <PrimarySearchAppBar>
              <Box sx={{ alignItems: 'center', width: '30%', height: '60%' }}>
                <Link href="/Restaurant" underline="hover">
                  {t('Restaurants')}
                </Link>
                <Link href="/Subscription" underline="hover">
                  {t('Subscription')}
                </Link>
                <Link href="/Orders" underline="hover">
                  {t('Orders')}
                </Link>
              </Box>
              <Box
                sx={{
                  width: '11%',
                  height: '30%'
                }}>
                <Select
                  label={t('Select City')}
                  widthSelect="100%"
                  widthSelect1="100%"
                  selectId="SelectCity"
                  options={options}
                  value={sort}
                  onChange={CitySelect}></Select>
              </Box>
              <Box
                sx={{
                  width: '20%',

                  marginLeft: '10px'
                }}>
                <Button1
                  type="submit"
                  id="ProfileButton"
                  text={t('Profile')}
                  color={theme.palette.quinary}
                  width="30%"
                  height="40px"
                  startIcon={<PersonIcon></PersonIcon>}
                  colorHover={theme.palette.primary}
                  colorText={theme.palette.quaternary}></Button1>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  width: '30%',
                  height: '60%',
                  marginLeft: '10px'
                }}>
                <SearchInput placeholder={t('Search Restaurant')} type="text"></SearchInput>
              </Box>
              <Box sx={{ marginLeft: '1%', height: '60%' }}>
                <Badge>
                  <Button1
                    type="submit"
                    id="CartButton"
                    text={t('Cart')}
                    color={theme.palette.quinary}
                    width="100%"
                    height="40px"
                    startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
                    colorHover={theme.palette.primary}
                    colorText={theme.palette.quaternary}></Button1>
                </Badge>
              </Box>
            </PrimarySearchAppBar>
          </div>

          <div className="cont">
            <Outlet />{' '}
            <div className="Footer">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </I18nextProvider>
    </>
  );
}
