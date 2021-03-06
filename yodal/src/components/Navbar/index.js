import styled from "styled-components";
import { ButtonMedium } from "../shared/Button";
import Logo from "./Logo";
import Profile_Photo from "./Profile";
import Arrow from "./Arrow";
import { useAuth } from "../../context/AuthContext";

const NavBarStyles = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  min-height: 8rem;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background: white;

  box-shadow: var(--botShadow);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--maxWidth);
  }

  .buttons {
    a,
    button {
      margin-left: 4.2rem;
    }
  }

  .profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;

    p {
      color: #68869f;
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
    }

    p:hover {
      color: var(--secondary);
    }
  }
`;

const NavBar = () => {
  const { currentUser } = useAuth();
  return !currentUser ? (
    <NavBarStyles>
      <div className="container">
        <Logo></Logo>
        <div className="buttons">
          <a href="/home">Login</a>
          <ButtonMedium>Sign up</ButtonMedium>
        </div>
      </div>
    </NavBarStyles>
  ) : (
    <NavBarStyles>
      <div className="container">
        <Logo></Logo>
        <div className="profile">
          <Profile_Photo></Profile_Photo>
          <a href="/home">
            <p>Raghav Ramanathan</p>
          </a>
          <Arrow></Arrow>
        </div>
      </div>
    </NavBarStyles>
  );
};

export default NavBar;
