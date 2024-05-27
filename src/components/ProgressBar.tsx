import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import useStores from "../hooks/storeHook";

const ProgressBar = observer((): JSX.Element => {
  const {
    store: { progress }
  } = useStores();

  return (
    <Bar className="ProgressBar">
      <Progress
        style={{
          width: `${progress.calculatePercentage}%`
        }}
      />
    </Bar>
  );
});

export default ProgressBar;

const Bar = styled.div`
  max-width: 400px;
  height: 20px;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  margin: 0 auto;

  @media (min-width: 480px) and (max-width: 767px) {
    max-width: 350px;
  }

  @media (max-width: 479px) {
    max-width: 300px;
  }
`;

const Progress = styled.div`
  height: 20px;
  overflow: hidden;
  border-radius: 5px;
  background-color: ${(props) => props.theme.homeButtonColor};
`;
