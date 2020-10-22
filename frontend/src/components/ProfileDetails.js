import React from "react";
import ProfileDetailsNavigation from "./ProfileDetailsNavigation";

const ProfileDetails = ({ user }) => {
  return (
    <div>
      <div className="profile-navigation">
        <ProfileDetailsNavigation user={user} />
      </div>
    </div>
  );
};

export default ProfileDetails;
