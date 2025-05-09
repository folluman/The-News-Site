import styled, { withTheme } from "styled-components";

const colorDate = "#C8C3C3";
const colorTitle = 'white'

export const LinkNews = styled.a`
  text-decoration: none;
`;

export const NewsContainer = styled.div`
  height: 320px;
  width: 310px;
  border: 2px white solid;
  border-radius: 10px;
  margin: auto;
  margin-top: 80px;
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 200px;
`;

export const DateNews = styled.div`
  color: ${colorDate};
`;

export const TitleNews = styled.div`
    color: ${colorTitle};
    max-width: 100%;
`;
