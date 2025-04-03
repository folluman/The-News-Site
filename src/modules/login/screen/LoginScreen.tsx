import { Body, Login, Logo, PasswordForgot } from "../styles/loginScreen.styles";
import LogoImg from "../../../assets/logo.png";
import Input from "../../../shared/inputs/input";

const LoginScreen = () => {
  return (
    <Body>
      <Login>
        <div>
          <Logo src={LogoImg} />
        </div>
        <Input/>
      </Login>
    </Body>
  );
};

export default LoginScreen;
