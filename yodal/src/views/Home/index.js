import React from "react";
import Layout from "../../components/shared/Layout";
import LeftSidebar from "./LeftSidebar";
import Player from "./Player";
import Posts from "./Posts";
import Threads from "./Threads";
import RightSidebar from "./RightSidebar";
import CreatePost from "./CreatePost";
import RecordButton from "../../components/Play/RecordButton";
import { SectionProvider } from "../../context/SectionContext";

function Home() {
  return (
    <SectionProvider>
      <Layout>
        <LeftSidebar></LeftSidebar>
        {/* <CreatePost></CreatePost> */}
        {/* <Threads></Threads> */}
        {/* <RecordButton></RecordButton> */}
        <Posts></Posts>
        <RightSidebar></RightSidebar>
      </Layout>
      <Player></Player>
    </SectionProvider>
  );
}

export default Home;
