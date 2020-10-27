import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AlertMessage from "../components/AlertMessage";
import Spinner from "../components/Spinner";
import { register } from "../actions/userActions";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo: userInfoLogin } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfoLogin) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect, userInfoLogin]);

  const showPasswordHandler = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const showConfirmPasswordHandler = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validName = (name) => {
    if (3 >= name.length) {
      nameRef.current.focus();
      setMessage("Name has to be between 4 - 12 characters!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      return true;
    }
  };

  const validEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(email)) {
      return true;
    } else {
      emailRef.current.focus();
      setMessage("Email has wrong format!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return false;
    }
  };

  const validPassword = (password, confirmPassword) => {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (passwordPattern.test(password)) {
      if (password !== confirmPassword) {
        passwordRef.current.focus();
        setMessage("Passwords do not match!");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } else {
        return true;
      }
    } else {
      setMessage(
        "Passwords have to contains minimum eight characters, at least one letter and one number"
      );
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validName(name);
    validEmail(email);
    validPassword(password, confirmPassword);
    if (
      validName(name) &&
      validEmail(email) &&
      validPassword(password, confirmPassword)
    ) {
      dispatch(register(name, email, password));
    }
  };

  return (
    <>
      <div className="register">
        <div className="register-item">
          <h5 className="register-item-heading">Register</h5>
        </div>
        <div className="register-item">
          <div className="register-item-box">
            {error && <AlertMessage type={error}>{error}</AlertMessage>}
            {loading && <Spinner />}
            <form className="form" onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  className="form-group-input"
                  type="name"
                  value={name}
                  ref={nameRef}
                  required
                  autoComplete="true"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <label htmlFor="name" className="form-group-label">
                  <span className="content">
                    <i className="fas fa-user"></i> Name
                  </span>
                </label>
              </div>

              <div className="form-group">
                <input
                  className="form-group-input"
                  type="emailAddress"
                  value={email}
                  ref={emailRef}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label htmlFor="emailAddress" className="form-group-label">
                  <span className="content">
                    <i className="fas fa-user"></i> Email Address
                  </span>
                </label>
              </div>

              <div className="form-group">
                <input
                  className="form-group-input"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  ref={passwordRef}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <label htmlFor="password" className="form-group-label">
                  <span className="content">
                    <i className="fas fa-key"></i> Password
                  </span>
                </label>
                <button className="btn-eye" onClick={showPasswordHandler}>
                  <i
                    className={showPassword ? "far fa-eye-slash" : "far fa-eye"}
                  ></i>
                </button>
              </div>

              <div className="form-group">
                <input
                  className="form-group-input"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
                <label htmlFor="password" className="form-group-label">
                  <span className="content">
                    <i className="fas fa-key"></i> Confirm Password
                  </span>
                </label>
                <button
                  className="btn-eye"
                  onClick={showConfirmPasswordHandler}
                >
                  <i
                    className={
                      showConfirmPassword ? "far fa-eye-slash" : "far fa-eye"
                    }
                  ></i>
                </button>
              </div>
              <button type="submit" className="btn btn-submit">
                Register
              </button>
              {message && <AlertMessage type="warning" text={message} />}
            </form>
            <small className="switch">
              Have already an account?
              <Link to="/user/login"> LOGIN!</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
