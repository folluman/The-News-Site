import styled from "styled-components";

const backgroundColorDashboard = "#262625";

export const DashBoardContainer = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 25% auto 0px auto;
  @media (min-width: 720px) {
    max-width: 720px;
    margin: 10% auto 0 auto;
  }
  @media (min-width: 1080px) {
    max-width: 1080px;
    display: grid;
    grid-template-columns: 400px 1fr;
    align-items: flex-start;
  }
`;

export const DashBoardStyled = styled.div`
  border: 1px solid black;
  height: auto;
  background-color: ${backgroundColorDashboard};
  border-radius: 10px;
  border-style: none;
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 40px;
  @media (min-width: 720px) {
    max-width: 720px;
  }

  @media (min-width: 1080px) {
    height: 320px;
    width: 280px;
    margin-bottom: 0px;
  }
`;

export const TitleDashContainer = styled.div`
  color: #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1.2rem;
  padding: 0px 70px 20px 0;
  font-weight: bold;
  @media (min-width: 720px) {
    justify-content: flex-start;
  }
`;

export const IconDashBoard = styled.img``;

export const PanelControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin: auto;
  gap: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
  a {
    text-decoration: none;
    color: #868686;
    cursor: pointer;
  }

  @media (min-width: 720px) {
    margin: 0;
  }
`;
