import React from "react";
import { Link } from "react-router-dom";
import logo from "../statics/logo.svg";

function Navbar() {
  return (
    <>
      {/* Logo or brand  */}
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='http://localhost:3000/'>
            <img src={logo} alt='logo' />
          </a>

          <a
            role='button'
            className='navbar-burger has-dropdown is-hoverable'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
            href='/'>
            {/* <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span> */}
          </a>
        </div>
        {/* end of logo/ brand  */}

        {/* Start of right-sided buttons  */}

        <div className='navbar-menu is-active'>
          <div className='navbar-end'>
            <div className='buttons'>
              <Link className='button is-primary' to='/login'>
                <span>Log in</span>
              </Link>
              <Link className='button is-dark mr-3' to='/signup'>
                <span>Sign up</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
