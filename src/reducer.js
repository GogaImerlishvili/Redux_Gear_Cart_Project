import { DECREASE, INCREASE } from "./actions";

function reducer(state, action) {
  console.log({ state, action });
  if (action.type === DECREASE) {
    // state.count = state.count - 1;
    return { ...state, count: state.count - 1 };
  }
  if (action.type === INCREASE) {
    // state.count = state.count - 1;
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "RESET") {
    // state.count = state.count - 1;
    return { ...state, count: 0 };
  }
  return state;
}

export default reducer;
