import { useState } from "react";
import styled from "styled-components";

const ImageStyles = styled.div`
  img {
    height: 75px;
  }

  img: hover {
    -webkit-transform: scale(1.25);
    transform: scale(1.2);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.1s ease-in-out;
    cursor: pointer;
  }

  .avatarSelected {
    -webkit-transform: scale(1.25);
    transform: scale(1.2);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.1s ease-in-out;
    cursor: pointer;
  }
`;

const AvatarSelect = ({ avatar }) => {
  const [selected, setSelected] = useState(false);
  return (
    <ImageStyles>
      <img
        className={selected && "avatarSelected"}
        src={avatar}
        alt="Avatar"
        onClick={() => {
          setSelected(!selected);
        }}
      />
    </ImageStyles>
  );
};

export default AvatarSelect;
