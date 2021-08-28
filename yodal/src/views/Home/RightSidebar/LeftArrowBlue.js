import arrow from "../../../static/imgs/Left_Arrow_Blue.png";
import styled from "styled-components";

const LeftArrowStyles = styled.div`
  padding-right: 10px;
`;

const LeftArrowBlue = () => (
  <LeftArrowStyles>
    <img src={arrow} alt="left_arrow" height="13px" width="7px" />
  </LeftArrowStyles>
);

export default LeftArrowBlue;
