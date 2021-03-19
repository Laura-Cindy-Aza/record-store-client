import React, { useState, useEffect, useRef } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../store/actions/authAction";
import { getUsersAction } from "../store/actions/usersAction";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";

function Login() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAction())
  }, []);

  // to go back
  const history = useHistory();

  // Redux
  const authenticatedState = useSelector((state) => state.authenticationReducer);

  // get user data
  const usersData = useSelector((state) => {
    return state.usersFromReducer.users
})

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [redirect, setRedirect] = useState("");
  
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.email]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setRedirect(checkLoginInfo());
  };

  const checkLoginInfo = () => {
    // check if user exists
    const permissionCheck = usersData.reduce((accumulator, user) => {
      if (formData.email === user.email && formData.password === user.password) {
        accumulator = "user"
      } return accumulator
    }, "")

    if (permissionCheck === "") {
      return "wrong"
    } else {
      return permissionCheck
    }
  };

  if (redirect === "user") {
    dispatch(userLogin(formData.email))
    return <Redirect to={{ pathname: "/dashboard", email: formData.email }} />;
  }

  return (
    <>
      <div className='container is-fluid'>
        <div style={{ width: "400px", margin: "0 auto", paddingTop: "3rem" }}>
          <p className='is-size-2'>Nice to see you again!</p>
          <div className="control">
            <div>
              <input
                type='email'
                name='email'
                value={formData.email}
                placeholder='Email'
                required
                onChange={changeHandler}
                ref={inputRef}
              />
            </div>
            <div>
              <input
                type='password'
                name='password'
                value={formData.password}
                placeholder='Password'
                required
                onChange={changeHandler}
              />
            </div>
            <div>
              <button onClick={submitHandler}>Log in</button>
              {redirect === "wrong" && <p className="has-text-danger">You flipped! Try again</p>}
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
