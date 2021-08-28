import React, { useState } from "react";
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
  const [showCreatePost, setShowCreatePost] = useState(false);
  return (
    <SectionProvider>
      <Layout>
        <LeftSidebar></LeftSidebar>
        {showCreatePost ? <CreatePost></CreatePost> : null}
        {/* <Threads></Threads> */}
        {/* <RecordButton></RecordButton> */}
        {/* <Threads></Threads> */}
        <Posts></Posts>
        <RightSidebar text="Post a Memo" setShowCreatePost={setShowCreatePost} showCreatePost={showCreatePost}></RightSidebar>
      </Layout>
      <Player></Player>
    </SectionProvider>
  );
}

export default Home;
