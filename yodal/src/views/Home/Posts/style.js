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
  }
  svg {
    margin-left: auto;
  }
`;

// export const PlayButton = styled.button`
//   background-color: var(--secondary);
//   border: none;
//   border-radius: 50%;
//   color: white;
//   cursor: pointer;
//   height: 1.8rem;
//   width: 1.8rem;

//   margin-left: auto;
// `;

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
