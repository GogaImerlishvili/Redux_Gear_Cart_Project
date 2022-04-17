import React from "react";
import cartItems from "./cart-items";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { createStore } from "redux";

const initialStore = {
  count: 0,
  name: "john",
};

function reducer(state, action) {
  console.log({ state, action });
  if (action.type === "DECREASE") {
    // state.count = state.count - 1;
    return { ...state, count: state.count - 1 };
  }
  if (action.type === "INCREASE") {
    // state.count = state.count - 1;
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "RESET") {
    // state.count = state.count - 1;
    return { ...state, count: 0 };
  }
  return state;
}
export const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "RESET" });

// export const store = () => {
//     let initialStore = {
//       count: 2,
//     };
//   return createStore(reducer, initialStore);
// };

const App = () => {
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
};

export default App;
