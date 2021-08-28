import React from "react";
import styled from "styled-components";

const TitleLabelStyle = styled.label`
  /* Auto Layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 7px 10px;

  width: 240.05px;
  height: 32px;
  left: calc(50% - 240.05px / 2);
  top: 0px;

  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 150%;

  color: #ffffff;
  background: #134169;
  border-radius: 10px;
`;

function TitleLabel(props) {
  return <TitleLabelStyle>3-2-1 of the Week</TitleLabelStyle>;
}

export default TitleLabel;
