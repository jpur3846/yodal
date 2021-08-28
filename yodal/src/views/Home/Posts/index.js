import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import Play from "../../../components/Play";
import Post from "./Post";
import explore from "../../../fixtures/explore.json";
import relationships from "../../../fixtures/relationships.json";
import caring from "../../../fixtures/caring.json";
import motivational from "../../../fixtures/motivational.json";
import twoamthoughts from "../../../fixtures/twoamthoughts.json";
import mymemos from "../../../fixtures/mymemos.json";
import { useSectionContext } from "../../../context/SectionContext";

const sections = [
  explore,
  caring,
  motivational,
  relationships,
  twoamthoughts,
  mymemos,
];

const PostsStyles = styled.div`
  grid-column: 3/10;
`;

function Posts() {
  const { section: idx } = useSectionContext();
  return (
    <PostsStyles>
      {sections[idx].map(post => (
        <Post key={uuidv4()} post={{ ...post, audio: "" }} />
      ))}
    </PostsStyles>
  );
}

export default Posts;
