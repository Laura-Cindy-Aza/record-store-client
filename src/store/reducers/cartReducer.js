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

    // return {
    //   ...state,
    //   cartItems: [
    //     ...state.cartItems,
    //     state.cartItems.map((el) =>
    //       el._id === action.payload._id
    //         ? { ...el, quantity: el.quantity + 1 }
    //         : el
    //     ),
    //   ],
    // };

    case REMOVE_FROM_CART:
      // const unfilteredItems = JSON.parse(localStorage.getItem("cartItems"));
      // const filteredItems = unfilteredItems.filter(
      //   (item) => item.id !== action.payload
      // );
      // console.log("filteredItems", filteredItems);
      // const filteredItemsJSON = JSON.stringify(filteredItems);

      // localStorage.setItem("cartItems", filteredItemsJSON);

      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      };

    case INCREASE_QUANTITY:
      const initialQuantity = JSON.parse(localStorage.getItem("cartItems"));
      const targetItem = initialQuantity.find(
        (item) => item.id === action.payload
      );
      targetItem.quantity += 1;
      const unfilteredItemsQty = JSON.parse(localStorage.getItem("cartItems"));
      const filteredItemsQty = unfilteredItemsQty.filter(
        (item) => item.id !== action.payload
      );

      console.clear();
      console.log("target", targetItem.quantity);
      const resultArr = [...filteredItemsQty, targetItem];
      localStorage.setItem("cartItems", JSON.stringify(resultArr));

      return {
        ...state,
        cartItems: [...filteredItemsQty, targetItem],
      };

    case DECREASE_QUANTITY:
      const initialQuantity2 = JSON.parse(localStorage.getItem("cartItems"));
      const targetItem2 = initialQuantity2.find(
        (item) => item.id === action.payload
      );
      targetItem2.quantity -= 1;
      const unfilteredItemsQty2 = JSON.parse(localStorage.getItem("cartItems"));
      const filteredItemsQty2 = unfilteredItemsQty2.filter(
        (item) => item.id !== action.payload
      );

      console.clear();
      console.log("target", targetItem2.quantity);
      const resultArr2 = [...filteredItemsQty2, targetItem2];
      localStorage.setItem("cartItems", JSON.stringify(resultArr2));

      return {
        ...state,
        cartItems: [...filteredItemsQty2, targetItem2],
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
