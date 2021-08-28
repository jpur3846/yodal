import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import avatar from "../../../static/imgs/avatar1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPlay,
  faPause,
} from "@fortawesome/fontawesome-free-solid";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import testAudioSrc from "../../../static/audio/test.mp3";
import useSound from "use-sound";

const PlayerStyles = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 2fr 1fr;

  width: 100vw;
  min-height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;

  #forward,
  #play {
    margin-left: 30px;
  }

  #play {
    font-size: 30px;
    color: var(--secondary);
  }

  #forward,
  #backward {
    font-size: 15px;
    color: var(--secondary);
  }

  .title {
    grid-column: 1/2;
    grid-row: 1/2;
    padding-left: 8.6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 36px;
      width: auto;
    }
  }

  h3,
  p {
    margin-left: 3.2rem;
  }

  h3 {
    font-weight: bold;
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

  .audio-player:hover {
    cursor: pointer;
  }

  .progress-bar-div {
    padding-left: 8.6rem;
    padding-right: 8.6rem;
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

const StyledLinearProgress = withStyles({
  barColorPrimary: {
    backgroundColor: "#134169",
  },
})(LinearProgress);

function Player({ audioURL }) {
  // const [play, { stop, isPlaying }] = useSound(testAudioSrc);
  const [play, { stop }] = useSound(testAudioSrc);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      play();
      setIsPlaying(true);
    } else {
      stop();
      setIsPlaying(false);
    }
  };

  return (
    <PlayerStyles>
      <div className="audio-player">
        <FontAwesomeIcon icon={faBackward} id="backward" />
        <FontAwesomeIcon
          size={"lg"}
          icon={!isPlaying ? faPlay : faPause}
          active={isPlaying}
          onClick={handlePlay}
          id="play"
        />
        {/* <FontAwesomeIcon size={"lg"} icon={faPause} id="play" /> */}
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
      <div class="progress-bar-div">
        <StyledLinearProgress variant="determinate" value={45} />
      </div>
    </PlayerStyles>
  );
}
export default Player;
