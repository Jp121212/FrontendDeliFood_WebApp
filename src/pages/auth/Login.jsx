import '../../styles/auth.css';
import { useEffect, useState } from 'react';
import Button from '../../components/Button.jsx';
import AlertComp from '../../components/Alert.jsx';
import { authenticate } from '../../services/auth';
import Form from '../../components/Form.jsx';
import InputLabel from '../../components/Label.jsx';
import Input from '../../components/Input.jsx';
import logo from '../../assets/2.svg';
import { ThemeProvider } from 'styled-components';
import theme from '../../components/theme.jsx';
import SnackBar from '@mui/material/Snackbar';
import Fab from '../../components/Fab.jsx';
import { useTranslation } from 'react-i18next';

// import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const { t } = useTranslation();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alert, setWarning] = useState('');
  const [severity, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const auth = useContext(AuthContext);

  useEffect(() => {}, [password, email, severity, alert, openSnackbar]);
  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const RegisterClickHandler = () => {
    window.location.href = '/register';
  };

  const loginClickHandler = async (e) => {
    e.preventDefault();
    setError('');
    setWarning('');

    if (email == '' && password == '') {
      setWarning('Please enter email and password');
      setError('warning');
      setOpenSnackbar(true);
    } else if (email == '') {
      setWarning('Please enter email');
      setError('warning');
      setOpenSnackbar(true);
    } else if (password == '') {
      setWarning('Please enter Password');
      setError('warning');
      setOpenSnackbar(true);
    } else {
      const { data, error } = await authenticate({ email, password }, setError);
      // auth.verify();
      if (data) {
        setWarning('Login Successfull');
        setError('success');
        setOpenSnackbar(true);
        window.location.href = '/home';
      }
      if (error && error.status == 404) {
        setWarning(error.data.error);
        setError('error');
        setOpenSnackbar(true);
      }
      if (error && error.status == 401) {
        setWarning(error.data.error);
        setError('error');
        setOpenSnackbar(true);
      }
      if (error && error.status == 400) {
        setWarning(error.data.error);
        setError('error');
        setOpenSnackbar(true);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="body">
        <div className="Header">
          <div className="NameDeli">
            <a href="/" className="DeliFood">
              DELIFOOD
            </a>
            <Fab></Fab>
          </div>
        </div>
        <div className="contentlogin">
          <div className="contauto">
            <Form width="80%" height="100%">
              <div className="InputStructure">
                <img src={logo} className="icon"></img>
                <div className="textFields">
                  <InputLabel InputLabel={t('Email')}></InputLabel>
                  <Input
                    height="%10"
                    inputsize="large"
                    variant="outlined"
                    type="text"
                    id="email"
                    placeholder={t('Enter email')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></Input>
                  <InputLabel InputLabel={t('Password')}></InputLabel>
                  <Input
                    inputsize="large"
                    type="password"
                    id="password"
                    height="10%"
                    placeholder={t('Enter password')}
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></Input>
                  <div className="Forgot">
                    <h4>{t('Forget you password?')}</h4>
                  </div>
                </div>

                <div className="ButtonOrder">
                  <Button
                    type="submit"
                    margin="10px 12px 0px 0px"
                    id="loginButton"
                    text={t('Login')}
                    color={theme.palette.tertiary}
                    width="50%"
                    height="44px"
                    colorHover={theme.palette.quaternary}
                    colorText={theme.palette.primary}
                    onClick={loginClickHandler}></Button>
                  <Button
                    margin="10px 0px 0px 0px"
                    id="RegisterButton"
                    text={t('Sign-Up')}
                    color={theme.palette.primary}
                    width="50%"
                    height="44px"
                    colorHover={theme.palette.secondary}
                    TextInButton="Register"
                    onClick={RegisterClickHandler}
                  />
                </div>
              </div>
            </Form>
            <div className="errorContainer">
              <SnackBar
                open={openSnackbar}
                autoHideDuration={3700}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <AlertComp onClose={handleClose} severity={severity} variant="filled">
                  {alert}
                </AlertComp>
              </SnackBar>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
export default Login;
