import { Body, Logo } from "../../login/styles/loginScreen.styles";
import LogoImg from "../../../assets/logo.png";
import { ContainerHeader, Container } from "../../home/styles/homeStyle";
import { HomeLink } from "../styles/errorPage.styles";

function ErrorPage() {
  return (
    <>
      <Body>
        <Container>
          <ContainerHeader style={{display: 'flow', textAlign: 'center', marginTop: '60px' }}>
            <Logo src={LogoImg} />
            <h2 style={{ color: "white", fontSize: "1.4rem", margin: '50px' }}>
              Error 404: Page Not Found!
            </h2>
            <HomeLink style={{ maxWidth: '120px', margin: 'auto', marginTop: '40px'}}>
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
