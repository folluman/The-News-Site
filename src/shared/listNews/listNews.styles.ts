import styled from "styled-components";

const colorDate = "#C8C3C3";
const colorTitle = 'white'

export const LinkNews = styled.a`
  text-decoration: none;
`;

export const ContainerNews = styled.div`
@media (min-width: 720px) {
   display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
`

export const NewsContainer = styled.div`
  height: 320px;
  width: 310px;
  border: 2px white solid;
  border-radius: 10px;
  margin: auto;
  margin-top: 80px;
  @media (min-width: 1080px) {
    margin-top: 0;
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const DateNews = styled.div`
  color: ${colorDate};
`;

export const TitleNews = styled.div`
    color: ${colorTitle};
    max-width: 100%;
`;
