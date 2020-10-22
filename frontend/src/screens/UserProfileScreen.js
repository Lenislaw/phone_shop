import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../actions/userActions";
import ProfileDetails from "../components/ProfileDetails";
import Spinner from "../components/Spinner";
import AlertMessage from "../components/AlertMessage";

const UserProfileScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    if (!userInfo) {
      history.push("/user/login");
    } else {
      dispatch(getUserDetails("profile"));
      // dispatch(listMyOrders())
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      <h1>Your Profile</h1>

      {error && <AlertMessage type="warning" text={error} />}
      {loading ? <Spinner /> : <ProfileDetails user={user} />}
    </>
  );
};

export default UserProfileScreen;
