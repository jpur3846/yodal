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
import bar_4 from "../../../static/imgs/bar_4.png";
import { Link } from "react-router-dom";
import Pill from "./Pill.js";
// import db from "../../../firebase";

import { PostStyles, Content, ProfilePhoto, Title, Arrow } from "./style";

function Thread() {
  return (
    <>
      {/* Need to link this back to page it came from. */}
      <Link to="/home">
        <Arrow>
          <div className="arrow">
            <img
              src={LeftArrowBlue}
              style={{ width: "7px", height: "13px" }}
            ></img>
          </div>
        </Arrow>
      </Link>
      <PostStyles>
        <Title>
          <ProfilePhoto src={avatar1}></ProfilePhoto>
          <h4>Wilson Hou</h4>
          <h5>posted a memo • 18 minutes ago</h5>
          <button className="play">
            <PlayButton></PlayButton>
          </button>
        </Title>
        <Content>
          Hey guys! Was just wondering how you take care of yourself during
          lockdown?
        </Content>
        <div className="playback">
          <img src={bar_4} style={{ width: "400px" }}></img>
          <p>0:10/0:10</p>
        </div>
        <Divider></Divider>
        <div className="response">
          <Title>
            <ProfilePhoto src={avatar2}></ProfilePhoto>
            <h4>Jennifer</h4>
            <h5>posted a response • 8 minutes ago</h5>
            <Pill title="Psychologist"></Pill>
            <button className="play">
              <PlayButton></PlayButton>
            </button>
          </Title>
          <Content>
            Hey Wilson! I found your perspective really interesting. Here's mine
            :)
          </Content>
          <div className="playback">
            <img src={bar_3} style={{ width: "400px" }}></img>
            <p>0:00/1:34</p>
          </div>
        </div>
        <div className="response">
          <Title>
            <ProfilePhoto src={avatar1}></ProfilePhoto>
            <h4>Ryan</h4>
            <h5>posted a response • 5 minutes ago</h5>
            <button className="play">
              <PlayButton></PlayButton>
            </button>
          </Title>
          <Content>Hey Wilson! Tried to be as concise as you !!</Content>
          <div className="playback">
            <img src={bar_3} style={{ width: "400px" }}></img>
            <p>0:00/0:20</p>
          </div>
        </div>
      </PostStyles>
    </>
  );
}

export default Thread;
