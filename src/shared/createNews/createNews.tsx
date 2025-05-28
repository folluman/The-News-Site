import { useState, useRef } from "react";
import { TextNews, FormNews } from "./createNews.styles";
import axios from "axios";
import { CreatedText, ErrorText } from "../inputs/input.styles";
import { Button } from "../buttons/button.styles";

function CreateNews() {
  const [error, setError] = useState("");
  const [created, setCreated] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);

    if (fileInputRef.current?.files?.[0]) {
      formDataToSend.append("file", fileInputRef.current.files[0]);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/news/create",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCreated(response.data.message);
      setError("");

      setFormData({ title: "", content: "" });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const apiError = error.response?.data;
        if (apiError) {
          setError(apiError.error || "An error occurred");
          setCreated("");
          return;
        }
      }
      setError("An error occurred. Please try again");
      setCreated("");
    }
  };

  const inputs = [
    {
      placeholder: "Title News",
      name: "title",
    },
    {
      placeholder: "Content News",
      name: "content",
      textContent: true,
    },
  ];

  const listInputs = inputs.map((input, index) => (
    <TextNews
      key={index}
      placeholder={input.placeholder}
      name={input.name}
      value={input.name === "title" ? formData.title : formData.content}
      style={input.textContent ? { height: "200px" } : {}}
      onChange={handleChange}
    />
  ));

  return (
    <>
      <FormNews onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", margin: "20px 0" }}>
          Create News
        </h2>
        {listInputs}
        <input name="file" type="file" ref={fileInputRef} accept="image/*" />
        {error && <ErrorText>{error}</ErrorText>}
        {created && <CreatedText>{created}</CreatedText>}
        <Button type="submit" style={{ margin: "20px 0" }}>
          Create News
        </Button>
      </FormNews>
    </>
  );
}

export default CreateNews;
