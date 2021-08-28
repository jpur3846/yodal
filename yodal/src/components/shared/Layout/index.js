import React from "react";
import styled from "styled-components";
import Grid from "./Grid";

const LayoutStyles = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  margin-top: calc(80px + 35px);

  .inner {
    width: var(--maxWidth);
    margin: 0 auto;
  }
`;

function Layout({ children }) {
  return (
    <LayoutStyles>
      <div className="inner">
        <Grid>{children}</Grid>
      </div>
    </LayoutStyles>
  );
}

export default Layout;
