import {
  Body,
  Conteiner,
  ConteinerHeader,
  MenuHamburgerContainer,
  MenuHamburger,
} from "../styles/homeStyle";
import { Logo } from "../../login/styles/loginScreen.styles";
import LogoImg from "../../../assets/logo.png";
import InputSearch from "../../../shared/inputs/inputSearch";
import MenuProfile from "../../../shared/menu/menu";
import HamburgerIcon from "../../../assets/menuCategory.svg";
import DashBoard from "../../../shared/dashboard/dashboard";

function HomeScreen() {
  return (
    <>
      <Body>
        <Conteiner>
          <ConteinerHeader>
            <MenuProfile />
            <Logo src={LogoImg} />
            <InputSearch />
            <MenuHamburgerContainer>
              <MenuHamburger src={HamburgerIcon} />
              Categories
            </MenuHamburgerContainer>
          </ConteinerHeader>
          <DashBoard></DashBoard>
        </Conteiner>
      </Body>
    </>
  );
}

export default HomeScreen;
