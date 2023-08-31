import '../../styles/Welcome.css';
import { ThemeProvider } from 'styled-components';
import theme from '../../components/theme.jsx';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Worker from '../../assets/worker.svg';

const Welcome = () => {
  const LoginClick = () => {
    window.location.href = '/login';
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="bodyWelcome">
        <div className="ContentWelcome">
          <div className="LogoDeliFood">
            <h1 className="DeliFoodB">DELI</h1>
            <h1 className="DeliFoodP">FOOD</h1>
            <div className="DescriptionWelcome">
              <h4>
                Welcome to DeliFood, your most reliable food delivery service. We take pride in
                offering you a wide variety of culinary delights to satisfy your cravings and busy
                lifestyle. Whether you want a slice of hot pizza, a hearty burger with all the
                ingredients, a fresh and vibrant salad, or a creamy and delicious pasta, we are here
                to please you.
              </h4>
            </div>{' '}
            <div className="GPS">
              <h4>Put your location to ORDER NOW</h4>
              <Input inputsize="" placeholder="GPS" id="Localitation" type="text"></Input>
              <h5>Do you already have an account? login or create one</h5>
            </div>
            <div className="ButtonsWelcome">
              <Button
                type="submit"
                margin="10px 12px 0px 0px"
                id="loginButton"
                text="Login"
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
                text="Register"
                color={theme.palette.primary}
                width="45%"
                height="50px"
                colorHover={theme.palette.secondary}
                TextInButton="Register"
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
