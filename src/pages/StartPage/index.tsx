import { observer } from "mobx-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StartPage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tournament");
  };

  return (
    <div className="container">
      <ImageBg />
      <StartButton onClick={handleClick}>Start!</StartButton>
    </div>
  );
};

export default observer(StartPage);

const ImageBg = styled.div`
  position: fixed;
  top: 97px;
  left: 0;
  right: 0;
  width: 900px;
  height: 600px;
  background-image: url("./image/home(960_634).png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  border-radius: 3px;

  @media (min-width: 768px) and (max-width: 1023px) {
    top: 120px;
    width: 700px;
    height: 500px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    top: 155px;
    width: 500px;
    height: 400px;
  }
  @media (max-width: 479px) {
    top: 200px;
    width: 400px;
    height: 300px;
  }
`;

const StartButton = styled.button`
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  display: block;
  width: 100px;
  height: 35px;
  font-size: 23px;
  font-weight: 800;
  border-radius: 7px;
  margin: auto;
  color: ${(props) => props.theme.homeButtonColor};
  background-color: ${(props) => props.theme.headerColor};

  @media (min-width: 768px) and (max-width: 1023px) {
    bottom: 130px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    bottom: 205px;
    width: 95px;
    height: 33px;
    font-size: 21px;
  }
  @media (max-width: 479px) {
    bottom: 265px;
    width: 90px;
    height: 30px;
    font-size: 20px;
  }
`;
