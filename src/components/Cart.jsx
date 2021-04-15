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
            <header className="columns header">
                <div className="column logo-text">
                    <h1>Shopping Cart Experience</h1>
                </div>
                <div className="column user-info">
                    <img src="#" alt="profile pic"></img>
                    <div className="dropdown is-hoverable">
                        <div className="dropdown-trigger">
                            Logged in as
                            <span aria-haspopup="true" aria-controls="dropdown-menu4">
                                <span className="username">USERNAME</span>
                                <span className="icon is-small">
                                    <i className="fa fa-angle-down" aria-hidden="true">
                                    </i>
                                </span>
                            </span>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div className="dropdown-content">
                                <a className="dropdown-item">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="section products-table">
                <div className="columns table-header">
                    <div className="column">Image</div>
                    <div className="column is-half">Product Description</div>
                    <div className="column">Quantity</div>
                    <div className="column">Price</div>
                    <div className="column">Total</div>
                </div>
                <div id="shopping_cart"></div>
            </section>
        </main>
    );
};

export default Cart;
