import React from "react";
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

function Post() {
  return (
    <PostStyles>
      <Title>
        <ProfilePhoto src={avatar}></ProfilePhoto>
        <h4>Wilson Hou</h4>
        <h5>posted a memo • 10 minutes ago</h5>
        <button className="play">
          <PlayButton></PlayButton>
        </button>
      </Title>
      <Content>Hi there! I found networking was pretty amazing.</Content>
      <Divider></Divider>
      <Socials>
        <Pair>
          <button>
            <Heart></Heart>
          </button>
          <p>134</p>
        </Pair>
        <Pair className="second">
          <button>
            <Message></Message>
          </button>
          <p>24</p>
        </Pair>
      </Socials>
    </PostStyles>
  );
}

export default Post;
