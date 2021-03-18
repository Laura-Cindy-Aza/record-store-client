import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='container is-fluid'>
        <div style={{ width: "400px", margin: "0 auto", paddingTop: "3rem" }}>
          <p className='is-size-2'>Nice to see you again!</p>

          <div className='control'>
            <input
              className='input'
              type='email'
              name='email'
              value=''
              placeholder='Email'
              required
            />
            <div>
              <input
                className='input'
                type='password'
                name='password'
                value=''
                placeholder='Password'
                required
              />
            </div>
            <div>
              <button
                className='button is-primary is-centered'
                onClick={submitHandler}>
                Log in
              </button>
            </div>
            <div>
              <p>
                What? You don't have an acount? Create one{" "}
                <Link to='/signup'>here!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
