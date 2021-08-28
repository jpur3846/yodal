import React, { useState, useEffect } from "react";
import Divider from "../../../components/shared/Divider";
import RecordButton from "../../../components/shared/RecordButton";
import PauseButton from "../../../components/shared/PauseButton";
import PlayButton from "../../../components/shared/PlayButton";
import avatar1 from "../../../static/imgs/avatar1.png";
import styled from "styled-components";
import { ButtonLarge, ButtonMedium } from "../../../components/shared/Button";
import {
  PostStyles,
  Content,
  Pair,
  ProfilePhoto,
  Socials,
  Title,
} from "./style";

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
  if ((value % 60 < 10)) {
    return Math.floor(value / 60) + ":" + "0" + value % 60
  }
  return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : '00')
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

  return (
    <CreatePostStyles>
      <PostStyles>
        <Title>
          <ProfilePhoto src={avatar1}></ProfilePhoto>
          <h5>You</h5>
          <Pair className="play">
            <p className="play">Press here to record -></p>
            <button onClick={() => {setClicked(!clicked)}} >
              { !clicked ? 
              <RecordButton></RecordButton>
              :
              <PauseButton></PauseButton>
              }
            </button>
          </Pair>
        </Title>
        <Title>
          <Pair className="seconds">
            <PlayButton></PlayButton>
            <p>{ convert(timer) }</p>
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
            <ButtonMedium className="Buttonpost">Post</ButtonMedium>
          </Pair>
        </Title>
      </PostStyles>
    </CreatePostStyles>
  );
}

export default CreatePost;
