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
    //   Top part
    <div className="container">
          <header className="columns header"></header>
          <div class=""></div>
    </div>
  );
};

export default Cart;
