import React from "react";
import cartItems from "./cart-items";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { createStore } from "redux";

import reducer from "./reducer";
import { Provider } from "react-redux";

const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5,
};

export const store = createStore(reducer, initialStore);

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
};

export default App;
