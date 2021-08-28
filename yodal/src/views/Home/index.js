import React from "react";
import Layout from "../../components/shared/Layout";
import LeftSidebar from "./LeftSidebar";
import Player from "./Player";
import Posts from "./Posts";
import RightSidebar from "./RightSidebar";
import CreatePost from "./CreatePost";

function Home() {
  return (
    <>
      <Layout>
        <LeftSidebar></LeftSidebar>
        {/* <CreatePost></CreatePost> */}
        <Posts></Posts>
        <RightSidebar></RightSidebar>
      </Layout>
      <Player></Player>
    </>
  );
}

export default Home;
