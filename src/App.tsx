import React from "react";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import StartPage from "./pages/StartPage";
import TournamentPage from "./pages/TournamentPage";
import useStores from "./hooks/storeHook";
import { observer } from "mobx-react";

const App = observer((): JSX.Element => {
  const { store } = useStores();

  return (
    <div>
      <ThemeProvider theme={store.theme.theme}>
        <Routes>
          <Route path="/" element={<TotalLayout />}>
            <Route index element={<StartPage />} />
            <Route path="tournament" element={<TournamentPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
});

export default App;

const TotalLayout = (): JSX.Element => {
  return (
    <div className="total-layout">
      <GlobalStyle />
      <Header />
      <Outlet />
    </div>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 100vw;
    max-height: 100vh;
    margin: 0;
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;
