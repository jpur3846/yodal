import React from "react";
import styled from "styled-components";

const CardComponentStyles = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(43, 71, 139, 0.15),
    0px 7px 15px 3px rgba(19, 65, 105, 0.04);
  border-radius: 10px;

  padding: 15px;
  width: 240px;

  subheading {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 125%;
    color: #134169;
  }

  caption {
    padding-right: 8px;
  }

  .quote {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 12px;
  }
`;

function CardComponent(props) {
  return (
    <CardComponentStyles>
      <div className="quote">
        <caption>{props.type}</caption>
        <hr style={{ color: "#D9E0E7", height: "1", width: "92px" }}></hr>
      </div>
      <subheading>{props.content}</subheading>
    </CardComponentStyles>
  );
}

export default CardComponent;
