import { Outlet } from 'react-router';
import PrimarySearchAppBar from '../components/NavBar.jsx';
import '../styles/navbar.css';
import { Box } from '@mui/material';
import Link from '../components/Link.jsx';
import Select from '../components/Select.jsx';
import { useState, React } from 'react';
import SearchInput from '../components/Search.jsx';
import Cart from '../components/Badget.jsx';
import Button from '../components/Button.jsx';
import theme from '../components/theme.jsx';
import PersonIcon from '@mui/icons-material/Person';

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
            <Box sx={{ width: '30%' }}>
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
                width: '12%',
                height: '60%'
              }}>
              <Select
                label="Select City"
                widthSelect="60%"
                widthSelect1="100%"
                selectId="SelectCity"
                options={options}
                value={sort}
                onChange={CitySelect}></Select>
            </Box>
            <Box
              sx={{
                width: '28%',
                marginLeft: '10px'
              }}>
              <Button
                type="submit"
                id="ProfileButton"
                text="Profile"
                color={theme.palette.quinary}
                width="20%"
                height="40px"
                colorHover={theme.palette.primary}
                TextInButton="Profile"
                colorText={theme.palette.quaternary}
                icon={<PersonIcon />}
              />
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
            <Box sx={{ flexGrow: 1, marginLeft: '1%' }}>
              <Cart></Cart>
            </Box>
          </PrimarySearchAppBar>
        </div>

        <div className="cont">
          <Outlet />
        </div>
        <div className="Footer">
          <Box>
            <h4>© 2021 DeliFood</h4>
          </Box>
        </div>
      </div>
    </>
  );
}
