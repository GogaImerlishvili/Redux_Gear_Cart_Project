import React from "react";
import cartItems from "./cart-items";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { createStore } from "redux";
import { DECREASE, INCREASE } from "./actions";
import reducer from "./reducer";

const initialStore = {
  count: 0,
  name: "john",
};

export const store = createStore(reducer, initialStore);
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });

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
