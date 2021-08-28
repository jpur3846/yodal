import React from "react";
import styled from "styled-components";

export const ProfilePhoto = styled.img`
  border-radius: 50%;
  height: 3.2rem;
  width: 3.2rem;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h4 {
    font-size: var(--bodyFontSize);
    font-weight: bold;
    margin-left: 2rem;
  }
  h5 {
    font-size: var(--bodyFontSize);
    font-weight: normal;
    margin-left: 2rem;
    color: #68869f;
  }
  button.play {
    margin-left: auto;
  }
`;

export const Content = styled.div`
  margin: 1.5rem 0;
  h5 {
    padding: 1.5rem 0;
    font-size: var(--bodyFontSize);
    font-weight: normal;
    color: #68869f;
  }
`;

export const Controls = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    margin-left: 1rem;
    color: #091e42;
  }
  input[type="checkbox"] {
    background: rgba(255, 255, 255, 0.0001);
  }
  input:checked {
    background: #0052cc;
  }
`;
