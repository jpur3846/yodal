import React from "react";
import Layout from "../../components/shared/Layout";
import LeftSidebar from "./LeftSidebar";
import Player from "./Player";
import Posts from "./Posts";
import RightSidebar from "./RightSidebar";

function Home() {
  return (
    <Layout>
      <LeftSidebar></LeftSidebar>
      <Posts></Posts>
      <RightSidebar></RightSidebar>
      <Player></Player>
    </Layout>
  );
}

export default Home;