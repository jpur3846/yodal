import React from "react";
import Layout from "../../../components/shared/Layout";
import LeftSidebar from "../LeftSidebar";
import Player from "../Player";
import Posts from "../Posts";
import RightSidebar from "../RightSidebar";
import Thread from "./Thread";
import CreatePost from "../CreatePost";
import { SectionProvider } from "../../../context/SectionContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ThreadsStyle = styled.div`
  grid-column: 3/10;
  /* background: white; */
  /* box-shadow: var(--cardShadow); */
`;

function Threads() {
  return (
    <SectionProvider>
      <Layout>
        <LeftSidebar></LeftSidebar>
        <ThreadsStyle>
          <Thread>hi wassup</Thread>
        </ThreadsStyle>
        <RightSidebar text="Post a Response"></RightSidebar>
      </Layout>
      <Player></Player>
    </SectionProvider>
  );
}

export default Threads;
