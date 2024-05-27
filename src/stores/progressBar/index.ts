import { action, computed, makeObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";

interface Progress {
  barLength: number;
  barValue: number;
}

export default class ProgressBarStore {
  progress: Progress = {
    barLength: 16,
    barValue: 0
  };

  constructor() {
    makeObservable(this, {
      progress: observable,
      progressBarTotalLength: action,
      resetProgressBarTotalLength: action,
      progressBarWidth: action,
      resetProgressBarWidth: action,
      calculatePercentage: computed
    });

    makePersistable(this, {
      name: "progress",
      properties: ["progress"],
      storage: window.sessionStorage
    });
  }

  progressBarTotalLength = (TotalLength: number) => {
    this.progress["barLength"] = TotalLength;
  };

  resetProgressBarTotalLength = () => {
    this.progress["barLength"] = 16;
  };

  progressBarWidth = () => {
    this.progress["barValue"]++;
  };

  resetProgressBarWidth = () => {
    this.progress["barValue"] = 0;
  };

  get calculatePercentage() {
    const percentage = Math.round(
      (this.progress["barValue"] / (this.progress["barLength"] / 2)) * 100
    );

    return percentage;
  }
}
