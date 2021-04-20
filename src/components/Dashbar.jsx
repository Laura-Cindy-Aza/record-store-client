import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../statics/logo.png";
import Avatar from "react-avatar";
import { logoutUserAction } from "../store/actions/authAction";
import { emptyCart } from "../store/actions/cartAction";
import { useSelector, useDispatch } from "react-redux";
import { MdShoppingBasket } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import Cart from "./Cart";

function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const avatarUser = useSelector((state) => state.user.user.avatar);
  const cartItems = useSelector((state) => {
    return state.cart.cartItems;
  });

  const HandleLogout = () => {
    dispatch(logoutUserAction());
    dispatch(emptyCart());
    history.push("/");
  };

  return (
    <>
      {/* Logo or brand  */}
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand icon-text'>
          <Link className='navbar-item1 icon has-text-danger ' to='/'>
            <img className=' is-large icon-text' src={logo} alt='logo' />
            <span className=' is-size-5  has-text-weight-medium	'>
              Vasili's Records{" "}
            </span>
          </Link>
        </div>
        {/* end of logo/ brand  */}

        {/* Start of right-sided buttons  */}

        <div className='navbar-menu is-active'>
          <div className='navbar-end'>
            <div className='buttons'>
              <figure className='image is-32x32 m-4 '>
                <img
                  className='is-rounded'
                  src={avatarUser}
                  alt='avatar'
                  style={{ border: "2px solid" }}
                />
              </figure>
              <Link to='/user'>
                <span className='icon-text has-text-success mr-4'>
                  <span class='icon '>
                    <BiUser class='fas fa-info-circle' />
                  </span>
                  <span>Profile</span>
                </span>
              </Link>
              <Link to='/cart'>
                <span className='icon-text has-text-info mr-4'>
                  <span class='icon '>
                    <MdShoppingBasket class='fas fa-info-circle' />
                  </span>
                  <span>Cart</span>
                  <span title='Badge top right' className='badge'>
                    ({cartItems.length})
                  </span>
                </span>
              </Link>

              <Link onClick={HandleLogout} className='button is-primary mr-4'>
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
