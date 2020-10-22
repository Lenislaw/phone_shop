import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AlertMessage from "../components/AlertMessage";
import Spinner from "../components/Spinner";
import { login } from "../actions/userActions";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const showPasswordHandler = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <div className="login">
        <div className="login-item">
          <h5 className="login-item-heading">Login</h5>
        </div>
        <div className="login-item">
          <div className="login-item-box">
            {loading && <Spinner />}
            <form className="form" onSubmit={submitHandler}>
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

              <button type="submit" className="btn btn-submit">
                Login
              </button>
              {error && <AlertMessage type="warning" text={error} />}
            </form>
            <small className="switch">
              Don't have account yet?
              <Link to="/user/register"> REGISTER!</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
