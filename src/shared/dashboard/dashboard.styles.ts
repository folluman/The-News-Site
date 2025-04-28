import styled from "styled-components";

const backgroundColorDashboard = '#262625'

export const DashBoardContainer = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 25% auto 0 auto;
`;

export const DashBoardStyled = styled.div`
  border: 1px solid black;
  height: 250px;
  background-color: ${backgroundColorDashboard};
  border-radius: 10px;
  border-style: none;
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.1);
`;

export const TitleDashContainer = styled.div`
  color: #D3D3D3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1.2rem;
  padding: 20px 70px 20px 0;
  font-weight: bold;
`

export const IconDashBoard = styled.img``

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
  }
`
