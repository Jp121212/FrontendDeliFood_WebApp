import '../../styles/Welcome.css';
import { ThemeProvider } from 'styled-components';
import theme from '../../components/theme.jsx';
import Button from '../../components/Button';
import Worker from '../../assets/worker.svg';
import Select from '../../components/Select';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Fab from '../../components/Fab';

const Welcome = () => {
  const { t } = useTranslation();
  const [sort, setSort] = useState({
    sort: ''
  });
  const LoginClick = () => {
    window.location.href = '/login';
  };

  const RegisterClick = () => {
    window.location.href = '/register';
  };

  const GoHome = (selectedValue) => {
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
    <ThemeProvider theme={theme}>
      <div className="bodyWelcome">
        <div className="ContentWelcome">
          <div style={{ marginTop: '1%' }}>
            <Fab></Fab>
          </div>
          <div className="LogoDeliFood">
            <h1 className="DeliFoodB">DELI</h1>
            <h1 className="DeliFoodP">FOOD</h1>
            <div className="DescriptionWelcome">
              <h4>
                {t(
                  'Welcome to DeliFood, your most reliable food delivery service. We take pride in offering you a wide variety of culinary delights to satisfy your cravings and busy lifestyle. Whether you want a slice of hot pizza, a hearty burger with all the ingredients, a fresh and vibrant salad, or a creamy and delicious pasta, we are here to please you.'
                )}
              </h4>
            </div>{' '}
            <div className="GPS">
              <h4>{t('Put your location to ORDER NOW')}</h4>
              <Select
                width="100%"
                height="50px"
                selectId="SelectCity"
                options={options}
                onChange={GoHome}
                value={sort}></Select>{' '}
              <div className="have">
                <h4> {t('Do you already have an account? login or create one')} </h4>
              </div>
            </div>
            <div className="ButtonsWelcome">
              <Button
                type="submit"
                margin="10px 12px 0px 0px"
                id="loginButton"
                text={t('Login')}
                color={theme.palette.tertiary}
                width="45%"
                height="50px"
                colorHover={theme.palette.quaternary}
                TextInButton="Login"
                colorText={theme.palette.primary}
                onClick={LoginClick}
              />

              <Button
                type="submit"
                margin="10px 0px 0px 0px"
                id="RegisterButton"
                text={t('Sign-Up')}
                color={theme.palette.primary}
                width="45%"
                height="50px"
                colorHover={theme.palette.secondary}
                onClick={RegisterClick}
              />
            </div>
          </div>
          <div className="Shapes">
            <div className="WorkerWelcome">
              <img className="Worker" src={Worker}></img>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
export default Welcome;
