import React from "react";
import useSound from "use-sound";
import RecordButton from "../../../components/Play/RecordButton";
// import testAudio from "../../../static/audio/test.mp3";

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

function Post({ post }) {
  const soundURL = "../../../static/audio/test.mp3";
  const [play] = useSound(soundURL, { volume: 0.5 });
  return (
    <PostStyles>
      <Title>
        <ProfilePhoto src={avatar}></ProfilePhoto>
        <RecordButton setAudioURL={() => {}}></RecordButton>
        <h4>{post.name}</h4>
        <h5>posted a memo • {post.time_since_posted}</h5>
        <button onClick={play} className="play">
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
