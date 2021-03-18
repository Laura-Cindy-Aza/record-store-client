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
          <form>
            <div>
              <input
                type='email'
                name='email'
                value=''
                placeholder='Email'
                required
              />
            </div>
            <div>
              <input
                type='password'
                name='password'
                value=''
                placeholder='Password'
                required
              />
            </div>
            <div>
              <button onClick={submitHandler}>Log in</button>
            </div>
            <div>
              <p>
                What? You don't have an acount? Create one{" "}
                <Link to='/signup'>here!</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
