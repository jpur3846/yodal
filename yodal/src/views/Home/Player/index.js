import React, { useRef } from "react";
import styled from "styled-components";
import avatar from "../../../static/imgs/avatar1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPlay,
} from "@fortawesome/fontawesome-free-solid";
import LinearProgress from "@material-ui/core/LinearProgress";

const PlayerStyles = styled.div`
  /* justify-content: center;
  
  .player-container {
    height: 10rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    display: flex;
    padding-left: 8.6rem;
    justify-content: space-between;
  }


  .player-container {
    box-shadow: 0px -4px 63px -22px rgba(19, 65, 105, 0.17);
  }

  .inner-container {
    width: auto;
    display: flex;
    padding-top: 22px;
    justify-content: space-between;
  }
  
  .audio-player {
    width: auto;
    display: flex;
    justify-content: flex-end;
    align-self: center;
    align-items: center;
    margin-right: 8.6rem;
  }
  
  .profile {
    display: flex;
    height: 50%;
    justify-content: flex-start;
    align-items: center;
  }

  h3 {
    font-weight: bold;
    padding-left: 3.3rem;
    padding-right: 3.3rem;
  }

  #forward, #play {
    margin-left: 28px;
  } 
  
  #play {
    font-size: 36px;
  }

  #forward, #backward {
    font-size: 20px;
  }

  .progress-bar {
    width: 10px;
  }
   */

  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 2fr 1fr;

  width: 100vw;
  min-height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;

  .title {
    grid-column: 1/2;
    grid-row: 1/2;
    background: red;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    h3,
    p {
      padding-left: 8.6rem;
    }
    img {
      height: 36px;
      width: auto;
    }
  }

  .audio-player {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2/3;
    grid-row: 1/3;
    svg {
      margin: 0 1rem;
    }
  }
`;

function Player() {
  const audioEl = useRef(null);
  // Use audioEl.current to .play(), .stop() etc.

  return (
    <PlayerStyles>
      <div className="audio-player">
        <audio ref={audioEl} src={""} id="player" />
        <FontAwesomeIcon icon={faBackward} id="backward" />
        <FontAwesomeIcon size={"lg"} icon={faPlay} id="play" />
        <FontAwesomeIcon icon={faForward} id="forward" />
      </div>

      <div className="title">
        <img src={avatar}></img>
        <h3>Wilson Hou</h3>
        <p>
          I found networking was the best way to landing my first internship. It
          makes easier to ...
        </p>
      </div>

      {/* <div className="player-container">
        <div className="inner-container">
          <div className="profile">
            <img src={avatar}></img>
            <h3>Wilson Hou</h3>
            <p>
              I found networking was the best way to landing my first
              internship. It makes easier to ...
            </p>
          </div>
          <div className="progress-bar">
            <LinearProgress variant="determinate" value={100} />
          </div>
        </div>
        <div className="audio-player">
        </div>
      </div> */}
    </PlayerStyles>
  );
}
export default Player;
