import React from "react";
import styled from "styled-components";
import Play from "../../../components/Play";
import Post from "./Post";

const PostsStyles = styled.div`
  grid-column: 3/10;
  /* background: white; */
  /* box-shadow: var(--cardShadow); */
`;

function Posts() {
  return (
    <PostsStyles>
      <Play></Play>
      <Post>hi wassup</Post>
      <Post>hi wassup</Post>
      <Post>hi wassup</Post>
      <Post>hi wassup</Post>
    </PostsStyles>
  );
}

export default Posts;
