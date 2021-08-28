import React from "react";
import styled from "styled-components";
import { Title, ProfilePhoto, Content, Controls } from "./style";
import PlayButton from "../../../components/shared/PlayButton";
import RecordButton from "../../../components/Play/RecordButton";
import profilepic from "../../../static/imgs/profile_photo.png";
import Divider from "../../../components/shared/Divider";
import { ButtonLarge, ButtonMedium } from "../../../components/shared/Button";

const CreatePostStyles = styled.div`
  grid-column: 3/13;

  flex-direction: column;
  padding: 1.5rem;

  box-shadow: var(--cardShadow);
  border-radius: var(--normalRadius);

  height: 50rem;

  background: #ffffff;
`;

function CreatePost() {
  const [recording, setRecording] = React.useState(false);

  const toggleRecording = () => setRecording(!recording);

  return (
    <CreatePostStyles>
      <RecordButton></RecordButton>
      <Title>
        <ProfilePhoto src={profilepic}></ProfilePhoto>
        <h4>Wilson Hou</h4>
        <h5>Press here to record -{">"}</h5>
        <button
          className="play"
          onClick={() => {
            toggleRecording();
            console.log(recording);
          }}
        >
          <PlayButton></PlayButton>
        </button>
      </Title>
      <Divider></Divider>
      <Content>
        <h5>Preview your voice message</h5>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo
          libero, lacinia ut aliquam eget, suscipit ut ligula. Mauris ac odio et
          lorem ultrices facilisis. Nullam et dui nunc..."
        </p>
      </Content>
      <Controls>
        <input type="checkbox"></input>
        <p>Post Anonymously</p>
        <ButtonLarge color="var(--secondary)" backgroundColor="#ffffff">
          Cancel
        </ButtonLarge>
        <ButtonLarge>Post</ButtonLarge>
      </Controls>
    </CreatePostStyles>
  );
}

export default CreatePost;
