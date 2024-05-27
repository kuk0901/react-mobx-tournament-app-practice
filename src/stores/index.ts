import ImageIndexStore from "./imageIndex";
import ProgressBarStore from "./progressBar";
import ThemeStore from "./theme";

export interface Store {
  theme: ThemeStore;
  randomIndex: ImageIndexStore;
  progress: ProgressBarStore;
}

export const store: Store = {
  theme: new ThemeStore(),
  randomIndex: new ImageIndexStore(),
  progress: new ProgressBarStore()
};
