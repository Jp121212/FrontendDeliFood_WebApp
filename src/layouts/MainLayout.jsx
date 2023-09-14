import { Outlet } from 'react-router';
import PrimarySearchAppBar from '../components/NavBar.jsx';
import '../styles/navbar.css';
import { Box } from '@mui/material';
import Link from '../components/Link.jsx';
import Select from '../components/Select.jsx';
import { useState, React } from 'react';
import SearchInput from '../components/Search.jsx';
// import Cart from '../components/Badget.jsx';
import Button1 from '../components/Button.jsx';
import theme from '../components/theme.jsx';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '../components/Badget.jsx';

export default function MainLayout() {
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
      <div className="body">
        <div className="NavBar">
          <PrimarySearchAppBar>
            <Box sx={{ alignItems: 'center', width: '30%', height: '60%' }}>
              <Link href="/Restaurant" underline="hover">
                {'Restaurants'}
              </Link>
              <Link href="/Subscription" underline="hover">
                {'Subscription'}
              </Link>
              <Link href="/Orders" underline="hover">
                {'Orders'}
              </Link>
            </Box>
            <Box
              sx={{
                width: '11%',
                height: '30%'
              }}>
              <Select
                label="Select City"
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
                text="Profile"
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
              <SearchInput placeholder="Search Restaurant" type="text"></SearchInput>
            </Box>
            <Box sx={{ marginLeft: '1%', height: '60%' }}>
              <Badge>
                <Button1
                  type="submit"
                  id="CartButton"
                  text="Cart"
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
            <Box>
              <h4>© 2021 DeliFood</h4>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
