import React from "react";
import styled from "styled-components";

const PostMemoButton = styled.button`
  position: static;
  width: 240.05px;
  height: 32px;
  left: 0px;
  top: 238px;

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 20px 0px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 7px 10px;

  width: 240.05px;
  height: 32px;
  left: calc(50% - 240.05px / 2);
  top: 238px;

  border-radius: 10px;
  color: #ffffff;
  background: #134169;
`;

export default PostMemoButton;
