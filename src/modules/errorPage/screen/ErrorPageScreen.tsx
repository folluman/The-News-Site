import { Body, Logo } from "../../login/styles/loginScreen.styles";
import LogoImg from "../../../assets/logo.png";
import { ContainerHeader, Container } from "../../home/styles/homeStyle";
import { HomeLink } from "../styles/errorPage.styles";

function ErrorPage() {
  return (
    <>
      <Body>
        <Container>
          <ContainerHeader>
            <Logo src={LogoImg} />
            <h2 style={{ color: "white", fontSize: "1.4rem" }}>
              Error 404: Page Not Found!
            </h2>
            <HomeLink>
              <a href="/" style={{ textDecoration: "none", color: "white" }}>
                Home Page
              </a>
            </HomeLink>
          </ContainerHeader>
        </Container>
      </Body>
    </>
  );
}

export default ErrorPage;
