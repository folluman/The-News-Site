import {
  NewsContainer,
  NewsImage,
  LinkNews,
  DateNews,
  TitleNews,
  ContainerNews,
} from "./listNews.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorText } from "../inputs/input.styles";
import { useUserRole } from "../../authentication/useUserRole";

export interface NewsInterface {
  _id?: string;
  title?: string;
  src?: any;
  created_at?: any;
  imageUrl?: any;
  content?: string;
}

export function News(setNews: any, setError: any) {
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
}

function ListNews() {
  const [news, setNews] = useState<NewsInterface[]>([]);
  const [error, setError] = useState("");
  const userRole = useUserRole();

  useEffect(() => {
    News(setNews, setError)
  }, []);

  if (userRole === "admin" || userRole === "author") {
    return (
      <>
        {error && <ErrorText style={{ marginTop: "40px" }}>{error}</ErrorText>}
        <ContainerNews>
          {news.map((item) => (
            <LinkNews href={`http://localhost:5173/news/${item._id}`}>
              <NewsContainer>
                <NewsImage src={item.src} />
                <DateNews>
                  {new Date(item.created_at).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </DateNews>
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
        </ContainerNews>
      </>
    );
  }

  return (
    <>
      {error && <ErrorText style={{ marginTop: "40px" }}>{error}</ErrorText>}
      {news.map((item) => (
        <LinkNews href={`http://localhost:5173/news/${item._id}`}>
          <NewsContainer>
            <NewsImage src={item.src} />
            <DateNews>
              {new Date(item.created_at).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </DateNews>
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
