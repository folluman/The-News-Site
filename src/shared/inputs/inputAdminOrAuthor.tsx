import { InputStyle, InputDiv } from "./input.styles";
import userIcon from "../../assets/userIcon.png";
import emailIcon from "../../assets/emailIcon.png";
import passwordIcon from "../../assets/passwordIcon.png";
import phoneIcon from "../../assets/phoneIcon.png";
import Select from "../select/select";

interface singUpInput {
  name: string;
  icon: string;
  placeholder: string;
  password?: boolean;
  onChange?: any;
}

function CreateAdminOrAuthor() {
  const inputsSignUp: singUpInput[] = [
    { placeholder: "Username", name: "username", icon: userIcon },
    { placeholder: "Password", name: "password", icon: passwordIcon },
    { placeholder: "PasswordConfirm", name: "password", icon: passwordIcon },
    { placeholder: "Email", name: "email", icon: emailIcon },
    { placeholder: "Phone", name: "phone", icon: phoneIcon },
  ];

  const listInput = inputsSignUp.map((input, index) => (
    <InputStyle
      key={index}
      name={input.name}
      placeholder={input.placeholder}
      icon={input.icon}
      type={input.password ? "password" : "text"}
      style={{marginBottom: '10px'}}
    />
  ));

  return (
    <>
      <InputDiv style={{ marginTop: "20px"}}>
        <div>
          <h2 style={{ fontSize: "2rem" }}>Create a new Admin or Author</h2>
        </div>
        {listInput}
      </InputDiv>
      <div style={{textAlign: 'center', paddingBottom: '40px'}}>
      <Select
      label="Escolha uma opção"
      options={[
        {value: 'user', label: 'User'},
        {value: 'admin', label: 'Admin'},
        {value: 'author', label: 'Author'},
      ]}
      />
      </div>
    </>
  );
}

export default CreateAdminOrAuthor;
