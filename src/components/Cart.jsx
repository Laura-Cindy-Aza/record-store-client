import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/actions/cartAction";

const Cart = () => {
  return (
    <main>
      <h1 style={{ marginTop: "1rem" }}>Your Shoping Cart</h1>
      {/* <div>{renderCartItems} </div> */}
      <h3>TOTAL</h3>

      <div>
        <h4 style={{ margin: "0 auto" }}>
          {/* {totalPrice > 0 ? totalPrice : null}{"€"} */}
        </h4>
        <div>
          <button>Check out</button>
        </div>
      </div>
    </main>
  );
};

// export default Cart;
