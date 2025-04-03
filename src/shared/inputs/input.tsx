import { InputDiv, InputStyle, LinkStyle } from "./input.styles";
import userIcon from "../../assets/userIcon.png";
import emailIcon from "../../assets/emailIcon.png";
import passwordIcon from "../../assets/passwordIcon.png";
import phoneIcon from "../../assets/phoneIcon.png";
import { useState, useSyncExternalStore } from "react";
import { ButtonLogin } from "../buttons/button.styles";
import {
  PasswordForgot,
  SignUpTxt,
  PasswordForgotTxt,
  SignUpDiv,
} from "../../modules/login/styles/loginScreen.styles";

type AppScreen = "loginScrean" | "signUpScrean";

interface LoginInput {
  placeholder: string;
  icon: string;
  password?: boolean;
  name?: string;
  Change?: any;
}

function Input() {
  const [viewLogin, setSignUpOrLogin] = useState<AppScreen>("loginScrean");

  return (
    <>
      <LinkStyle>
        <a
          onClick={() => setSignUpOrLogin("loginScrean")}
          data-active={viewLogin === "loginScrean"}
        >
          Login
        </a>
        <a
          onClick={() => setSignUpOrLogin("signUpScrean")}
          data-active={viewLogin === "signUpScrean"}
        >
          Sign Up
        </a>
      </LinkStyle>
      <InputDiv>
        {viewLogin === "loginScrean" ? (
          <LoginScrean setSignUpOrLogin={setSignUpOrLogin} />
        ) : (
          <SignUpScrean />
        )}
      </InputDiv>
    </>
  );
}

interface LoginScreanProps {
  setSignUpOrLogin: (screen: AppScreen) => void;
}

function LoginScrean({ setSignUpOrLogin }: LoginScreanProps) {
  const inputsLogin: LoginInput[] = [
    { placeholder: "Email address", icon: emailIcon, name: "email" },
    {
      placeholder: "Password",
      icon: passwordIcon,
      password: true,
      name: "password",
    },
  ];

  const listInputsLogin = inputsLogin.map((input, index) => (
    <InputStyle
      key={index}
      placeholder={input.placeholder}
      icon={input.icon}
      type={input.password ? "password" : "text"}
    />
  ));

  return (
    <>
      <InputDiv>{listInputsLogin}</InputDiv>
      <div>
        <ButtonLogin>Login</ButtonLogin>
      </div>
      <PasswordForgot>
        <PasswordForgotTxt>Forgot Password?</PasswordForgotTxt>
      </PasswordForgot>
      <SignUpDiv>
        Don't have an account?{" "}
        <SignUpTxt onClick={() => setSignUpOrLogin("signUpScrean")}>
          Sign Up
        </SignUpTxt>
      </SignUpDiv>
    </>
  );
}

function SignUpScrean() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const inputs: LoginInput[] = [
    { placeholder: "Username", icon: userIcon, name: "username" },
    {
      placeholder: "Password",
      icon: passwordIcon,
      password: true,
      name: "password",
    },
    {
      placeholder: "Confirm Password",
      icon: passwordIcon,
      password: true,
      name: "confirmPassword",
    },
    { placeholder: "Email address", icon: emailIcon, name: "email" },
    { placeholder: "Phone", icon: phoneIcon, name: "phone" },
  ];

  const listInputs = inputs.map((input, index) => (
    <InputStyle
      key={index}
      placeholder={input.placeholder}
      icon={input.icon}
      type={input.password ? "password" : "text"}
    />
  ));

  return (
    <>
      <InputDiv>{listInputs}</InputDiv>
      <ButtonLogin>Sign Up</ButtonLogin>
    </>
  );
}

export default Input;
