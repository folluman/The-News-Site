import {
  Body,
  Container,
  ContainerHeader,
  MenuHamburgerContainer,
  MenuHamburger,
  Header,
  ContainerUser,
  SectionLogo,
  SectionNews,
  MenuHamburgerContainerUser,
  SectionInput,
} from "../styles/homeStyle";
import { Logo } from "../../login/styles/loginScreen.styles";
import LogoImg from "../../../assets/logo.png";
import InputSearch from "../../../shared/inputs/inputSearch";
import MenuProfile from "../../../shared/menu/menu";
import HamburgerIcon from "../../../assets/menuCategory.svg";
import DashBoard from "../../../shared/dashboard/dashboard";
import { useUserRole } from "../../../authentication/useUserRole";
import ListNews from "../../../shared/listNews/listNews";

function HomeScreen() {
  const userRole = useUserRole();

  if (userRole === "admin" || userRole === "author") {
    return (
      <>
        <Body>
          <Container>
            {/* Container Header */}
            <ContainerHeader>
              <MenuProfile />
              <Logo src={LogoImg} />
              <InputSearch />
              <MenuHamburgerContainer>
                <MenuHamburger src={HamburgerIcon} />
                Categories
              </MenuHamburgerContainer>
            </ContainerHeader>
            <DashBoard></DashBoard>
            {/* Container Content */}
          </Container>
        </Body>
      </>
    );
  }

  return (
    <>
      <Body>
        <ContainerUser>
          <Header>
            <h2>ERROR 404</h2>
            <MenuProfile />
          </Header>
          <SectionLogo>
            <Logo src={LogoImg} style={{ margin: "40px 0 20px 0" }} />
            <h2 style={{margin: '0px 0 40px 0', color: 'white'}}>Atualize-se sem precisar de mil abas abertas.</h2>
          </SectionLogo>
          <SectionInput>
            <MenuHamburgerContainerUser>
              <MenuHamburger src={HamburgerIcon} />
              Categories
            </MenuHamburgerContainerUser>
            <InputSearch />
          </SectionInput>
          <SectionNews>
            <ListNews />
          </SectionNews>
        </ContainerUser>
      </Body>
    </>
  );
}

export default HomeScreen;
