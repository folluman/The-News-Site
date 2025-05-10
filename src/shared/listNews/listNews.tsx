import {
  NewsContainer,
  NewsImage,
  LinkNews,
  DateNews,
  TitleNews,
} from "./listNews.styles";
import ImageNews from "../../assets/newsImage.png";
import { useEffect, useState } from "react";
import axios from "axios";

interface News {
  _id?: string,
  title?: string,
  src?: any,
  created: any,
}

function ListNews() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/news/list");
        setNews(response.data);
      } catch {
        alert("Error");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {news.map((item) => (
        <LinkNews href="#">
          <NewsContainer>
            <NewsImage src={item.src} />
            <DateNews>19 de abr</DateNews>
            <TitleNews
              style={{
                textAlign: "center",
                padding: "20px 2px",
                fontSize: "1.2rem",
              }}
            >
              {item.title}
            </TitleNews>
          </NewsContainer>
        </LinkNews>
      ))}
    </>
  );
}

export default ListNews;
