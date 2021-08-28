import React from "react";
import styled from "styled-components";
import RightArrow from "./RightArrow";

const PostMemoStyles = styled.label`
  
  padding: 7px 10px;
  cursor: pointer;
  
  display: flex;
  flex-direction: row;
  align-items: flex-start:

  box-shadow: 0px 1px 2px rgba(43, 71, 139, 0.15),
    0px 7px 15px 3px rgba(19, 65, 105, 0.04);

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;

  color: #ffffff;
  background: #134169;
  border-radius: 5px;

  .content{
    width: 240px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .post {
    padding: 0px;
  }
`;

function PostMemoButton(props) {
  return (
    <PostMemoStyles>
      <div className="content">
        <PostMemoStyles className="post">{props.text}</PostMemoStyles>
        <RightArrow></RightArrow>
      </div>
    </PostMemoStyles>
  );
}

export default PostMemoButton;
