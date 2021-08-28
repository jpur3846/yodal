import styled from "styled-components";

const Tab = styled.button`
  display: flex;
  line-height: 1.35;
  color: var(--secondary);
  padding: 1rem 1.5rem;
  background: none;
  cursor: pointer;
  border: none;
  transition: var(--cubeTransition);

  // Conditional Styles
  border-left: ${props =>
    props.active ? "3px solid var(--secondary)" : "3px solid white"};
  font-weight: ${props => (props.active ? "bold" : "normal")};
`;

export default Tab;
