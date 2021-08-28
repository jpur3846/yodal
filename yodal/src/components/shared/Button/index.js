import styled from "styled-components";

export const ButtonLarge = styled.button`
  padding: 1.5rem 2rem;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#134169"};
  color: ${(props) => (props.color ? props.color : "#fff")};
  border-radius: 8px;
  border: none;
  color: white;
  font-size: var(--body);
  font-weight: 700;
  line-height: 1.25;

  cursor: pointer;
  transition: var(--cubeTransition);
  box-shadow: var(--buttonShadow);

  &:hover {
    background: var(--primary);
    color: var(--secondary);
  }
`;

export const ButtonMedium = styled.button`
  min-height: 3.2rem;
  padding: 0.7rem 1rem;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#134169"};
  border-radius: 8px;
  border: none;
  color: white;
  font-weight: 600;
  line-height: 1.5;

  cursor: pointer;
  transition: var(--cubeTransition);
  box-shadow: var(--buttonShadow);

  &:hover {
    background: var(--primary);
    color: var(--secondary);
  }
`;
