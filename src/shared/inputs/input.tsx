import {
  InputDiv,
  InputStyle,
  LinkStyle,
  ErrorText,
  CreatedText,
} from "./input.styles";
import userIcon from "../../assets/userIcon.png";
import emailIcon from "../../assets/emailIcon.png";
import passwordIcon from "../../assets/passwordIcon.png";
import phoneIcon from "../../assets/phoneIcon.png";
import { useState } from "react";
import { Button } from "../buttons/button.styles";
import {
  PasswordForgot,
  SignUpTxt,
  PasswordForgotTxt,
  SignUpDiv,
} from "../../modules/login/styles/loginScreen.styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type AppScreen = "loginScreen" | "signUpScreen";

interface LoginInput {
  placeholder: string;
  icon: string;
  password?: boolean;
  name?: string;
  onChange?: any;
}

function Input() {
  const [viewLogin, setSignUpOrLogin] = useState<AppScreen>("loginScreen");

  return (
    <>
      <LinkStyle>
        <a
          onClick={() => setSignUpOrLogin("loginScreen")}
          data-active={viewLogin === "loginScreen"}
        >
          Login
        </a>
        <a
          onClick={() => setSignUpOrLogin("signUpScreen")}
          data-active={viewLogin === "signUpScreen"}
        >
          Sign Up
        </a>
      </LinkStyle>
      <InputDiv>
        {viewLogin === "loginScreen" ? (
          <LoginScreen setSignUpOrLogin={setSignUpOrLogin} />
        ) : (
          <SignUpScreen />
        )}
      </InputDiv>
    </>
  );
}

interface LoginScreenProps {
  setSignUpOrLogin: (screen: AppScreen) => void;
}

// LoginScreen component
// This component handles the login functionality and form submission
function LoginScreen({ setSignUpOrLogin }: LoginScreenProps) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputsLogin: LoginInput[] = [
    { placeholder: "Email address", icon: emailIcon, name: "email" },
    {
      placeholder: "Password",
      icon: passwordIcon,
      password: true,
      name: "password",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Check if the fields are filled in
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://the-news-api-jpvv.onrender.com/users/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );
      if(response){
        return navigate("/");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return setError(err.response?.data?.message);
      }
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const listInputsLogin = inputsLogin.map((input, index) => (
    <InputStyle
      key={index}
      name={input.name}
      placeholder={input.placeholder}
      $icon={input.icon}
      type={input.password ? "password" : "text"}
      value={formData[input.name as keyof typeof formData]}
      onChange={handleChange}
    />
  ));

  return (
    <form onSubmit={handleSubmit}>
      <InputDiv
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {listInputsLogin}
      </InputDiv>

      {error && <ErrorText>{error}</ErrorText>}

      <div>
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
      </div>

      <PasswordForgot>
        <PasswordForgotTxt>Forgot Password?</PasswordForgotTxt>
      </PasswordForgot>

      <SignUpDiv>
        Don't have an account?{" "}
        <SignUpTxt onClick={() => setSignUpOrLogin("signUpScreen")}>
          Sign Up
        </SignUpTxt>
      </SignUpDiv>
    </form>
  );
}

// SignUpScreen component
// This component handles the sign-up functionality and form submission
function SignUpScreen() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const [userCreated, setUserCreated] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      setUserCreated("");
      return;
    }

    try {
      const response = await axios.post("https://the-news-api-jpvv.onrender.com/users/signup", {
        username: formData.username,
        password: formData.password,
        email: formData.email,
        phone: formData.phone,
      });

      setUserCreated(response.data.message);
      setError("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const apiError = error.response?.data;
        if (apiError) {
          setError(`${apiError.error}`);
          setUserCreated("");
          return;
        }
      }
      setError("An error occurred. Please try again.");
      setUserCreated("");
    }
  };

  const inputs: LoginInput[] = [
    {
      placeholder: "Username",
      icon: userIcon,
      name: "username",
      onChange: handleChange,
    },
    {
      placeholder: "Password",
      icon: passwordIcon,
      password: true,
      name: "password",
      onChange: handleChange,
    },
    {
      placeholder: "Confirm Password",
      icon: passwordIcon,
      password: true,
      name: "confirmPassword",
      onChange: handleChange,
    },
    {
      placeholder: "Email address",
      icon: emailIcon,
      name: "email",
      onChange: handleChange,
    },
    {
      placeholder: "Phone",
      icon: phoneIcon,
      name: "phone",
      onChange: handleChange,
    },
  ];

  const listInputs = inputs.map((input, index) => (
    <InputStyle
      key={index}
      placeholder={input.placeholder}
      $icon={input.icon}
      type={input.password ? "password" : "text"}
      name={input.name}
      onChange={input.onChange}
    />
  ));

  return (
    <form onSubmit={handleSubmit}>
      <InputDiv
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {listInputs}
      </InputDiv>
      {error && <ErrorText>{error}</ErrorText>}
      {userCreated && <CreatedText>{userCreated}</CreatedText>}
      <Button type="submit">Sign Up</Button>
    </form>
  );
}

export default Input;
