import React from "react";
import styled from "styled-components";
import { useSectionContext } from "../../../context/SectionContext";
import Tab from "./Tab";
import { Link } from "react-router-dom";

const LeftSidebarStyles = styled.div`
  grid-column: 1/3;

  box-shadow: var(--cardShadow);
  border-radius: var(--normalRadius);

  padding: 0.4rem 0;
  height: min-content;
`;

function LeftSidebar() {
  const { section, setSection } = useSectionContext();
  return (
    <LeftSidebarStyles>
      <Link to="/home">
        <Tab active={section === 0} onClick={() => setSection(0)}>
          Explore
        </Tab>
      </Link>
      <Tab active={section === 1} onClick={() => setSection(1)}>
        Caring
      </Tab>
      <Tab active={section === 2} onClick={() => setSection(2)}>
        Motivational
      </Tab>
      <Tab active={section === 3} onClick={() => setSection(3)}>
        Relationships
      </Tab>
      <Tab active={section === 4} onClick={() => setSection(4)}>
        2am Thoughts
      </Tab>
      <Tab active={section === 5} onClick={() => setSection(5)}>
        My Memos
      </Tab>
    </LeftSidebarStyles>
  );
}

export default LeftSidebar;
