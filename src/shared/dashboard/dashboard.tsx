import {
  DashBoardContainer,
  DashBoardStyled,
  IconDashBoard,
  TitleDashContainer,
  PanelControlContainer
} from "./dashboard.styles";
import iconDashboard from "../../assets/iconDash.svg";

function DashBoard() {
  return (
    <>
      <DashBoardContainer>
        <DashBoardStyled>
          <TitleDashContainer>
            <IconDashBoard src={iconDashboard} />
            Control Panel
          </TitleDashContainer>
          <PanelControlContainer>
            <a href="">Create new Author +</a>
            <a href="">List User</a>
            <a href="">Edit News</a>
          </PanelControlContainer>
        </DashBoardStyled>
      </DashBoardContainer>
    </>
  );
}

export default DashBoard;
