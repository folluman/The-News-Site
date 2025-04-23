import styled from "styled-components";

// Color backgrounds
export const colorBackground = "#1a1a1a";
const colorBackgroundLogin = "#171617";
const colorForgotPassword = "#A9B3B0";
const colorSignUpTxt = "#DDDEDE";

export const Body = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  font-family: "Inter", sans-serif;
  width: 100%;
  height: 100vh;
  background-color: ${colorBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.div`
  background-color: white;
  height: 80vh;
  width: 70vh;
  background-color: ${colorBackgroundLogin};
  text-align: center;
  padding-top: 2%;
`;

export const Logo = styled.img`
  width: 20vh;
  height: 20vh;
`;

export const PasswordForgot = styled.div`
  padding-bottom: 5%;
  border-bottom: gray 1px solid;
  width: 50%;
  margin: auto;
`;

export const PasswordForgotTxt = styled.a`
  font-style: none;
  color: ${colorForgotPassword};
  cursor: default;
`;

export const SignUpDiv = styled.div`
  color: ${colorSignUpTxt};
  font-size: 1.2rem;
  margin-top: 5%;
`;
export const SignUpTxt = styled.a`
  font-style: none;
  color: ${colorSignUpTxt};
  cursor: default;

  &:hover {
    color: orange;
  }
`;
