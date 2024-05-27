import React from "react";
import useStores from "../hooks/storeHook";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";

const ResultImage = observer((): JSX.Element => {
  const {
    store: { randomIndex }
  } = useStores();

  const navigate = useNavigate();

  const [image] = randomIndex.index["resultIndex"];

  const handleClick = () => {
    navigate("/");
    randomIndex.clearSelectedIndex();
    randomIndex.setNewIndex();
    randomIndex.resetResultIndex();
  };

  return (
    <>
      <Image
        key={`./image/ex${image}`}
        style={{
          backgroundImage: `url(../image/ex${image}.png)`
        }}
      />
      <HomeButton onClick={handleClick}>처음으로!</HomeButton>
    </>
  );
});

export default ResultImage;

const Image = styled.div`
  width: 400px;
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 2px solid ${(props) => props.theme.resultImgBorderColor};
  margin: auto;

  @media (min-width: 480px) and (max-width: 767px) {
    width: 340px;
    height: 540px;
  }

  @media (max-width: 479px) {
    width: 290px;
    height: 460px;
  }
`;

const HomeButton = styled.button`
  display: block;
  width: 130px;
  height: 40px;
  font-size: 23px;
  font-weight: 800;
  border-radius: 7px;
  color: ${(props) => props.theme.homeButtonColor};
  background-color: ${(props) => props.theme.headerColor};
  margin: 20px auto;

  @media (min-width: 480px) and (max-width: 767px) {
    width: 115px;
    height: 36.5px;
    font-size: 21.5px;
    margin: 30px auto;
  }
  @media (max-width: 479px) {
    width: 100px;
    height: 33px;
    font-size: 20px;
    margin: 40px auto;
  }
`;
