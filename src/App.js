import React from "react";
import cartItems from "./cart-items";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { createStore } from "redux";

const initialStore = {
  count: 4,
};

function reducer(state, action) {
  console.log({ state, action });
  return state;
}
export const store = createStore(reducer, initialStore);

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
