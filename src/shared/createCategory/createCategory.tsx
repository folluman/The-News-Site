import {
  InputStyle,
  InputDiv,
  ErrorText,
  CreatedText,
} from "../inputs/input.styles";
import IconCategory from "../../assets/categoryIcon.png";
import { Button } from "../buttons/button.styles";
import { useState } from "react";
import axios from "axios";

interface InputInterface {
  name: string;
  icon: any;
  placeholder: string;
  onChange: any;
}

function CreateCategory() {
  const [formData, setFormData] = useState({
    name: "",
  });

  const [error, setError] = useState("");

  const [created, setCreated] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name === "") {
      return setError("Please add category name");
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/category/create",
        {
          name: formData.name,
        }
      );

      setCreated(response.data.message);
      setError("");
      setFormData({ name: "" });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const apiError = error.response?.data;
        if (apiError) {
          setError(apiError.error || apiError.message || "An error occurred");
          setCreated("");
          return;
        }
      }
      setError("An error occurred. Please try again.");
      setCreated("");
    }
  };

  const listInput: InputInterface[] = [
    {
      name: "name",
      icon: IconCategory,
      placeholder: "Category name",
      onChange: handleChange,
    },
  ];

  const input = listInput.map((input, index) => (
    <InputStyle
      key={index}
      placeholder={input.placeholder}
      name={input.name}
      $icon={input.icon}
      onChange={input.onChange}
    />
  ));

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", marginTop: "40px" }}
      >
        <h2 style={{ fontSize: "1.6rem", marginBottom: "40px" }}>
          Create New Category
        </h2>
        <InputDiv style={{ marginBottom: "40px" }}>{input}</InputDiv>
        {error && <ErrorText>{error}</ErrorText>}
        {created && <CreatedText>{created}</CreatedText>}
        <Button type="submit">Create new category</Button>
      </form>
    </>
  );
}

export default CreateCategory;
