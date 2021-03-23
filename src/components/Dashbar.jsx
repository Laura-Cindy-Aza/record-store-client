import React from "react";
import { Link } from "react-router-dom";
import logo from "../statics/logo.png";
import Avatar from 'react-avatar'

function Navbar() {
  return (
    <>
      {/* Logo or brand  */}
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand icon-text'>
          <a
            className='navbar-item1 icon has-text-danger '
            href='http://localhost:3000/'>
               <Avatar twitterHandle="sitebase" size="40" color='#00C4A7'/>
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
              <Link className='button is-primary' to='/'>
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