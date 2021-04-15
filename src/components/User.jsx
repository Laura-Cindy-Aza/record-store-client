import React, { useState, useEffect, useRef } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../store/actions/authAction";
import Lady from "../assets/lady-headphones.jpg";
import Guy1 from "../assets/guy";
import Guy2 from "../assets/guy2";
import Guy3 from "../assets/guy3";
import Lady1 from "../assets/lady";
import Lady2 from "../assets/lady2";
import Lady3 from "../assets/lady3";

import { editUserAction } from "../store/actions/usersAction";
import Dashbar from "./Dashbar";

// import { useForm } from "react-hook-form";

function User() {
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
  });
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
    dispatch(editUserAction(formData));
    dispatch(userLoginAction(formData));
  };

  return (
    <>
      <Dashbar />
      <div className='container is-fluid'>
        <p className='is-size-2'>User Profile update</p>
        <div className='columns'>
          <div className='column is-half'>
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
                  Save
                </button>
                {redirect === "wrong" && (
                  <p className='has-text-danger'>You flipped! Try again</p>
                )}
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
            <div className='card '>
              <figure className='image is-128x128'>
                <img className='is-rounded' src={Lady} alt='lady' />
              </figure>
              <div className='tile is-ancestor'>
                <div className='tile'>
                  <figure className='image is-128x128'>
                    <img className='is-rounded' src={Guy1} alt='lady' />
                  </figure>
                </div>
                <div className='tile'>
                  <figure className='image is-128x128'>
                    <img className='is-rounded' src={Lady1} alt='lady' />
                  </figure>
                </div>
                <div className='tile'>
                  <figure className='image is-128x128'>
                    <img className='is-rounded' src={Guy2} alt='lady' />
                  </figure>
                </div>
                <div className='tile'>
                  <figure className='image is-128x128'>
                    <img className='is-rounded' src={Lady2} alt='lady' />
                  </figure>
                </div>
                <div className='tile'>
                  <figure className='image is-128x128'>
                    <img className='is-rounded' src={Guy3} alt='lady' />
                  </figure>
                </div>
                <div className='tile'>
                  <figure className='image is-128x128'>
                    <img className='is-rounded' src={Lady3} alt='lady' />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          {/* end of second column  */}
        </div>
      </div>
    </>
  );
}

export default User;
