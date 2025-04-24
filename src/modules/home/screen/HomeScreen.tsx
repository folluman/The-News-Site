import { Body, Conteiner, MenuHamburgerConteiner, MenuHamburger } from "../styles/homeStyle";
import { Logo } from "../../login/styles/loginScreen.styles";
import LogoImg from "../../../assets/logo.png";
import InputSearch from "../../../shared/inputs/inputSearch";
import MenuProfile from "../../../shared/menu/menu";
import HamburgerIcon from '../../../assets/menuCategory.svg'

function HomeScreen() {
  return (
    <>
      <Body>
        <Conteiner>
          <MenuProfile />
          <Logo src={LogoImg} />
          <InputSearch />
          <MenuHamburgerConteiner>
            <MenuHamburger src={HamburgerIcon}/> 
            Categories
          </MenuHamburgerConteiner>
        </Conteiner>
      </Body>
    </>
  );
}

export default HomeScreen;
