import { useEffect, useState } from "react";
import { ListStyle } from "./list.styles";
import axios from "axios";

function ListUser() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/list");
        setUsers(response.data);
      } catch {
        setError('Users list not found!')
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div style={{ paddingBottom: "50px", fontSize: "2rem" }}>
        List Users
        <ListStyle>
        {error && <p>{error}</p>}
          {users.map((item) => (
            <li key={users._id}>{item.username}</li>
          ))}
        </ListStyle>
      </div>
    </>
  );
}

export default ListUser;
