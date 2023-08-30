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

// import { AuthContext } from '../../context/AuthContext';
const ErrorAlert = (props) => <AlertComp severity="error" message={props.message} color="F53636" />;
const WarningAlert = (props) => (
  <AlertComp severity="warning" message={props.message} color="#E9BD1F" />
);

const Login = () => {
  const [warning, setWarning] = useState();
  const [error, setError] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const auth = useContext(AuthContext);

  useEffect(() => {}, [password, email]);
  const loginClickHandler = async (e) => {
    e.preventDefault();
    setError('');
    setWarning('');
    console.log(email, password);

    if (email == '' && password == '') {
      setWarning('Please enter email and password');
    } else if (email == '') {
      setWarning('Please enter email');
    } else if (password == '') {
      setWarning('Please enter Password');
    } else {
      const { data, error } = await authenticate({ email, password }, setError);
      // auth.verify();
      if (data) {
        window.location.href = '/';
      }
      if (error.status == 404) {
        setError('Credentials not found');
      }
      if (error.status == 401) {
        setError('Invalid Credentials');
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
            <Form width="80%" height="100%">
              <div className="InputStructure">
                <img src={logo} className="icon"></img>
                <div className="textFields">
                  <InputLabel InputLabel="Email"></InputLabel>
                  <Input
                    width="95%"
                    height="10%"
                    variant="outlined"
                    type="text"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></Input>
                  <InputLabel InputLabel="Password"></InputLabel>
                  <Input
                    width="95%"
                    type="password"
                    id="password"
                    height="10%"
                    placeholder="Enter password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></Input>
                  <div className="Forgot">
                    <h4>Forget you password?</h4>
                  </div>
                </div>

                <div className="ButtonOrder">
                  <Button
                    type="submit"
                    margin="10px 12px 0px 0px"
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

                  <Button
                    type="submit"
                    margin="10px 0px 0px 0px"
                    id="RegisterButton"
                    text="Register"
                    color={theme.palette.primary}
                    width="50%"
                    height="44px"
                    colorHover={theme.palette.secondary}
                    TextInButton="Register"
                  />
                </div>
              </div>
            </Form>
            <div className="errorContainer">
              {warning && <WarningAlert message={warning} />}
              {error && <ErrorAlert message={error} />}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
export default Login;
