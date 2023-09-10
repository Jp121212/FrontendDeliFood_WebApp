import { Outlet } from 'react-router';
import PrimarySearchAppBar from '../components/NavBar.jsx';
import '../styles/navbar.css';
import { Box } from '@mui/material';
import Link from '../components/Link.jsx';
import Select from '../components/Select.jsx';
import { useState, React } from 'react';
import SearchInput from '../components/Search.jsx';
import Cart from '../components/Badget.jsx';
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
        <PrimarySearchAppBar>
          <Box sx={{ flexGrow: 1, marginTop: '30px' }}>
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
          <Box sx={{ flexGrow: 5 }}>
            <Select
              label="Select City"
              widthSelect="15%"
              widthSelect1="100%"
              heightSelect1="50px"
              selectId="SelectCity"
              options={options}
              value={sort}
              onChange={CitySelect}></Select>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <SearchInput placeholder="Search Restaurant" type="text"></SearchInput>
          </Box>
          <Box sx={{ marginTop: '26px', marginLeft: '10px' }}>
            <Cart></Cart>
          </Box>
        </PrimarySearchAppBar>
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
