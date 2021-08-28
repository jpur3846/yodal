import React from "react";
import styled from "styled-components";
import Play from "../../../components/Play";
import Post from "./Post";
import { db } from '../../../firebase'; 


const PostsStyles = styled.div`
  grid-column: 3/10;
  /* background: white; */
  /* box-shadow: var(--cardShadow); */
`;

function Posts() {
  return (
    <PostsStyles>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </PostsStyles>
  );
}

export default Posts;
