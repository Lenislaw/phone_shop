import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

const Logout = ({ type, history }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      {type === "icon" && (
        <div onClick={logoutHandler}>
          <i className="fas fa-sign-out-alt"></i>
        </div>
      )}
      {type === "text" && <div onClick={logoutHandler}>Logout</div>}
    </>
  );
};

export default Logout;
