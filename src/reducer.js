import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";
import cartItems from "./cart-items";

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    console.log("you decreased amount");
  }
  if (action.type === INCREASE) {
    console.log("INC");
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter(
        (cartItems) => cartItems.id !== action.payload.id
      ),
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
