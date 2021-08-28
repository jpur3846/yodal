import React from "react";
import styled from "styled-components";
import Divider from "../../../components/shared/Divider";
import Heart from "../../../components/shared/Heart";
import Message from "../../../components/shared/Message";
import PlayButton from "../../../components/shared/PlayButton";
import avatar from "../../../static/imgs/userAvatar.png";

import { Content, Pair, ProfilePhoto, Socials, Title } from "./style";

const PostStyles = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  box-shadow: var(--cardShadow);
  border-radius: var(--normalRadius);

  .second {
    margin-left: 1rem;
  }
`;

function Post() {
  return (
    <PostStyles>
      <Title>
        <ProfilePhoto src={avatar}></ProfilePhoto>
        <h4>Wilson Hou</h4>
        <h5>posted a memo • 10 minutes ago</h5>
        <PlayButton className="play"></PlayButton>
      </Title>
      <Content>Hi there! I found networking was pretty amazing.</Content>
      <Divider></Divider>
      <Socials>
        <Pair>
          <Heart></Heart>
          <p>134</p>
        </Pair>
        <Pair className="second">
          <Message></Message>
          <p>24</p>
        </Pair>
      </Socials>
    </PostStyles>
  );
}

export default Post;
