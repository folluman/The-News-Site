import { Container, ProfileIcon, Login } from "./menu.style";
import IconProfile from "../../assets/profileIcon.svg";
import { useUsername } from "../../authentication/useUserRole";

function MenuProfile() {
  const username = useUsername();

  if (username) {
    return (
      <>
        <Container>
          <ProfileIcon src={IconProfile} />
          {username}
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Login><a style={{textDecoration: 'none', color: 'white'}} href="/login">Login</a></Login>
      </Container>
    </>
  );
}

export default MenuProfile;
