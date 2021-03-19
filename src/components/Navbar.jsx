import React from "react";
import { Link } from "react-router-dom";
import Logo from '../statics/logo.png'

function Navbar() {
  return (
    <>

    {/* Logo or brand  */}
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand icon-text'>
          <a className='navbar-item1 icon has-text-danger ' href='http://localhost:3000/'>

          <img className=' is-large icon-text' src={Logo} alt='logo' />
          <span className=' is-size-5  has-text-weight-medium	'>Vasili's Records </span>
          </a>


      <a role='button' className='navbar-burger has-dropdown is-hoverable' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'  href='/'>
        {/* <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span> */}
      </a>
        </div>
      {/* end of logo/ brand  */}


      {/* Start of right-sided buttons  */}

        <div className='navbar-menu is-active'>
          <div className='navbar-end'>
            <div className="buttons">

              <Link className='button is-primary' to='/login'>
              <span>Login</span>
              </Link>
              <Link className='button is-dark' to='/signup'>
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
