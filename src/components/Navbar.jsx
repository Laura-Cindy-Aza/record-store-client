import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div>
          <h2>Record Store</h2>
        </div>

        <Link className='button is-light' to='/Login'>
          <span>Login</span>
        </Link>
        <Link className='button is-dark' to='/Signup'>
          <span>Sign up</span>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
