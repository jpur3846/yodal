import React from "react";
import styled from "styled-components";
import Tab from "./Tab";

const LeftSidebarStyles = styled.div`
  grid-column: 1/3;

  box-shadow: var(--cardShadow);
  border-radius: var(--normalRadius);

  padding: 0.4rem 0;
  height: min-content;
`;

function LeftSidebar() {
  const [activeTab, setActiveTab] = React.useState("0");
  return (
    <LeftSidebarStyles>
      <Tab active={activeTab === "0"} onClick={() => setActiveTab("0")}>
        Explore
      </Tab>
      <Tab active={activeTab === "1"} onClick={() => setActiveTab("1")}>
        Caring
      </Tab>
      <Tab active={activeTab === "2"} onClick={() => setActiveTab("2")}>
        Motivational
      </Tab>
      <Tab active={activeTab === "3"} onClick={() => setActiveTab("3")}>
        Relationships
      </Tab>
      <Tab active={activeTab === "4"} onClick={() => setActiveTab("4")}>
        2am Thoughts
      </Tab>
      <Tab active={activeTab === "5"} onClick={() => setActiveTab("5")}>
        My Memos
      </Tab>
    </LeftSidebarStyles>
  );
}

export default LeftSidebar;
