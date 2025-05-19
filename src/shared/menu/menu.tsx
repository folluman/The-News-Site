import { ProfileContainer, ProfileIcon } from "./menu.style";
import IconProfile from "../../assets/profileIcon.svg";
import { useUsername } from "../../authentication/useUserRole";

function MenuProfile() {
  const username = useUsername();

  return (
    <>
      <ProfileContainer>
        <ProfileIcon src={IconProfile} />
        {username}
      </ProfileContainer>
    </>
  );
}

export default MenuProfile;
