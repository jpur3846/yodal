import React, { useState } from "react";
import RecordButton from "./RecordButton/RecordButton";

const Post = () => {
  const [audioURL, setAudioURL] = useState("");

  const createAudioUrl = (blobURL) => {
    setAudioURL(blobURL);
  };

  return (
    <>
      <RecordButton setAudioURL={createAudioUrl}></RecordButton>
      <audio src={audioURL} controls="controls" />
    </>
  );
};

export default Post;
