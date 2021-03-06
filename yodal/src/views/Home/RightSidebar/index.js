import React, { useEffect } from "react";
import styled from "styled-components";
import CardComponent from "./CardComponent";
import PostMemoButton from "./PostMemoButton";
import TitleLabel from "./TitleLabel";

const RightSidebarStyles = styled.div`
  grid-column: 10/13;
  grid-row-start: 1;

  .titleLabel {
    padding-bottom: 20px;
  }

  .card {
    padding-bottom: 20px;
  }
`;

function RightSidebar(props) {
  return (
    <RightSidebarStyles>
      <div className="titleLabel">
        <TitleLabel text="3-2-1 of the Week"></TitleLabel>
      </div>
      <div className="card">
        <CardComponent
          type={"Quote"}
          content={
            '"I found networking was the best way to landing my first internship. It makes it easier to stick out of the crowd because you’re taking the intiaitve to be different."'
          }
        ></CardComponent>
      </div>
      <div className="memo" onClick={() => {props.setShowCreatePost(!props.showCreatePost)}}>
        <PostMemoButton text={props.text}></PostMemoButton>
      </div>
    </RightSidebarStyles>
  );
}

export default RightSidebar;
