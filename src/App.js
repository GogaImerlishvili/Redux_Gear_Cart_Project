import React from "react";
import cartItems from "./cart-items";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { createStore } from "redux";

import reducer from "./reducer";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

export const store = createStore(reducer, initialStore);

const App = () => {
  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
};

export default App;
