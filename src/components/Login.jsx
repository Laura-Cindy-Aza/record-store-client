import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lady from "../assets/lady-headphones.jpg";

// import { useForm } from "react-hook-form";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='container is-fluid'>
        <div className='columns'>
          <div
            className='column is-half'
            style={{ width: "400px", margin: "0 auto", paddingTop: "3rem" }}>
            <p className='is-size-2'>Nice to see you again!</p>

            <div className='control mt-3'>
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
                  className='input mt-4'
                  type='password'
                  name='password'
                  value=''
                  placeholder='Password'
                  required
                />
              </div>
              <div className='is-flex is-centered'>
                <button
                  className=' button is-primary  mt-5'
                  onClick={submitHandler}>
                  Log in
                </button>
              </div>
              <div className='columns is-centered'>
                <p className='mt-4'>
                  What? You don't have an acount? Create one{" "}
                  <Link to='/signup'>here!</Link>
                </p>
              </div>
            </div>
          </div>
          <div className='column is-half mt-4 opcity-'>
            <div className='card'>
              <img className='card' src={Lady} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
