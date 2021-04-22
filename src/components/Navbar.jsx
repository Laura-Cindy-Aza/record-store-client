import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import logo from "../statics/logo.png";
import { logoutUserAction } from "../store/actions/authAction";
import { emptyCart } from "../store/actions/cartAction";

function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const avatarUser = useSelector((state) => state.user.user.avatar);
  const cartItems = useSelector((state) => {
    return state.cart.cartItems;
  });

  const itemsInCart = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

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
          <a
            className='navbar-item1 icon has-text-danger '
            href='http://localhost:3000/'>
            <img className=' is-large icon-text' src={logo} alt='logo' />
            <span className=' is-size-5  has-text-weight-medium	'>
              Vasili's Records{" "}
            </span>
          </a>
        </div>
        {/* end of logo/ brand  */}

        {/* Start of right-sided buttons  */}

        {!avatarUser && (
          <div className='navbar-menu is-active'>
            <div className='navbar-end'>
              <div className='buttons'>
                <Link className='button is-primary' to='/login'>
                  <span>Login</span>
                </Link>
                <Link className='button is-dark' to='/signup'>
                  <span>Sign up</span>
                </Link>
              </div>
            </div>
          </div>
        )}
        {avatarUser && (
          <div className='navbar-menu is-active'>
            <div className='navbar-end'>
              <div className='buttons'>
                <figure className='image is-32x32 m-4  '>
                  <img
                    className='is-rounded'
                    src={avatarUser}
                    alt='avatar'
                    style={{ border: "2px solid" }}
                  />
                </figure>
                <Link to='/user'>
                  <span className='icon-text has-text-success mr-4'>
                    Profile
                  </span>
                </Link>
                <Link to='/cart'>
                  <span className='icon-text has-text-info mr-4'>
                    <span class='icon '>
                      <MdShoppingBasket class='fas fa-info-circle' />
                    </span>
                    <span>Cart</span>
                    <span title='Badge top right' className='badge'>
                      ({itemsInCart})
                    </span>
                  </span>
                </Link>

                <Link onClick={HandleLogout} className='button is-primary mr-4'>
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
