import styled from "styled-components";
import React from "react";
import Post from "../components/Posts/Post";

const HomeStyles = styled.section``;

function Home() {
  return (
    <HomeStyles>
      <Post></Post>
    </HomeStyles>
  );
}

export default Home;
