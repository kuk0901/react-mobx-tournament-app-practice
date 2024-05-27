import { action, makeObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";

interface IndexType {
  randomIndex: Array<number>;
  selectedIndex: Array<number>;
  resultIndex: Array<number>;
}

export default class ImageIndexStore {
  index: IndexType = {
    randomIndex: randomIndex(),
    selectedIndex: [],
    resultIndex: []
  };

  constructor() {
    makeObservable(this, {
      index: observable,
      changeRandomIndex: action,
      getSelectedIndex: action,
      setRandomIndex: action,
      clearSelectedIndex: action,
      mixIndex: action,
      setNewIndex: action,
      setResultIndex: action,
      resetResultIndex: action
    });

    makePersistable(this, {
      name: "ImageIndex",
      properties: ["index"],
      storage: window.sessionStorage
    });
  }

  // * 내부 randomIndex 값 바꿈
  changeRandomIndex = () => {
    this.index["randomIndex"] = [
      ...this.index["randomIndex"].slice(
        1,
        this.index["randomIndex"].length - 1
      )
    ];
  };

  // * 클릭된 인덱스 번호를 받아 다시 randomIndex에 지정
  getSelectedIndex = (num: Array<number>) => {
    this.index["selectedIndex"] = [...this.index["selectedIndex"], ...num];
  };

  // * selectedIndex의 값을 재사용하기 위해 randomIndex로 넣어줌
  setRandomIndex = () => {
    this.index["randomIndex"] = [...this.index["selectedIndex"]];
    // this.index["selectedIndex"] = [];
  };

  // * selectedIndex 배열 재사용을 위해 빈 배열 할당
  clearSelectedIndex = () => {
    this.index["selectedIndex"] = [];
  };

  // * 배열의 숫자를 섞는 함수
  mixIndex = () => {
    this.index["randomIndex"] = [
      ...this.index["randomIndex"].sort(() => Math.random() - 0.5)
    ];
  };

  // * 전체 토너먼트가 끝나고 새로운 인덱스 번호들로 radomIndex 구성
  setNewIndex = () => {
    this.index["randomIndex"] = randomIndex();
  };

  // * 최종 결과로 나올 index를 갖는 배열
  setResultIndex = () => {
    this.index["resultIndex"] = [...this.index["selectedIndex"]];
    // this.index["selectedIndex"] = [];
  };
  resetResultIndex = () => {
    this.index["resultIndex"] = [];
  };
}

function randomIndex(num: number = 16): Array<number> {
  let randomIndexArray = [];
  for (let i = 0; i < num; i++) {
    let randomNum = Math.floor(Math.random() * 23);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      i--;
    }
  }
  return randomIndexArray;
}
