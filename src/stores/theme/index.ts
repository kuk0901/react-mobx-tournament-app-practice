import { action, makeObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";

export interface Theme {
  headerColor: string;
  sourceTextColor: string;
  textColor: string;
  backgroundColor: string;
  homeButtonColor: string;
  borderColor: string;
  resultImgBorderColor: string;
  logoColor: string;
}

export default class ThemeStore {
  theme: Theme = {
    headerColor: "#FEC207",
    sourceTextColor: "#F5F5F5",
    textColor: "#1F1C1C",
    backgroundColor: "#FFF2CC",
    homeButtonColor: "#7B50FB",
    borderColor: "#F5F5F5",
    resultImgBorderColor: "#E06666",
    logoColor: "#df1bcb"
  };

  constructor() {
    makeObservable(this, {
      theme: observable,
      lightMode: action,
      darkMode: action
    });

    makePersistable(this, {
      name: "Theme",
      properties: ["theme"],
      storage: window.sessionStorage
    });
  }

  lightMode = () => {
    this.theme = {
      ...{
        headerColor: "#FEC207",
        sourceTextColor: "#F5F5F5",
        textColor: "#1F1C1C",
        backgroundColor: "#FFF2CC",
        homeButtonColor: "#7B50FB",
        borderColor: "#F5F5F5",
        resultImgBorderColor: "#E06666",
        logoColor: "#df1bcb"
      }
    };
  };

  darkMode = () => {
    this.theme = {
      ...{
        headerColor: "#371D7C",
        sourceTextColor: "#F5F5F5",
        textColor: "#F5F5F5",
        backgroundColor: "#110926",
        homeButtonColor: "#74F7D6",
        borderColor: "#242222",
        resultImgBorderColor: "#FF9AD6",
        logoColor: "#df1bcb"
      }
    };
  };
}
