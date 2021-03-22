import React, { useState, useEffect, useRef } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../store/actions/authAction";
// import { getUsersAction } from "../store/actions/usersAction";
import { Link } from "react-router-dom";
import music from "../assets/music-6053548_1280.jpg";

// import { useForm } from "react-hook-form";

function Signup() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUsersAction());
  // }, []);

  // to go back
  const history = useHistory();

  // get user data

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    password: "",
  });
  const [redirect, setRedirect] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='container is-fluid'>
        <p className='is-size-2'>Register to buy last Records!</p>
        <div className='columns'>
          <div className='column is-half'>
            {/* start of inputs  */}
            <div className='control mt-3'>
              <div className='field'>
                <label className='label'>First Name</label>
                <div className='control'>
                  <input
                    className='input is-small'
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    placeholder='Jhon'
                    required
                    onChange={changeHandler}
                    ref={inputRef}
                  />
                </div>
              </div>
            </div>

            <div className='control mt-3'>
              <div className='field'>
                <label className='label'>Last Name</label>
                <div className='control'>
                  <input
                    className='input is-small'
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    placeholder='Smith'
                    required
                    onChange={changeHandler}
                    ref={inputRef}
                  />
                </div>
              </div>
            </div>

            <div className='control mt-3'>
              <div className='field'>
                <label className='label'>Email </label>
                <div className='control'>
                  <input
                    className='input is-small'
                    type='email'
                    name='email'
                    value={formData.email}
                    placeholder='Jhon@email.com'
                    required
                    onChange={changeHandler}
                    ref={inputRef}
                  />
                </div>
              </div>
            </div>

            <div className='control mt-3'>
              <div className='field'>
                <label className='label'>Password</label>
                <div className='control'>
                  <input
                    className='input is-small'
                    type='password'
                    name='password'
                    value={formData.password}
                    required
                    onChange={changeHandler}
                    ref={inputRef}
                  />
                </div>
              </div>
            </div>

            <div className='control mt-3'>
              <div className='field'>
                <label className='label'>Confirm Password</label>
                <div className='control'>
                  <input
                    className='input is-small'
                    type='password'
                    name='confirmPassword'
                    // value={formData.password}
                    required
                    onChange={changeHandler}
                    ref={inputRef}
                  />
                </div>
              </div>
            </div>

            <div className='control mt-3'>
              <div className='field'>
                <label className='label'>Nickname</label>
                <div className='control'>
                  <input
                    className='input is-small'
                    type='text'
                    name='nickName'
                    value={formData.nickName}
                    placeholder='wasabis'
                    required
                    onChange={changeHandler}
                    ref={inputRef}
                  />
                </div>
              </div>
            </div>
            {/* end of inputs */}

            {/* start of last p  */}
            <div className='is-flex is-centered'>
              <button
                className=' button is-primary  mt-5'
                onClick={submitHandler}>
                Sign Up!
              </button>
              {redirect === "wrong" && (
                <p className='has-text-danger'>You flipped! Try again</p>
              )}
            </div>
            <div className='columns is-centered'>
              <p className='mt-4'>
                What? You already have an account? Log in{" "}
                <Link to='/login'>here!</Link>
              </p>
            </div>
          </div>
          {/* end of last p  */}

          {/* start of second column  */}
          <div className='column is-half mt-6'>
            <div className='card image'>
              <img className='card' src={music} alt='music' />
            </div>
          </div>
          {/* end of second column  */}
        </div>
      </div>
    </>
  );
}

export default Signup;
