import React from "react";
import styled from "styled-components";
import CardComponent from "./CardComponent";
import PostMemoButton from "./PostMemoButton";
import TitleLabel from "./TitleLabel";

const RightSidebarStyles = styled.div`
  grid-column: 10/13;
`;

function RightSidebar() {
  return (
    <RightSidebarStyles>
      <TitleLabel></TitleLabel>
      <CardComponent
        type={"Quote of the week"}
        content={
          "I found networking was the best way to landing my first internship. It makes it easier to stick out of the crowd because you’re taking the intiaitve to be different."
        }
      ></CardComponent>
      <PostMemoButton>Post a Memo</PostMemoButton>
    </RightSidebarStyles>
  );
}

export default RightSidebar;
