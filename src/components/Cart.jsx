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
    <>
      <div className='container'>
        <header className='columns header'>
          <div className='column logo-text'>
            <h1>Shopping Cart</h1>
          </div>
          <div className='column user-info'>
            <img src='../assets/avatars/guy.jpg' alt='profilepic' />
            <div className='dropdown is-hoverable'>
              <div className='dropdown-trigger'>
                "Logged in as "
                <span aria-haspopup='true' aria-controls='dropdown-menu4'>
                  <span className='username'>USERNAME </span>
                  <span className='icon is-small'>
                    <i
                      className='fa fa-angle-down'
                      aria-hidden='true'
                      before='dropdown'>
                      {" "}
                    </i>
                  </span>
                </span>
              </div>

              <div class='dropdown-menu' role='menu'>
                <div class='dropdown-content'>
                  <a className='dropdown-item' href='logout'>
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* end of top bar  */}

        {/* start of main component, records and stuff  */}
        <section className='section products-table'>
          <div className='columns table-header'>
            <div className='column'>Image</div>
            <div className='column is-half'>Description</div>
            <div className='column'>Quantity</div>
            <div className='column'>Price</div>
            <div className='column'>Total</div>
          </div>

          <div className='shopping_cart'>
            <div>
              <div className='columns product-row'></div>
              <div className='columns product-row'></div>
              <section className='columns checkout'>
                <div className='column discount'>
                  <h2>Discount Code or Voucher</h2>
<<<<<<< HEAD
                  <p>Type here your discount code. Multiple vouchers cannot be applied. </p>
                  <div className="field has-addons">
                    <div className="control">
                      {/* <input className="input" type="text"> </input> */}
=======
                  <p>
                    Type here your discount code. Multiple vouchers cannot be
                    applied.{" "}
                  </p>
                  <div className='field has-addons'>
                    <div className='control'>
                      <input className='input' type='text'></input>
>>>>>>> c5cf0bb8a63f843147932ef2552a58edde24cb04
                    </div>
                    <div className='control'>
                      <button className='btn is-link primary'>Redeem</button>
                    </div>
                  </div>
                </div>
                <div className='column submit-form'>
                  <div id='total'>
                    <span className='total'></span>
                  </div>
                  <div className='field is-grouped'>
                    <p className='control'>
                      <button className='button is-dark'>
                        Back to Dashboard
                      </button>
                    </p>
                    <p className='control'>
                      <button className='button is-link' href='#'>
                        Continue to checkout
                      </button>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        {/* end of shopping cart  */}

        {/* start of FOOOOTTEEERRR */}
        <footer className='footer'>
          <p className='has-text-centered'>
            Copyright &copy; 2021. All Rights Reserved
          </p>
        </footer>
      </div>
    </>
  );
};

export default Cart;
