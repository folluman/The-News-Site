import { Container, ProfileIcon, Login } from "./menu.style";
import IconProfile from "../../assets/profileIcon.svg";
import { useUsername } from "../../authentication/useUserRole";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MenuProfile() {
  const username = useUsername();
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://news-api-sigma-six.vercel.app/users/logout",
        {},
        { withCredentials: true }
      );
      console.log(response.data);
      navigate("/");
      window.location.reload();
    } catch {
      console.log("Logout Error");
    }
  };

  if (username) {
    return (
      <>
        <Container>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ProfileIcon src={IconProfile} onClick={toggleMenu} />
            {username}
          </div>
          {menu && (
            <div
              style={{
                border: "2px solid black",
                padding: "10px",
                backgroundColor: "#262625",
                position: "absolute",
                right: "0",
                top: "60px",
                zIndex: "1000",
                borderRadius: "4px",
                minWidth: "120px",
              }}
            >
              <button
                onClick={handleLogout}
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: "5px 0",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                Logout
              </button>
            </div>
          )}
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Login>
          <a style={{ textDecoration: "none", color: "white" }} href="/login">
            Login
          </a>
        </Login>
      </Container>
    </>
  );
}

export default MenuProfile;
