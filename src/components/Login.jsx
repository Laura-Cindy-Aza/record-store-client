import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLoginAction } from "../store/actions/authAction";
import { Link } from "react-router-dom";
import Lady from "../assets/lady-headphones.jpg";
import Navbar from "./Navbar";

function Login() {
  const dispatch = useDispatch();

  // to go back
  const history = useHistory();

  // Redux
  const user = useSelector((state) => state.user.user);

  const [formData, setFormData] = useState({ email: "", password: "" });

  const inputRef = useRef();

  useEffect(() => {
    console.log("WTF?");
    user.avatar && history.push("/dashboard");
  }, [user, history]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(userLoginAction(formData));
  };

  //Rendering part!!!!

  return (
    <>
      <Navbar />
      <div className='container is-fluid'>
        <div className='columns'>
          <div
            className='column is-half is-justify-content-center is-align-content-center'
            style={{ width: "400px", margin: "0 auto", paddingTop: "3rem" }}>
            <p className='is-size-2'>Nice to see you again!</p>
            <form onSubmit={submitHandler} noValidate>
              <div className='control mt-3'>
                <input
                  className='input'
                  type='email'
                  name='email'
                  value={formData.email}
                  placeholder='Email'
                  required
                  onChange={changeHandler}
                  ref={inputRef}
                />
                <div>
                  <input
                    className='input mt-4'
                    type='password'
                    name='password'
                    value={formData.password}
                    placeholder='Password'
                    required
                    onChange={changeHandler}
                  />
                </div>

                <div className='is-flex is-centered'>
                  <button className=' button is-primary is-block  is-fullwidth mt-4'>
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
            </form>
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
  //end of rendering part!!!!
}

export default Login;
