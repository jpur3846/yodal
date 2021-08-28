import React from "react";
import useSound from "use-sound";
import testAudio from "../../../static/audio/test.mp3";

import Divider from "../../../components/shared/Divider";
import Heart from "../../../components/shared/Heart";
import Message from "../../../components/shared/Message";
import PlayButton from "../../../components/shared/PlayButton";
import avatar from "../../../static/imgs/userAvatar.png";

import {
  PostStyles,
  Content,
  Pair,
  ProfilePhoto,
  Socials,
  Title,
} from "./style";
import { useCurrentAudio, usePlaying } from "../../../context/AudioContext";

function Post({ post }) {
  const [play] = useSound(testAudio, { volume: 0.5 });
  const { setCurrentAudioURL } = useCurrentAudio();
  const { setIsPlaying } = usePlaying();
  return (
    <PostStyles>
      <Title>
        <ProfilePhoto src={avatar}></ProfilePhoto>
        <h4>{post.name}</h4>
        <h5>posted a memo • {post.time_since_posted}</h5>
        <button
          onClick={() => {
            setCurrentAudioURL("../../../context/AudioContext.js");
          }}
          className="play"
        >
          <PlayButton></PlayButton>
        </button>
      </Title>
      <Content>{post.message}</Content>
      <Divider></Divider>
      <Socials>
        <Pair>
          <button>
            <Heart></Heart>
          </button>
          <p>{post.likes}</p>
        </Pair>
        <Pair className="second">
          <button>
            <Message></Message>
          </button>
          <p>{post.comments}</p>
        </Pair>
      </Socials>
    </PostStyles>
  );
}

export default Post;
