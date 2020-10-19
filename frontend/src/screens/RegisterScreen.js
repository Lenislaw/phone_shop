import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import AlertMessage from "../components/AlertMessage";
import Spinner from "../components/Spinner";

const RegisterScreen = ({ location }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const showPasswordHandler = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const showConfirmPasswordHandler = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      // dispatch(register(name, email, password));
      console.log("register");
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
            {error && <AlertMessage variant="danger">{error}</AlertMessage>}
            {loading && <Spinner />}
            <form className="form" onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  className="form-group-input"
                  type="name"
                  value={name}
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
                    className={showConfirmPassword ? "far fa-eye-slash" : "far fa-eye"}
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
              <Link to="/user/Login"> LOGIN!</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
