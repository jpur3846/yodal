import { Link } from "react-router-dom";
import styled from "styled-components";
import profile_photo from "../../static/imgs/profile_photo.png";

const LogoStyles = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Profile_photo = () => (
  <LogoStyles>
    <img src={profile_photo} alt="Profile photo" height="35px" width="auto" />
  </LogoStyles>
);

export default Profile_photo;
