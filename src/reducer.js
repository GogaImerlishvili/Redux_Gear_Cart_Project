import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from "./actions";
import cartItems from "./cart-items";

const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5,
};

function reducer(state = initialStore, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItems) => {
      if (cartItems.id === action.payload.id) {
        cartItems = { ...cartItems, amount: cartItems.amount - 1 };
      }
      return cartItems;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItems) => {
      if (cartItems.id === action.payload.id) {
        cartItems = { ...cartItems, amount: cartItems.amount + 1 };
      }
      return cartItems;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter(
        (cartItems) => cartItems.id !== action.payload.id
      ),
    };
  }
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItems) => {
        if (cartItems.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return (cartItems = { ...cartItems, amount: cartItems.amount + 1 });
          }
          if (action.payload.toggle === "dec") {
            return (cartItems = { ...cartItems, amount: cartItems.amount - 1 });
          }
        }
        return cartItems;
      }),
    };
  }
  return state;
}

// Switch method
//   switch (action.type) {
//     case CLEAR_CART:
//       return { ...state, cart: [] };
//     default:
//       return state;
//   }

export default reducer;
