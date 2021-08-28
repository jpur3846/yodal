import React from "react";
import styled from "styled-components";
import CardComponent from "./CardComponent";
import PostMemoButton from "./PostMemoButton";

const RightSidebarStyles = styled.div`
  grid-column: 10/13;
`;

function RightSidebar() {
  return (
    <RightSidebarStyles>
      <CardComponent
        type={"Quote"}
        content={"You miss 100% of the shots you don't take..."}
      ></CardComponent>
      <PostMemoButton>Post a Memo</PostMemoButton>
    </RightSidebarStyles>
  );
}

export default RightSidebar;
