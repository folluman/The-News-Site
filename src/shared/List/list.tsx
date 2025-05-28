import { use, useEffect, useState } from "react";
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
        const response = await axios.get("https://the-news-api-jpvv.onrender.com/users/list");
        setUsers(response.data);
      } catch {
        setError("Users list not found!");
      }
    };
    fetchData();
  }, []);

  const [search, setSearch] = useState("");

  const filterUser = users.filter(user => 
    user.username.toLowerCase().includes(search.toLocaleLowerCase()) ||
    user._id.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <>
      <SearchUser
        placeholder="Search User"
        icon={searchIcon}
        style={{ marginTop: "40px" }}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && <ErrorText>{error}</ErrorText>}
      <ListContainer>
        {filterUser.map((item) => (
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
