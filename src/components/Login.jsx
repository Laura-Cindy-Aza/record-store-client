import React, { useState, useEffect, useRef } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../store/actions/authAction";
import { getUsersAction } from "../store/actions/usersAction";
import { Link } from "react-router-dom";
import Lady from "../assets/lady-headphones.jpg";

// import { useForm } from "react-hook-form";

function Login() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  // to go back
  const history = useHistory();

  // Redux
  const authenticatedState = useSelector(
    (state) => state.authenticationReducer
  );

  // get user data
  const usersData = useSelector((state) => {
    return state.usersFromReducer.users;
  });

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [redirect, setRedirect] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setRedirect(checkLoginInfo());
  };

  const checkLoginInfo = () => {
    // check if user exists
    const permissionCheck = usersData.reduce((accumulator, user) => {
      if (
        formData.email === user.email &&
        formData.password === user.password
      ) {
        accumulator = "user";
      }
      return accumulator;
    }, "");

    if (permissionCheck === "") {
      return "wrong";
    } else {
      return permissionCheck;
    }
  };

  if (redirect === "user") {
    dispatch(userLogin(formData.email));
    return <Redirect to={{ pathname: "/dashboard", email: formData.email }} />;
  }

  return (
    <>
      <div className='container is-fluid'>
        <div className='columns'>
          <div
            className='column is-half'
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
                  {redirect === "wrong" && (
                    <p className='has-text-danger'>You flipped! Try again</p>
                  )}
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
}

export default Login;
