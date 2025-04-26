import { ProfileContainer, ProfileIcon } from "./menu.style";
import IconProfile from "../../assets/profileIcon.svg";

function MenuProfile() {
  return (
    <>
      <ProfileContainer>
        <ProfileIcon src={IconProfile} />
        Admin
      </ProfileContainer>
    </>
  );
}

export default MenuProfile;
