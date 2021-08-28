import styled from "styled-components";

const MainButton = styled.button`
  min-width: 11rem;
  height: 4.1rem;
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : "#134169"};
  border-radius: 8px;
  border: none;
  color: white;
  font-weight: bold;

  box-shadow: var(--level-1);

  cursor: pointer;
  transition: var(--cubeTransition);

  &:hover {
    background: #ace3ef;
    box-shadow: var(--level-4);
  }
`;

export default MainButton;
