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
import { duration, withStyles } from "@material-ui/core/styles";
import testAudioSrc from "../../../static/audio/test.mp3";
import useSound from "use-sound";
import { useCurrentAudio, usePlaying } from "../../../context/AudioContext";

const PlayerStyles = styled.div`
  opacity: ${props => (props.isShown ? 1 : 0)} !important;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 2fr 1fr;
  transition: var(--cubeTransition);

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

function Player(audioURL) {
  // const [play, { stop, isPlaying }] = useSound(testAudioSrc);
  const [play, { pause }] = useSound(testAudioSrc);

  const { currentAudioURL, setCurrentAudioURL } = useCurrentAudio();
  const { isPlaying, setIsPlaying } = usePlaying();
  const [playbackRate, setPlaybackRate] = useState(1);
  const [progressIndicator, setProgressIndicator] = useState(0);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      play({ playbackRate: playbackRate });
      setIsPlaying(true);
    } else {
      pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (isPlaying && progressIndicator < 100) {
        setProgressIndicator(progressIndicator + 1);
      }
    }, 100);
  });

  return (
    <PlayerStyles isShown={currentAudioURL}>
      <div className="audio-player">
        <FontAwesomeIcon
          icon={faBackward}
          id="backward"
          onClick={() => {
            setPlaybackRate(playbackRate - 0.5);
          }}
        />
        <FontAwesomeIcon
          size={"lg"}
          icon={!isPlaying ? faPlay : faPause}
          active={isPlaying}
          onClick={handlePlay}
          id="play"
        />
        <FontAwesomeIcon
          icon={faForward}
          id="forward"
          onClick={() => {
            setPlaybackRate(playbackRate + 0.5);
          }}
        />
      </div>
      <div className="title">
        <img src={avatar} alt="avatar"></img>
        <h3>Wilson Hou</h3>
        <p>
          Hey guys! Was just wondering how you take care of yourself during
          lockdown?
        </p>
      </div>
      <div class="progress-bar-div">
        <StyledLinearProgress variant="determinate" value={progressIndicator} />
      </div>
    </PlayerStyles>
  );
}
export default Player;
