import {
  DashBoardContainer,
  DashBoardStyled,
  IconDashBoard,
  TitleDashContainer,
  PanelControlContainer,
} from "./dashboard.styles";
import iconDashboard from "../../assets/iconDash.svg";
import { useState } from "react";
import CreateAdminOrAuthor from "../inputs/inputAdminOrAuthor";
import ListUser from "../List/list";
import CreateNews from "../createNews/createNews";
import ListNews from "../listNews/listNews";
import CreateCategory from "../createCategory/createCategory";
import { useUserRole } from "../../authentication/useUserRole";

function DashBoard() {
  const [viewHome, setHome] = useState("listNews");
  const userRole = useUserRole();

  if (userRole != 'admin') {
    return (
      <>
        <ListNews />
      </>
    )
  }

  return (
    <>
      <DashBoardContainer>
        <DashBoardStyled>
          <TitleDashContainer>
            <IconDashBoard src={iconDashboard} />
            Control Panel
          </TitleDashContainer>
          <PanelControlContainer>
            <a onClick={() => setHome("createAuthor")}>New Admin or Author</a>
            <a onClick={() => setHome("listUser")}>List User</a>
            <a onClick={() => setHome("createNews")}>Create News</a>
            <a onClick={() => setHome("listNews")}>List News</a>
            <a onClick={() => setHome("createCategory")}>Create Category</a>
          </PanelControlContainer>
        </DashBoardStyled>
        <div style={{ color: "white" }}>
          {viewHome === "listNews" ? (
            <ListNews />
          ) : viewHome === "createAuthor" ? (
            <CreateAdminOrAuthor />
          ) : viewHome == "listUser" ? (
            <ListUser />
          ) : viewHome == "createNews" ? (
            <CreateNews />
          ) : (
            <CreateCategory />
          )}
        </div>
      </DashBoardContainer>
    </>
  );
}

export default DashBoard;
