import styled from "styled-components";
import logo from "../../static/imgs/logo.png";

const LogoStyles = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = () => (
  <LogoStyles>
    <img src={logo} alt="Yodal Logo" height="40px" width="auto" />
  </LogoStyles>
);

export default Logo;
