import React from "react";
import cartItems from "./cart-items";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { createStore } from "redux";

import reducer from "./reducer";
import { Provider } from "react-redux";

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
};

export default App;
