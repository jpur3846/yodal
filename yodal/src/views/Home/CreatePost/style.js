import styled from "styled-components";

export const PostStyles = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  box-shadow: var(--cardShadow);
  border-radius: var(--normalRadius);
  grid-col: 3/10;

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
  grid-template-columns: 4fr 2fr;

  h4 {
    font-size: var(--bodyFontSize);
    font-weight: bold;
    margin-left: 2rem;
  }
  h5 {
    font-size: var(--bodyFontSize);
    font-weight: bold;
    margin-left: 2rem;
    color: var(--secondary);
  }
  .play {
    margin-left: auto;
    margin-right: 0px;
    padding-left: 0px;
    grid-col: 4/6;
    align-self: flex-end;
    button {
      margin-left: 10px;
      align-self: flex-end;
    }
  }
  .seconds {
    margin-left: auto;
    margin-top: 10px;
    grid-col: 4/6;
    align-self: flex-end;
  }
  
  .Buttonpost {
    background-color: var(--secondary);
    color: #fff;
  }

  .Button {
    color: var(--secondary);
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
    font-weight: light;
  }
`;
