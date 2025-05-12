import {
  NewsContainer,
  NewsImage,
  LinkNews,
  DateNews,
  TitleNews,
} from "./listNews.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorText } from "../inputs/input.styles";

interface News {
  _id?: string;
  title?: string;
  src?: any;
  created_at?: any;
  imageUrl?: any;
}

function ListNews() {
  const [news, setNews] = useState<News[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/news/list");
        setNews(response.data);
        setError("");
      } catch (err) {
        if (axios.isAxiosError(err)) {
          return setError(
            err.response?.data?.message || "It's not possible to show the news."
          );
        }
        setError("An unexpected error occurred.");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {error && <ErrorText style={{ marginTop: "40px" }}>{error}</ErrorText>}
      {news.map((item) => (
        <LinkNews href={`http://localhost:3000/${item._id}`}>
          <NewsContainer>
            <NewsImage src={item.src} />
            <DateNews>{new Date(item.created_at).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}</DateNews>
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
