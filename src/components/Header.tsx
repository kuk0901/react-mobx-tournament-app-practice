import React from "react";
import styled from "styled-components";
import useStores from "../hooks/storeHook";
import { observer } from "mobx-react";

const Header = observer(() => {
  const { store } = useStores();

  return (
    <HeaderWrapper>
      <Logo
        onClick={() => {
          window.location.href = "/";
        }}
      >
        JIWON-TOURNAMENT
      </Logo>
      <HomeButton
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Home
      </HomeButton>
      <ImageSource
        href="https://www.instagram.com/xjiwonparkx/"
        target="_blank"
      >
        출처: <Source>xjiwonparkx</Source>
      </ImageSource>
      <ModeButton>
        <LightButton onClick={store.theme.lightMode.bind(store.theme)} />
        <DarkButton onClick={store.theme.darkMode.bind(store.theme)} />
      </ModeButton>
    </HeaderWrapper>
  );
});

export default Header;

const Logo = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.logoColor};
  cursor: pointer;
  margin-left: 10px;
  font-weight: bold;

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 14px;
  }

  @media (max-width: 479px) {
    font-size: 13px;
  }
`;

const HomeButton = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.homeButtonColor};
  cursor: pointer;
  font-weight: 900;

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 14px;
  }
  @media (max-width: 479px) {
    font-size: 13px;
  }
`;

const ImageSource = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: ${(props) => props.theme.sourceTextColor};
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 14px;
  }
  @media (max-width: 479px) {
    font-size: 13px;
  }
`;

const Source = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.sourceTextColor};
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const ModeButton = styled.div`
  margin-right: 10px;
  display: flex;
`;

const LightButton = styled.div`
  width: 23px;
  height: 23px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
  margin: 2px;
  cursor: pointer;
`;

const DarkButton = styled.div`
  width: 23px;
  height: 23px;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 50%;
  margin: 2px;
  cursor: pointer;
`;

const HeaderWrapper = styled.div`
  height: 52px;
  position: fixed;
  inset: 0;
  background-color: ${(props) => props.theme.headerColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  @media (min-width: 480px) and (max-width: 767px) {
    height: 60px;
  }
  @media (max-width: 479px) {
    height: 70px;
  }
`;
