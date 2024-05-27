import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import useStores from "../hooks/storeHook";
import { observer } from "mobx-react";
import ImageBox from "./ImageBox";
import { useNavigate } from "react-router-dom";
import ResultImage from "./ResultImage";

export interface ValueIndex {
  value: { first: number; last: number };
}

const ImageContainer = observer((): JSX.Element => {
  const {
    store: { randomIndex, progress }
  } = useStores();

  const RandomIndexUI = randomIndex.index["randomIndex"];
  const SelectedIndex = randomIndex.index["selectedIndex"];

  const navigate = useNavigate();

  // & UI를 구성하는 tuple [n, n]
  const [valueIndex, setValueIndex] = useState<ValueIndex["value"]>({
    first: RandomIndexUI.at(0),
    last: RandomIndexUI.at(-1)
  });

  const changeTupleIndex = useCallback(() => {
    setValueIndex({
      first: RandomIndexUI.at(0),
      last: RandomIndexUI.at(-1)
    });
  }, [RandomIndexUI]);

  const changeRandomIndex = useCallback(() => {
    randomIndex.setRandomIndex();
    randomIndex.clearSelectedIndex();
    randomIndex.mixIndex();
  }, [randomIndex]);

  useEffect(() => {
    // & 결과를 보여주기 위한 조건
    if (RandomIndexUI.length === 0 && SelectedIndex.length === 1) {
      randomIndex.setResultIndex();
      progress.resetProgressBarWidth();
      progress.resetProgressBarTotalLength();
    }
    // & 다음 토너먼트 UI를 보여주기 위한 조건
    else if (RandomIndexUI.length === 0 && SelectedIndex.length > 1) {
      progress.progressBarTotalLength(SelectedIndex.length);
      progress.resetProgressBarWidth();
      changeRandomIndex();
    }
    // & 현재 토너먼트의 UI를 바꿈
    else {
      changeTupleIndex();
    }
  }, [
    RandomIndexUI,
    changeRandomIndex,
    changeTupleIndex,
    SelectedIndex.length,
    navigate,
    randomIndex,
    progress
  ]);

  if (RandomIndexUI.length === 0 && SelectedIndex.length === 1) {
    return <ResultImage />;
  } else {
    return (
      <>
        <ProgressBar />
        <Box>
          <ImageBox {...valueIndex} />
        </Box>
      </>
    );
  }
});

export default ImageContainer;

const Box = styled.div`
  width: 700px;
  height: 550px;
  margin: 30px auto;
  border: 2px solid ${(props) => props.theme.borderColor};
  display: flex;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 600px;
    height: 500px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    width: 520px;
    height: 460px;
  }

  @media (max-width: 479px) {
    width: 440px;
    height: 420px;
  }
`;
