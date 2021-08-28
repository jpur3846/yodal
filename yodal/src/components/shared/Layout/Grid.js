import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 7.2rem));
  gap: ${props => (props.gap ? props.gap : "0 2rem")};
  margin: ${props => (props.margin ? props.margin : 0)};
`;

export default Grid;
