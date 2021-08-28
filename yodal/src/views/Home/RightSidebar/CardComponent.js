import React from "react";
import styled from "styled-components";
import RightArrowBlue from "./RightArrowBlue";
import LeftArrowBlue from "./LeftArrowBlue";

const CardComponentStyles = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(43, 71, 139, 0.15),
    0px 7px 15px 3px rgba(19, 65, 105, 0.04);
  border-radius: 10px;

  padding: 15px;

  subheading {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #134169;
  }

  caption {
    padding-right: 8px;
  }

  .quote {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 14px;
  }
  .arrows {
    padding-top: 15px;
    display: flex;
    flex-direction: row;
  }
`;

function CardComponent(props) {
  return (
    <CardComponentStyles>
      <div className="quote">
        <caption>{props.type}</caption>
        <hr style={{ color: "#D9E0E7", height: "1", width: "154px" }}></hr>
      </div>
      <subheading>{props.content}</subheading>
      <div className="arrows">
        <LeftArrowBlue></LeftArrowBlue>
        <RightArrowBlue></RightArrowBlue>
      </div>
    </CardComponentStyles>
  );
}

export default CardComponent;
