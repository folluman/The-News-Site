import styled from "styled-components";

import { colorBackground } from "../../login/styles/loginScreen.styles";

export const Body = styled.div`
  background-color: ${colorBackground};
  width: 100%;
  min-height: 100vh
  
`;

export const Conteiner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 360px;
  margin: auto;
`;

export const MenuHamburgerConteiner = styled.div`
  color: white;
  display: flex;
  align-items: center;
  height: 100%;
`

export const MenuHamburger = styled.img`

`
