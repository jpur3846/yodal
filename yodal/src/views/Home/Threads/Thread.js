import React from "react";
import Divider from "../../../components/shared/Divider";
import PlayButton from "../../../components/shared/PlayButton";
import avatar1 from "../../../static/imgs/avatar1.png";
import avatar2 from "../../../static/imgs/avatar2.png";
import avatar3 from "../../../static/imgs/avatar3.png";
import avatar4 from "../../../static/imgs/avatar4.png";
import LeftArrowBlue from "../../../static/imgs/Left_Arrow_Blue.png";
import bar_1 from "../../../static/imgs/1_00.png";
import bar_2 from "../../../static/imgs/1_24.png";
import bar_3 from "../../../static/imgs/0_00.png";
// import db from "../../../firebase";

import { PostStyles, Content, ProfilePhoto, Title, Arrow } from "./style";

function Thread() {
  return (
    <>
      {/* Need to link this back to page it came from. */}
      <Arrow>
        <div className="arrow">
          <img
            src={LeftArrowBlue}
            style={{ width: "7px", height: "13px" }}
          ></img>
        </div>
      </Arrow>
      <PostStyles>
        <Title>
          <ProfilePhoto src={avatar4}></ProfilePhoto>
          <h4>Anonymous Pigeon</h4>
          <h5>posted a memo • 10 minutes ago</h5>
          <button className="play">
            <PlayButton></PlayButton>
          </button>
        </Title>
        <Content>Hi there! I found networking was pretty amazing.</Content>
        <div className="playback">
          <img src={bar_1} style={{ width: "400px" }}></img>
          <p>1:00/1:34</p>
        </div>
        <Divider></Divider>
        <div className="response">
          <Title>
            <ProfilePhoto src={avatar2}></ProfilePhoto>
            <h4>Jennifer</h4>
            <h5>posted a response • 5 minutes ago</h5>
            <button className="play">
              <PlayButton></PlayButton>
            </button>
          </Title>
          <Content>Hi there! I found networking was pretty amazing.</Content>
          <div className="playback">
            <img src={bar_2} style={{ width: "400px" }}></img>
            <p>1:24/1:34</p>
          </div>
        </div>
        <div className="response">
          <Title>
            <ProfilePhoto src={avatar1}></ProfilePhoto>
            <h4>Ryan</h4>
            <h5>posted a response • 8 minutes ago</h5>
            <button className="play">
              <PlayButton></PlayButton>
            </button>
          </Title>
          <Content>Hi there! I found networking was pretty amazing.</Content>
          <div className="playback">
            <img src={bar_3} style={{ width: "400px" }}></img>
            <p>0:00/1:34</p>
          </div>
        </div>
      </PostStyles>
    </>
  );
}

export default Thread;
