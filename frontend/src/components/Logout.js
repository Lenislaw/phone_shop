import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Logout = ({ type }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    console.log("out");
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
