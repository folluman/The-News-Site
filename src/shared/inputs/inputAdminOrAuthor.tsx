import { InputStyle, InputDiv, ErrorText, CreatedText } from "./input.styles";
import userIcon from "../../assets/userIcon.png";
import emailIcon from "../../assets/emailIcon.png";
import passwordIcon from "../../assets/passwordIcon.png";
import phoneIcon from "../../assets/phoneIcon.png";
import Select from "../select/select";
import { Button } from "../buttons/button.styles";
import React, { useState } from "react";
import axios from "axios";

interface singUpInput {
  name: string;
  icon: string;
  placeholder: string;
  password?: boolean;
  onChange?: any;
}

function CreateAdminOrAuthor() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
    phone: "",
    role: "",
  });

  const [error, setError] = useState("");

  const [userCreated, setUserCreated] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password != formData.confirmpassword) {
      setError("Passwords don't match");
      setUserCreated("");
      return;
    }

    try {
      const response = await axios.post("https://news-api-sigma-six.vercel.app/users/signup", {
        username: formData.username,
        password: formData.password,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
      });

      setUserCreated(response.data.message);
      setError("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const apiError = error.response?.data;
        if (apiError) {
          setError(`This ${apiError.error}`);
          setUserCreated("");
          return;
        }
        setError("An error ocurred. Please try again");
        setUserCreated("");
      }
    }
  };

  const inputsSignUp: singUpInput[] = [
    { placeholder: "Username", name: "username", icon: userIcon, onChange: handleChange, },
    
    {
      placeholder: "Password",
      name: "password",
      icon: passwordIcon,
      password: true,
      onChange: handleChange,
    },
    {
      placeholder: "PasswordConfirm",
      name: "confirmpassword",
      icon: passwordIcon,
      password: true,
      onChange: handleChange,
    },
    { placeholder: "Email", name: "email", icon: emailIcon, onChange: handleChange, },
    { placeholder: "Phone", name: "phone", icon: phoneIcon, onChange: handleChange, },
  ];

  const listInput = inputsSignUp.map((input, index) => (
    <InputStyle
      key={index}
      name={input.name}
      placeholder={input.placeholder}
      $icon={input.icon}
      type={input.password ? "password" : "text"}
      style={{ marginBottom: "10px" }}
      onChange={input.onChange}
    />
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputDiv style={{ marginTop: "0px" }}>
          <div>
            <h2 style={{ fontSize: "2rem", maxWidth: '320px', marginBottom: '40px' }}>Create a new Admin or Author</h2>
          </div>
          {listInput}
        </InputDiv>
       
        <div style={{ textAlign: "center", paddingBottom: "40px" }}>
           Select Type User:
          <Select
            name="role"
            label=""
            options={[
               { value: "user", label: "User" },
              { value: "admin", label: "Admin" },
              { value: "author", label: "Author" },
            ]}
            onChange={handleChange}
            value={formData.role}
          />
        </div>
        {error && <ErrorText>{error}</ErrorText>}
        {userCreated && <CreatedText>{userCreated}</CreatedText>}
        <div style={{ textAlign: "center" }}>
          <Button type="submit">SignUp</Button>
        </div>
      </form>
    </>
  );
}

export default CreateAdminOrAuthor;
