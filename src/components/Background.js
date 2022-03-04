import React from "react";
import styled from "styled-components";
import IMAGES from "../img/index.js";

const Bg = styled.img`
  max-height: 100vh;
  max-width: 100%;
`;

export default function Background({ bgIndex }) {
  console.log(bgIndex);

  return (
    <>
      <div>
        <Bg src={IMAGES[bgIndex]} alt={bgIndex} />
      </div>
    </>
  );
}
