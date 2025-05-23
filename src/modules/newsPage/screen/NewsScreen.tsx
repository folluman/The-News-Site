import { Logo } from "../../login/styles/loginScreen.styles";
import {
  HeaderNews,
  NewsContent,
  ProfileIconNews,
  SectionNews,
} from "../styles/newsStyle";
import LogoImg from "../../../assets/logo.png";
import { Body } from "../../home/styles/homeStyle";
import MenuProfile from "../../../shared/menu/menu";
import {
  DateNews,
  NewsImage,
  TitleNews,
} from "../../../shared/listNews/listNews.styles";
import { NewsInterface } from "../../../shared/listNews/listNews";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function NewsPage() {
  const [news, setNews] = useState<NewsInterface | null>(null);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          setError("ID not found");
          return;
        }

        const response = await axios.get(`http://localhost:3000/news/${id}`);
        setNews(response.data);
        setError("");
      } catch (err) {
        if (axios.isAxiosError(err)) {
          return setError(
            err.response?.data?.message || "It's not possible to show the news."
          );
        }
        return setError("An unexpected error occurred.");
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!news) {
    return <div>News not found</div>;
  }

  return (
    <Body>
      <HeaderNews>
        <ProfileIconNews>
          <MenuProfile />
        </ProfileIconNews>
        <a href="/">
          <Logo src={LogoImg} style={{ width: "80px", height: "80px" }} />
        </a>
      </HeaderNews>
      <SectionNews>
        <NewsImage src={news.src} />
        <DateNews>
          {new Date(news.created_at).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </DateNews>
        <TitleNews
          style={{
            padding: "20px 2px",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          {news.title}
        </TitleNews>
        <NewsContent
          style={{
            textAlign: "justify",
            hyphens: "auto",
            padding: "10px",
            whiteSpace: "pre-line",
          }}
        >
          {news.content}
        </NewsContent>
      </SectionNews>
    </Body>
  );
}

export default NewsPage;
