import React from "react";
import cartItems from "./cart-items";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
};

export default App;
