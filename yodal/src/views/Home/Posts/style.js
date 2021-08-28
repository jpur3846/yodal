import styled from "styled-components";

export const PostStyles = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  box-shadow: var(--cardShadow);
  border-radius: var(--normalRadius);

  .second {
    margin-left: 1rem;
  }

  button {
    background: none;
    cursor: pointer;
    border: none;
  }
`;

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
  }
  button.play {
    margin-left: auto;
  }
`;

export const Content = styled.p`
  margin: 1.5rem 0;
`;

export const Socials = styled.div`
  display: flex;
`;

export const Pair = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    margin-left: 0.6rem;
    font-weight: bold;
  }
`;
