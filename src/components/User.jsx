import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUserAction } from "../store/actions/usersAction";

function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  // to go back

  const history = useHistory();

  // get user data

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    avatar: "",
  });

  const [avatar, setAvatar] = useState(user.avatar);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    formData.avatar = avatar;
    let filteredFields = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key].length > 0) {
        filteredFields[key] = formData[key];
      }
    });

    dispatch(editUserAction(filteredFields));
    history.push("/dashboard");
  };

  return (
    <>
      <div className='container is-fluid'>
        <div className='columns'>
          <div className='column  is-flex is-justify-content-center is-align-content-center '>
            {/* start of inputs  */}
            <div className='column is-half'>
              <p className='is-size-2'>User Profile update</p>
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
              </div>
            </div>
          </div>

          {/*start of second column  */}
          <div className='column is-half mt-6  is-fluid'>
            <p className='is-size-3'>Choose your avatar</p>
            <div className='card p-6'>
              <figure className='image is-128x128 m-4 '>
                <img
                  className='is-rounded'
                  src={avatar}
                  alt='lady'
                  style={{ border: "5px solid" }}
                />
              </figure>
              <div className='column'>
                <div className='container  is-flex'>
                  <figure
                    name='Guy1'
                    className='image is-128x128 ml-4 is-clickable'
                    onClick={(e) => setAvatar(e.target.src)}>
                    <img
                      className='is-rounded'
                      src='/images/guy1.jpg'
                      alt='lady'
                    />
                  </figure>

                  <figure
                    name='Guy2'
                    className='image is-128x128 ml-4 is-clickable'
                    onClick={(e) => setAvatar(e.target.src)}>
                    <img
                      className='is-rounded'
                      src='/images/guy2.jpg'
                      alt='lady'
                    />
                  </figure>

                  <figure
                    name='Guy3'
                    className='image is-128x128 ml-4 is-clickable'
                    onClick={(e) => setAvatar(e.target.src)}>
                    <img
                      className='is-rounded'
                      src='/images/guy3.jpg'
                      alt='lady'
                    />
                  </figure>

                  <figure
                    name='Lady1'
                    className='image is-128x128 ml-4 is-clickable'
                    onClick={(e) => setAvatar(e.target.src)}>
                    <img
                      className='is-rounded'
                      src='/images/lady1.jpg'
                      alt='lady'
                    />
                  </figure>

                  <figure
                    name='Lady2'
                    className='image is-128x128 ml-4 is-clickable'
                    onClick={(e) => setAvatar(e.target.src)}>
                    <img
                      className='is-rounded'
                      src='/images/lady2.jpg'
                      alt='lady'
                    />
                  </figure>

                  <figure
                    name='Lady3'
                    className='image is-128x128 ml-4 is-clickable'
                    onClick={(e) => setAvatar(e.target.src)}>
                    <img
                      className='is-rounded'
                      src='/images/lady3.jpg'
                      alt='lady'
                    />
                  </figure>

                  <figure
                    name='Guy5'
                    className='image is-128x128 ml-4 is-clickable'
                    onClick={(e) => setAvatar(e.target.src)}>
                    <img
                      className='is-rounded'
                      src='/images/guy5.jpg'
                      alt='lady'
                    />
                  </figure>

                  <figure
                    name='Guy6'
                    className='image is-128x128 ml-4 is-clickable'
                    onClick={(e) => setAvatar(e.target.src)}>
                    <img
                      className='is-rounded'
                      src='/images/guy6.jpg'
                      alt='lady'
                    />
                  </figure>

                  <figure
                    name='Guy7'
                    className='image is-128x128 ml-4 is-clickable'
                    onClick={(e) => setAvatar(e.target.src)}>
                    <img
                      className='is-rounded'
                      src='/images/guy7.jpg'
                      alt='lady'
                    />
                  </figure>

                  <figure
                    name='Lady4'
                    className='image is-128x128 ml-4 is-clickable'
                    onClick={(e) => setAvatar(e.target.src)}>
                    <img
                      className='is-rounded'
                      src='/images/lady4.jpg'
                      alt='lady'
                    />
                  </figure>

                  <figure
                    name='Lady5'
                    className='image is-128x128 ml-4 is-clickable'
                    onClick={(e) => setAvatar(e.target.src)}>
                    <img
                      className='is-rounded'
                      src='/images/lady5.jpg'
                      alt='lady'
                    />
                  </figure>

                  <figure
                    name='Lady6'
                    className='image is-128x128 ml-4 is-clickable'
                    onClick={(e) => setAvatar(e.target.src)}>
                    <img
                      className='is-rounded'
                      src='/images/lady6.jpg'
                      alt='lady'
                    />
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
