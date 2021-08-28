import React from "react";
import styled from "styled-components";

const PillStyles = styled.div`
  padding-left: 10px;

  p {
    color: white;
    font-weight: 500;
    font-size: 11px;
    line-height: 22px;
    border-radius: 50px;
    background-color: var(--success);
    padding-left: 7px;
    padding-right: 7px;
  }
`;

const Pill = (props) => {
  return (
    <PillStyles>
      <p>{props.title}</p>
    </PillStyles>
  );
};

export default Pill;
