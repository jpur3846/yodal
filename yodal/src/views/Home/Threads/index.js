import React from "react";
import styled from "styled-components";
import Thread from "./Thread";

const ThreadsStyle = styled.div`
  grid-column: 3/10;
  /* background: white; */
  /* box-shadow: var(--cardShadow); */
`;

function Threads() {
  return (
    <ThreadsStyle>
      <Thread>hi wassup</Thread>
    </ThreadsStyle>
  );
}

export default Threads;
