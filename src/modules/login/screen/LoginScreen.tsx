import { Body, Login, Logo } from "../styles/loginScreen.styles";
import LogoImg from "../../../assets/logo.png";
import Input from "../../../shared/inputs/input";

const LoginScreen = () => {
  return (
    <Body>
      <Login>
        <div>
          <a href="/"><Logo src={LogoImg} /></a>
        </div>
        <Input/>
      </Login>
    </Body>
  );
};

export default LoginScreen;
