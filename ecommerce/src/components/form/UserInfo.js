import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function UserInfo() {
  const userInfo = useSelector((state) => state.userSlice.userData);
  return (
    <>
      <p>Name : {userInfo.name}</p>
      <p>Email : {userInfo.email}</p>

      <div>UserInfo</div>
      <Link
        to="/login"
        className="text-decoration-none text-center d-inline-block fs-3 "
      >
        <div>Back to Login</div>
      </Link>
    </>
  );
}

export default UserInfo;
