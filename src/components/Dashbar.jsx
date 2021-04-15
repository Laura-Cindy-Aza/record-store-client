import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../statics/logo.png";
import Avatar from "react-avatar";
import { logoutUserAction } from "../store/actions/authAction";
import { useSelector, useDispatch } from "react-redux";
import { MdShoppingBasket } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import Cart from "./Cart";

function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => {
    return state.cartFromReducer.cartItems;
  });

  const HandleLogout = () => {
    dispatch(logoutUserAction());
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
            <Avatar twitterHandle='sitebase' size='40' color='#00C4A7' />
            <span className=' is-size-5  has-text-weight-medium	 ml-2'>
              Vasili's Records{" "}
            </span>
          </a>
        </div>
        {/* end of logo/ brand  */}

        {/* Start of right-sided buttons  */}

        <div className='navbar-menu is-active'>
          <div className='navbar-end'>
            <div className='buttons'>
              <Link to='/cart'>
                <span className='icon-text has-text-info mr-4'>
                  <span class='icon '>
                    <MdShoppingBasket class='fas fa-info-circle' />
                  </span>
                  <span>Basket</span>
                  <span title='Badge top right' className='badge'>
                    ({cartItems.length})
                  </span>
                </span>
              </Link>
              <Link to='/user'>
                <span className='icon-text has-text-success mr-4'>
                  <span class='icon '>
                    <BiUser class='fas fa-info-circle' />
                  </span>
                  <span>Profile</span>
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
