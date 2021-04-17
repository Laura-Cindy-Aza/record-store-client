import React, { useEffect, useState } from "react";
import Dashbar from "./Dashbar";
import {Redirect} from 'react-router-dom'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import music from '../statics/logo.png'
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  emptyCart,
} from "../store/actions/cartAction";

const Cart = () => {
  const [redirect, setRedirect] = useState("");
  const dispatch = useDispatch();


  const cartItems = useSelector((state) => state.cartFromReducer.cartItems);




  const renderCartItems = cartItems.map((record, index) => (


    <div className='columns'>
      <div className='column card '>

        {/* card records header!  */}

      <section className='section products-table '>
        <div className='columns table-header'>
          <div className='column '>Cover</div>
          <div className='column'>Description</div>
          <div className='column'>Quantity</div>
          <div className='column'>Price</div>
          <div className='column'>Total</div>
        </div>

        {/* card records info */}
        <div id='shopping-cart'>
          <div>
            <div className='columns product-row'>
              <div className='column product-image'>
                <figure>
                <img src={record.cover} alt="cover"/>
                </figure>
              </div>

              <div className='column is-half'>
                <p>{record.title}</p>
                <p>{record.artist}</p>
              </div>

              <div className='column center-container'>
                <span className='mobile-table-heading'>Quantity </span>
                <input className='quantity ' id={record.id} type="number" name='quantity' min='0' max='100' value='2'/>
              </div>

              <div className='column center-container'>
                <span className='mobile-table-heading'>Price € {record.price}</span>
              </div>


              <div className='column center-container'>
              <span className='mobile-table-heading'>Price € {record.price}</span>
              </div>
            </div>
          </div>

        <section className='columns product-row'>


          <div className='column submit-form'>
            <div className='total'>
              <span className='total'>
                Total ${record.price}
              </span>
            </div>

            <div className='field is-grouped'>
              <p className='control'>
                <button className='button is-dark'>Back to Shop</button>
              </p>
              <p className='control'>
                <button className='button is-link'>Continue to checkout</button>
              </p>
            </div>
          </div>
        </section>


        </div>
      </section>



      {/* closing column divs => */}
      </div>
    </div>
  ));
  const totalPrice = cartItems
    .map((record) => parseFloat(record.price) * parseFloat(record.quantity))
    .reduce((acc, num) => acc + num, 0);


  return (
    <>
       <div className='container is-fluid is-mobile'>
        <p className='is-size-2'>This is your cart</p>
        <div className='columns'>
            {/* start of inputs  */}
            <div className='column is-half is-vcentered  '>
              <div className='control'>
                  <div className='control'>
                      {renderCartItems}
                  </div>
              </div>

              <div className='is-flex is-centered'>
                <button
                  className=' button is-primary  mt-5'
                  //onClick={submitHandler}
                  >Go Back to Dashboard
                </button>
                {redirect === "wrong" && (
                  <p className='has-text-danger'>You flipped! Try again</p>
                )}
              </div>
          </div>

          {/* start of second column  */}
          <div className='column is-two-fifths is-vcentered '>
            <div className='box with-border'>
                <div className='is-flex'>
                  <figure className='image is-128x128 is-centered'>
                      <img className='is-centered is-rounded' src={music} alt='music' />
                  </figure>
                </div>

            <div className='card-content'>
              <div className='media'>
                <div className="media-left">

              </div>

              <div className='media-content has-text-centered	 '>
                <p className='title is-4'>Order Total </p>
                <p className='title is-2'> 55{totalPrice > 0 ? totalPrice : null}
                {"€"}

                </p>
              <button className='button is-primary mb-2'>Go to Checkout!</button>

              <p className="has-text-black" id="hover">Place your order now and get a
              <span className="tag is-danger"> Michi </span> for free!</p>


              </div>
                </div>
            </div>





            {/* last 2 divs  */}
            </div>
          </div>
          {/* end of second column  */}
        </div>
      </div>


    </>
  );
};

export default Cart;