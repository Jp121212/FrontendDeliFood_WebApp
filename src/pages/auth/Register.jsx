import '../../styles/login.css';
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

// import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alert, setWarning] = useState('');
  const [severity, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [telephone, setTelephone] = useState('');
  // const auth = useContext(AuthContext);

  useEffect(() => {}, [password, email, severity, alert, openSnackbar, telephone, confirm]);
  const handleClose = () => {
    setOpenSnackbar(false);
  };
  const loginClickHandler = () => {
    window.location.href = '/login';
  };

  const RegisterClickHandler = async (e) => {
    e.preventDefault();
    setError('');
    setWarning('');

    if (email == '') {
      setWarning('Please enter email');
      setError('warning');
      setOpenSnackbar(true);
    } else if (password == '') {
      setWarning('Please enter password');
      setError('warning');
      setOpenSnackbar(true);
    } else if (confirm == '') {
      setWarning('Please enter Confirm Password');
      setError('warning');
      setOpenSnackbar(true);
    } else if (telephone == '') {
      setWarning('Please enter telephone');
      setError('warning');
      setOpenSnackbar(true);
    } else if (password != confirm) {
      setWarning('Password and Confirm Password must be the same');
      setError('error');
      setOpenSnackbar(true);
    } else {
      const { data, error } = await authenticate({ email, password, telephone }, setError);
      // auth.verify();
      if (data) {
        setWarning(data.message);
        setError('success');
        setOpenSnackbar(true);
      }
      if (error.status == 404) {
        setWarning(error.message);
        setError('error');
        setOpenSnackbar(true);
      }
      if (error.status == 401) {
        setWarning(error.message);
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
            <h1 className="DeliFood">DELIFOOD</h1>
          </div>
        </div>
        <div className="contentlogin">
          <div className="contauto">
            <Form width="80%" height="120%">
              <div className="InputStructure">
                <img src={logo} className="icon"></img>
                <div className="textFields">
                  <InputLabel InputLabel="Email"></InputLabel>
                  <Input
                    height="%10"
                    inputsize="large"
                    variant="outlined"
                    type="text"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></Input>
                  <InputLabel InputLabel="Password"></InputLabel>
                  <Input
                    inputsize="large"
                    type="password"
                    id="password"
                    height="10%"
                    placeholder="Enter password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></Input>
                  <InputLabel InputLabel="Confirm Password"></InputLabel>
                  <Input
                    inputsize="large"
                    type="password"
                    id="confirm"
                    height="10%"
                    placeholder="Confirm password"
                    variant="outlined"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}></Input>
                  <InputLabel InputLabel="Telephone"></InputLabel>
                  <Input
                    inputsize="large"
                    type="number"
                    id="telephone"
                    height="10%"
                    placeholder="Enter telephone"
                    variant="outlined"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}></Input>
                </div>

                <div className="ButtonOrder">
                  <Button
                    type="submit"
                    margin="10px 12px 0px 0px"
                    id="RegisterButton"
                    text="Register"
                    color={theme.palette.primary}
                    width="50%"
                    height="44px"
                    colorHover={theme.palette.secondary}
                    TextInButton="Register"
                    onClick={RegisterClickHandler}
                  />{' '}
                  <Button
                    margin="10px 0px 0px 0px"
                    id="loginButton"
                    text="Login"
                    color={theme.palette.tertiary}
                    width="50%"
                    height="44px"
                    colorHover={theme.palette.quaternary}
                    TextInButton="Login"
                    colorText={theme.palette.primary}
                    onClick={loginClickHandler}
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
export default Register;
