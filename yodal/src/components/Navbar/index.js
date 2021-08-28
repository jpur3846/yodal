import styled from "styled-components";
import MainButton from "../buttons";
import Logo from "./Logo";

const NavBarStyles = styled.nav`
  min-height: 8rem;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

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
`;

const NavBar = ({ signedIn }) => {
  return (
    <NavBarStyles>
      <div className="container">
        <Logo></Logo>
        <div className="buttons">
          <a href="/">Login</a>
          <MainButton>Sign up</MainButton>
        </div>
      </div>
    </NavBarStyles>
  );
};

export default NavBar;
