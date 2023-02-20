import { mainState } from "./MainStates";
import { mainActions } from "./MainActions";

export const mainSlice = (set) => ({
  ...mainState,
  ...mainActions(set),
});
