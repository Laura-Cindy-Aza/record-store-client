//pendiente de revisar, no estoy segura como cambiar el localstorage

import {
  INCREASE_QUANTITY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QUANTITY,
  EMPTY_CART,
} from "../actions/types";

const initState = { cartItems: [] };

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemInCart = state.cartItems.find(
        (el) => el._id === action.payload._id
      );

      if (!itemInCart) {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      } else {
        // delete ite that already exists
        // add new item after increasing the qty
        const newCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
        return {
          ...state,
          cartItems: [
            ...newCartItems,
            { ...action.payload, quantity: itemInCart.quantity + 1 },
          ],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      };

    case INCREASE_QUANTITY:
      const targetItem = state.cartItems.find(
        (item) => item._id === action.payload
      );
      targetItem.quantity += 1;
      const filteredItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        cartItems: [...filteredItems, targetItem],
      };

    case DECREASE_QUANTITY:
      const targetItem2 = state.cartItems.find(
        (item) => item._id === action.payload
      );
      targetItem2.quantity -= 1;
      const filteredItems2 = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        cartItems: [...filteredItems2, targetItem2],
      };

    // user wants to clear cart
    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };

    // END OF CASES
    default:
      return state;
  }
};

export default cartReducer;
