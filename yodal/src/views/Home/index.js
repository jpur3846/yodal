import React from "react";
import Layout from "../../components/shared/Layout";
import LeftSidebar from "./LeftSidebar";
import Player from "./Player";
import Posts from "./Posts";
import Threads from "./Threads";
import RightSidebar from "./RightSidebar";

function Home() {
  return (
    <>
      <Layout>
        <LeftSidebar></LeftSidebar>
        <Posts></Posts>
        <RightSidebar></RightSidebar>
      </Layout>
      <Player></Player>
    </>
  );
}

export default Home;
