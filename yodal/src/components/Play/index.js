import React, { useState } from "react";
import styled from "styled-components";
import RecordButton from "./RecordButton";

const PlayerStyles = styled.div``;

const Play = () => {
  const [audioURL, setAudioURL] = useState("");

  const createAudioUrl = blobURL => {
    setAudioURL(blobURL);
  };

  return (
    <PlayerStyles>
      <RecordButton setAudioURL={createAudioUrl}></RecordButton>
      <audio src={audioURL} controls="controls" />
    </PlayerStyles>
  );
};

export default Play;
