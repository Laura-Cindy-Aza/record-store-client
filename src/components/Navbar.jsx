import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav>
                <div>
                    <h2>Record Store</h2>
                </div>
                <Link to="/Login">
                    <span>Login</span>
                </Link>
                <Link to="/Signup">
                    <span>Sign up</span>
                </Link>
            </nav>
        </>
    );
};

export default Navbar;
