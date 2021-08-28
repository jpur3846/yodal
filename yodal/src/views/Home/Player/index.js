import React from "react";
import styled from 'styled-components';
import avatar from '../../../static/imgs/avatar1.png';

const PlayerStyles = styled.div`
  justify-content: center;
  
  .player-container {
    height: 10rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  img {
    height: 36px;
    width: auto;
  }

  .inner-container {
    width: auto;
    width: var(--maxWidth);
  }
`

function Player() {
  return (
    <PlayerStyles>
      <div className="player-container">
          <div className="inner-container">
            <img src={avatar}></img>
            <h4></h4>
          </div>
      </div>
    </PlayerStyles>
  );
}

export default Player;
