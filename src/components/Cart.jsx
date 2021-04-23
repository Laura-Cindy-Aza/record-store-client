import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import music from "../statics/logo.png";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  emptyCart,
} from "../store/actions/cartAction";
import { MdAdd, MdRemove } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState("");

  const cartItems = useSelector((state) => state.cart.cartItems);

  //const cartItems = useSelector((state) => state.cartFromReducer.cartItems);

  const renderCartItems = cartItems.map((record, index) => (
    <div key={index} className='columns'>
      <div className='column card '>
        {/* card records header!  */}

        <section className='section products-table '>
          <div className='columns table-header'>
            <div className='column '>Cover</div>
            <div className='column'>Description</div>
            <div className='column'>Quantity</div>
            <div className='column'>Price</div>
            <div className='column'>Subtotal</div>
          </div>

          {/* card records info */}
          <div id='shopping-cart'>
            <div>
              <div className='columns product-row'>
                <div className='column product-image'>
                  <figure>
                    <img width='100px' src={record.cover} alt='cover' />
                  </figure>
                </div>

                <div className='column'>
                  <p>{record.title}</p>
                  <p>{record.artist}</p>
                </div>

                <div className='column center-container'>
                  <span className='mobile-table-heading'> </span>

                  <p>{record.quantity}</p>
                </div>

                <div className='column center-container'>
                  <span className='mobile-table-heading'>
                    {" "}
                    € {record.price}
                  </span>
                </div>

                <div className='column center-container'>
                  <span className='mobile-table-heading'>
                    {" "}
                    € {record.quantity * record.price}
                  </span>
                </div>
              </div>
            </div>

            <section className='columns product-row'>
              <button
                className='button  is-light is-primary '
                onClick={() => dispatch(increaseQuantity(record._id))}>
                <MdAdd />
              </button>
              <button
                className='button  is-light is-primary '
                onClick={() => dispatch(decreaseQuantity(record._id))}>
                <MdRemove />
              </button>
            </section>
          </div>
        </section>

        {/* closing column divs => */}
      </div>
    </div>
  ));

  return (
    <>
      <div className='container is-fluid is-mobile'>
        <p className='is-size-2 mb-2'>Enjoy your music! 🎵 </p>
        <div className='columns'>
          {/* start of inputs  */}
          <div className='column is-half is-vcentered  '>
            <div className='control'>
              <div className='control'>{renderCartItems}</div>
            </div>

            {/* buttons! */}
            <div className='column submit-form'>
              <div className='field is-grouped'>
                <Link to='/dashboard'>
                  <button className='button is-dark'>Back to Shop</button>
                </Link>

                <Link to='/checkout'>
                  <button className='button is-primary'>Go to Checkout </button>
                </Link>
              </div>
            </div>
          </div>

          {/* start of second column  */}
          <div className='column is-two-fifths is-vcentered '>
            <div className='box with-border'>
              <div className='is-flex'>
                <figure className='image is-128x128 is-centered'>
                  <img
                    className='is-centered is-rounded'
                    src={music}
                    alt='music'
                  />
                </figure>
              </div>

              <div className='card-content'>
                <div className='media'>
                  <div className='media-left'></div>

                  <div className='media-content has-text-centered	 '>
                    <p className='title is-4'>Order Total </p>
                    <p className='title is-2'> {"€"}</p>

                    <Link to='checkout'>
                      <button className='button is-primary mb-2'>
                        Go to Checkout!
                      </button>
                    </Link>
                    <button
                      onClick={() => dispatch(emptyCart())}
                      className='button is-danger mb-2'>
                      Empty cart!
                    </button>

                    <p className='has-text-black' id='hover'>
                      Place your order now and get a
                      <span className='tag is-danger'> Michi </span> for free!
                    </p>
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
