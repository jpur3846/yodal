import React from "react";
import styled from "styled-components";

const CardComponentStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 20px 15px 15px;

  position: static;
  width: 240px;
  height: 177px;
  left: calc(50% - 240px / 2);
  top: 42px;

  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(43, 71, 139, 0.15),
    0px 7px 15px 3px rgba(19, 65, 105, 0.04);
  border-radius: 10px;

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
`;

const Quote = styled.p`
  position: relative;
  width: 106px;
  height: 16px;
  left: 0px;
  top: 0px;

  /* Body Text */
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 135%;
  /* or 16px */

  color: #000000;
`;

const Content = styled.p`
  position: static;
  width: 205.05px;
  height: 161px;
  left: 15px;
  top: 42px;

  /* Subheading */
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 125%;
  /* or 22px */

  color: #134169;

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

function CardComponent(props) {
  return (
    <CardComponentStyles>
      <Quote>{props.type}</Quote>
      <Content>{props.content}</Content>
    </CardComponentStyles>
  );
}

export default CardComponent;
