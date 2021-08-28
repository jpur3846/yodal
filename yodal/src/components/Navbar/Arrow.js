import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../static/imgs/Arrow.png";

const LogoStyles = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Arrow = () => (
  <LogoStyles>
    <img src={arrow} alt="arrow" height="7px" width="auto" />
  </LogoStyles>
);

export default Arrow;
