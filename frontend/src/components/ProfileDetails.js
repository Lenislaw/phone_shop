import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../actions/userActions";
import AlertMessage from "../components/AlertMessage";

const ProfileDetails = ({ user }) => {
  const dispatch = useDispatch();

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };
  return (
    <div>
      <>
        <div className="profile">
          <div className="profile-item">
            <div className="profile-item-box">
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
                      className={
                        showPassword ? "far fa-eye-slash" : "far fa-eye"
                      }
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
                  Update Profile
                </button>
                {success && (
                  <AlertMessage
                    variant="success"
                    text={"Profile updated sucessful!"}
                  />
                )}
                {message && <AlertMessage type="warning" text={message} />}
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProfileDetails;
