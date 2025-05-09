import {
  NewsContainer,
  NewsImage,
  LinkNews,
  DateNews,
  TitleNews,
} from "./listNews.styles";
import ImageNews from "../../assets/newsImage.png";

function ListNews() {
  return (
    <>
      <LinkNews href="#">
        <NewsContainer>
          <NewsImage src={ImageNews} />
          <DateNews>19 de abr</DateNews>
          <TitleNews
            style={{
              textAlign: "center",
              padding: "20px 2px",
              fontSize: "1.2rem",
            }}
          >
            Lorem Ipsum is simply dummy.
          </TitleNews>
        </NewsContainer>
      </LinkNews>
    </>
  );
}

export default ListNews;
