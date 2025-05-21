import styled from "styled-components";

import { colorBackground } from "../../login/styles/loginScreen.styles";

export const Body = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
  font-family: "Inter", sans-serif;
  background-color: ${colorBackground};
  width: 100%;
  min-height: 100vh;
  padding-bottom: 40px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 360px;
  margin: auto;
  @media (min-width: 720px) {
    max-width: 720px;
  }

  @media (min-width: 1080px) {
    max-width: 1080px;
  }
`;

export const ContainerHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 40px;

  @media (min-width: 720px) {
    flex-direction: row;
    gap: 0px;
  }

  @media (min-width: 1080px) {
    max-width: 1080px;
  }
`;

export const MenuHamburgerContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 170px;
  left: 10px;

  @media (min-width: 720px) {
    left: 520px;
    top: 10px;
  }

  @media (min-width: 1080px) {
    left: 620px;
  }
`;

export const MenuHamburger = styled.img``;
