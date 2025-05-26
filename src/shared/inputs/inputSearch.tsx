import { InputDivSearch, Input } from "./input.styles";
import searchIcon from "../../assets/Search.png";

interface InputInterface {
  name: string;
  icon: string;
  placeholder: string;
}

function InputSearch({setSearchNews}: any) {
  const inputs: InputInterface[] = [
    {
      name: "searchPost",
      icon: searchIcon,
      placeholder: "Search Posts",
    },
  ];

  const listInputs = inputs.map((input, index) => (
    <Input
      key={index}
      name={input.name}
      icon={input.icon}
      type="text"
      placeholder={input.placeholder}
      onChange={(e) => setSearchNews(e.target.value)}
    />
  ));

  return <InputDivSearch>{listInputs}</InputDivSearch>;
}

export default InputSearch;
