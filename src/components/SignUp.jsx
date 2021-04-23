import React, { useState, useEffect, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../store/actions/authAction";
import music from "../assets/music-6053548_1280.jpg";
import { addUserAction } from "../store/actions/usersAction";

function Signup() {
  const dispatch = useDispatch();
  const inputRef = useRef();

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

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addUserAction(formData));
    dispatch(userLoginAction(formData));
    history.push("/dashboard");
  };

  return (
    <>
      <div className='container is-fluid'>
        <p className='is-size-2'>Register to buy last Records!</p>
        <div className='columns'>
          <div className='column is-half is-flex is-align-content-center is-justify-content-center	'>
            {/* start of inputs  */}
            <div className='column is-half '>
              <div className='control mt-3'>
                <div className='field'>
                  <label className='label'>First Name</label>
                  <div className='control'>
                    <input
                      className='input'
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
                      className='input'
                      type='text'
                      name='lastName'
                      value={formData.lastName}
                      placeholder='Smith'
                      required
                      onChange={changeHandler}
                    />
                  </div>
                </div>
              </div>

              <div className='control mt-3'>
                <div className='field'>
                  <label className='label'>Email </label>
                  <div className='control'>
                    <input
                      className='input'
                      type='email'
                      name='email'
                      value={formData.email}
                      placeholder='Jhon@email.com'
                      required
                      onChange={changeHandler}
                    />
                  </div>
                </div>
              </div>

              <div className='control mt-3'>
                <div className='field'>
                  <label className='label'>Password</label>
                  <div className='control'>
                    <input
                      className='input'
                      type='password'
                      name='password'
                      value={formData.password}
                      required
                      onChange={changeHandler}
                    />
                  </div>
                </div>
              </div>
              <div className='control mt-3'>
                <div className='field'>
                  <label className='label'>Nickname</label>
                  <div className='control'>
                    <input
                      className='input'
                      type='text'
                      name='nickName'
                      value={formData.nickName}
                      placeholder='wasabis'
                      required
                      onChange={changeHandler}
                    />
                  </div>
                </div>
              </div>
              <div className='is-flex is-centered'>
                <button
                  className=' button is-primary  mt-5'
                  onClick={submitHandler}>
                  Sign Up!
                </button>
              </div>
              <div className='columns is-centered'>
                <p className='mt-4'>
                  What? You already have an account? Log in{" "}
                  <Link to='/login'>here!</Link>
                </p>
              </div>
            </div>
          </div>

          {/* <div className='control mt-3'>
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
                  />
                </div>
              </div>
            </div> */}

          {/* end of inputs */}

          {/* start of last p  */}

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
