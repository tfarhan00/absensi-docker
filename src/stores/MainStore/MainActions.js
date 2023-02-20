import * as CONSTANT from "./MainConstants";

const mainActions = (set) => ({
  [CONSTANT.GET_MAIN_DATA]: (payload) => {
    set({ mainData: payload });
  },
  [CONSTANT.POST_MAIN_DATA]: (payload) => {
    set({ mainData: payload });
  },
});

export { mainActions };
