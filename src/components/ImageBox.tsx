import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { ValueIndex } from "./ImageContainer";
import useStores from "../hooks/storeHook";

const ImageBox = observer((valueIndex: ValueIndex["value"]): JSX.Element => {
  const {
    store: { randomIndex, progress }
  } = useStores();

  return (
    <>
      <Image
        key={`./image/ex${valueIndex.first}`}
        style={{ backgroundImage: `url("./image/ex${valueIndex.first}.png")` }}
        onClick={() => {
          randomIndex.getSelectedIndex([valueIndex.first]);
          randomIndex.changeRandomIndex();
          progress.progressBarWidth();
        }}
      />
      <Image
        key={`./image/ex${valueIndex.last}`}
        style={{ backgroundImage: `url("./image/ex${valueIndex.last}.png")` }}
        onClick={() => {
          randomIndex.getSelectedIndex([valueIndex.first]);
          randomIndex.changeRandomIndex();
          progress.progressBarWidth();
        }}
      />
    </>
  );
});

export default ImageBox;

const Image = styled.div`
  width: 450px;
  height: 550px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  transition: transform 0.2s;

  &:hover {
    z-index: 3;
    border: 2px solid ${(props) => props.theme.borderColor};
    transform: scale(1.07);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 300px;
    height: 500px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    width: 260px;
    height: 460px;
  }
  @media (max-width: 479px) {
    width: 220px;
    height: 420px;
  }
`;
