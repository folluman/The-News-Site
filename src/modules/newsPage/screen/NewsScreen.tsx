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
import { useUserRole } from "../../../authentication/useUserRole";
import { ContainerHeader, Container } from "../../home/styles/homeStyle";
import { HomeLink } from "../../errorPage/styles/errorPage.styles";
import ErrorPage from "../../errorPage/screen/ErrorPageScreen";

function NewsPage() {
  const [news, setNews] = useState<NewsInterface | null>(null);
  const { id } = useParams();
  const userRole = useUserRole();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          alert("ID news not found");
          return;
        }

        const response = await axios.get(`https://news-api-sigma-six.vercel.app/news/${id}`);
        setNews(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          return alert("It's not possible to show the news.");
        }
        return alert("An unexpected error occurred.");
      }
    };

    fetchData();
  }, [id]);

  if (!news) {
    return <ErrorPage />;
  }

  if (userRole) {
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

  return (
    <>
      <Body style={{ maxHeight: "100vh" }}>
        <Container>
          <ContainerHeader style={{ display: "flow", textAlign: "center" }}>
            <Logo src={LogoImg} />
            <h2 style={{ color: "white", fontSize: "1.4rem", margin: "50px" }}>
              User not found, please login to acess the news
            </h2>
            <HomeLink
              style={{ maxWidth: "120px", margin: "auto", marginTop: "40px" }}
            >
              <a
                href="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </a>
            </HomeLink>
          </ContainerHeader>
        </Container>
      </Body>
    </>
  );
}

export default NewsPage;
