import React, { useState, useEffect } from "react";
import Divider from "../../../components/shared/Divider";
// import RecordButton from "../../../components/Play/RecordButton";
import RecordButton from "../../../components/shared/RecordButton";
import PauseButton from "../../../components/shared/PauseButton";
import PlayButton from "../../../components/shared/PlayButton";
import avatar1 from "../../../static/imgs/avatar1.png";
import styled from "styled-components";
import { ButtonLarge, ButtonMedium } from "../../../components/shared/Button";
import MicRecorder from "mic-recorder-to-mp3";
import explore from "../../../fixtures/explore.json";

import {
  PostStyles,
  Content,
  Pair,
  ProfilePhoto,
  TextField,
  Title,
  InputStyles,
} from "./style";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const CreatePostStyles = styled.div`
  grid-column: 3/10;
  grid-row: 1/2;

  h5 {
    font-weight: bold;
    color: var(--secondary);
  }
`;

// Converts to seconds
function convert(value) {
  if (value % 60 < 10) {
    return Math.floor(value / 60) + ":" + "0" + (value % 60);
  }
  return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : "00");
}

function CreatePost({ post = {} }) {
  const [clicked, setClicked] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
    }
  }, [timer, clicked]);

  // Fk me my brain is so fried
  const [audioURL, setAudioURL] = useState("");

  const createAudioUrl = (blobURL) => {
    setAudioURL(blobURL);
  };

  const [recordState, setRecordState] = useState({
    isRecording: false,
    blobURL: "",
    isBlocked: false,
  });

  const startRecording = () => {
    if (recordState.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          setRecordState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };

  const stopRecording = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        console.log(blob);
        console.log(buffer);
        const blobURL = URL.createObjectURL(blob);
        setAudioURL(blobURL);
        setRecordState({ blobURL, isRecording: false });
        console.log(blobURL);
      })
      .catch((e) => console.log(e));
  };

  const handleRecordClicked = () => {
    if (!recordState.isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
    setClicked(!clicked);
  };

  const handleButtonPost = () => {
    explore.push({
      name: "Raghav Ramanathan",
      message:
        "A duck walked up to a lemonade stand, and he said to the man...",
      audio_url: 0,
      profile_url: 0,
      likes: 11,
      comments: "1",
      time_since_posted: "10 minutes ago",
    });
  };

  return (
    <CreatePostStyles>
      <PostStyles>
        <Title>
          <ProfilePhoto src={avatar1}></ProfilePhoto>
          <h5>You</h5>
          <Pair className="play">
            <p className="play">Press here to record -{">"}</p>
            <button
              onClick={() => {
                handleRecordClicked();
              }}
            >
              {!clicked ? (
                <RecordButton setAudioURL={createAudioUrl}></RecordButton>
              ) : (
                <PauseButton></PauseButton>
              )}
            </button>
          </Pair>
        </Title>
        <Title>
          <audio src={audioURL} controls></audio>
          <Pair className="seconds">
            {/* <PlayButton></PlayButton> */}

            <p>{convert(timer)}</p>
          </Pair>
        </Title>
        <Content>{post.message}</Content>
        <Divider></Divider>
        <Title>
          <Pair className="second">
            <input type="checkbox" />
            <p>Post anonymously</p>
          </Pair>
          <Pair className="play">
            <ButtonMedium className="Button">Cancel</ButtonMedium>
            <ButtonMedium className="Buttonpost" onClick={handleButtonPost}>
              Post
            </ButtonMedium>
          </Pair>
        </Title>
        <TextField>
          <InputStyles className="sep" name="fName" />
          <p> Add a description</p>
        </TextField>
      </PostStyles>
    </CreatePostStyles>
  );
}

export default CreatePost;
