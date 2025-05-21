import { useEffect, useState } from "react";
import {
  ListStyle,
  SearchUser,
  UserStyle,
  TrashImg,
  ListContainer,
} from "./list.styles";
import axios from "axios";
import searchIcon from "../../assets/Search.png";
import iconProfile from "../../assets/profileIcon.svg";
import trashIcon from "../../assets/trash.svg";
import { ErrorText } from "../inputs/input.styles";

interface User {
  _id: string;
  username: string;
  role: string;
}

function ListUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/list");
        setUsers(response.data);
      } catch {
        setError("Users list not found!");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <SearchUser
        placeholder="Search User"
        icon={searchIcon}
        style={{ marginTop: "40px" }}
      />

      {error && <ErrorText>{error}</ErrorText>}
      <ListContainer>
        {users.map((item) => (
          <ListStyle>
            <UserStyle>
              <img
                src={iconProfile}
                alt=""
                style={{ margin: "0px 0 0 10px" }}
              />
              <div style={{ color: "white" }}>
                <ul>
                  <li>ID: {item._id}</li>
                  <li>USERNAME: {item.username}</li>
                  <li>ROLE: {item.role}</li>
                </ul>
              </div>
              <TrashImg>
                <img src={trashIcon} alt="" />
              </TrashImg>
            </UserStyle>
          </ListStyle>
        ))}
      </ListContainer>
    </>
  );
}

export default ListUser;
