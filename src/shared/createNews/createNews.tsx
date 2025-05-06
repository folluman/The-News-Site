import { TextNews } from "./createNews.styles";



function CreateNews() {
  const inputs = [
    {
      placeholder: "Title News",
      name: "title",
    },
    {
        placeholder: "Content News",
        name: "title",
        textContent: true,
      },
  ];

  const listInputs = inputs.map((input, index) => (
    <TextNews
      key={index}
      placeholder={input.placeholder}
      name={input.name}
      style={input.textContent ? {height: '200px'} : {}}
    />
  ));

  return (
    <>
      <form >
        {listInputs}
        <input type="file" placeholder=""/>
      </form>
    </>
  );
}

export default CreateNews;
