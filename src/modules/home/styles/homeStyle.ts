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

export const MenuHamburgerContainerUser = styled.div`
  color: white;
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 60px;
  left: 10px;
  @media (min-width: 720px) {
    left: 520px;
    top: 0;
  }
  @media (min-width: 1080px) {
    left: 800px
  }
`;

export const ContainerUser = styled.div`
  max-width: 360px;
  margin: auto;
  @media (min-width: 720px) {
    max-width: 720px;
  }

  @media (min-width: 1080px) {
    max-width: 1080px;
  }
`;

export const Header = styled.div`
  position: relative;
  padding-top: 20px;
  h2 {
    color: white;
  }
`;
export const SectionLogo = styled.div`
  text-align: center;
  position: relative;
  max-width: 360px;
  margin: auto;
  h2 {
    font-size: 1.2rem;
    text-align: center;

    @media (min-width: 720px) {
      font-size: 1.4rem;
    }
  }
`;

export const SectionNews = styled.div`
  margin-top: 80px;
  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 0px;
    gap: 40px
  }
   @media (min-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 80px;
  }
`;

export const SectionInput = styled.div`
  position: relative;
  @media (min-width: 1080px) {
    margin-top: 100px;
  }
`