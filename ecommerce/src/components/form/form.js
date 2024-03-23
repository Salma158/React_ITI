import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../store/userSlice";
import { Link } from "react-router-dom";

function Form() {
  const dispatch = useDispatch();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
  });

  const [userInfoErrs, setUserInfoErrors] = useState({
    nameErr: "",
    emailErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
    imageErr: "",
  });

  useEffect(() => {
    if (
      !userInfoErrs.nameErr &&
      !userInfoErrs.emailErr &&
      !userInfoErrs.passwordErr &&
      !userInfoErrs.confirmPasswordErr &&
      !userInfoErrs.imageErr &&
      isFormSubmitted
    ) {
      dispatch(getUserInfo(userInfo));
      console.log("success !");
    }
  }, [userInfoErrs]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setUserInfo({
          ...userInfo,
          name: e.target.value,
        });
        break;

      case "email":
        setUserInfo({
          ...userInfo,
          email: e.target.value,
        });
        break;

      case "password":
        setUserInfo({
          ...userInfo,
          password: e.target.value,
        });
        break;

      case "confirmPassword":
        setUserInfo({
          ...userInfo,
          confirmPassword: e.target.value,
        });
        break;
      case "image":
        setUserInfo({
          ...userInfo,
          image: e.target.files[0],
        });
        break;
    }
  };

  const validateForm = () => {
    setUserInfoErrors({
      nameErr: userInfo.name.trim() === "" ? "Name is required" : "",
      emailErr:
        userInfo.email.trim() === ""
          ? "Email is required"
          : !/^\S+@\S+\.\S+$/.test(userInfo.email.trim())
          ? "Invalid email format"
          : "",
      passwordErr:
        userInfo.password.length < 8 || userInfo.password.length > 12
          ? "Password must be between 8 and 12 characters"
          : "",
      confirmPasswordErr:
        userInfo.confirmPassword !== userInfo.password
          ? "Passwords do not match"
          : "",
      imageErr: !userInfo.image ? "Image is required" : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    validateForm();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "350px",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div className="form-group">
          <label
            style={{
              marginBottom: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="name"
            style={{
              fontSize: "14px",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {userInfoErrs.nameErr && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
              {userInfoErrs.nameErr}
            </p>
          )}
        </div>

        <div className="form-group">
          <label
            style={{
              marginBottom: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            name="email"
            style={{
              fontSize: "14px",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {userInfoErrs.emailErr && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
              {userInfoErrs.emailErr}
            </p>
          )}
        </div>

        <div className="form-group">
          <label
            style={{
              marginBottom: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            onChange={handleChange}
            name="password"
            style={{
              fontSize: "14px",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {userInfoErrs.passwordErr && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
              {userInfoErrs.passwordErr}
            </p>
          )}
        </div>

        <div className="form-group">
          <label
            style={{
              marginBottom: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Confirm Password:
          </label>
          <input
            type="password"
            className="form-control"
            onChange={handleChange}
            name="confirmPassword"
            style={{
              fontSize: "14px",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {userInfoErrs.confirmPasswordErr && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
              {userInfoErrs.confirmPasswordErr}
            </p>
          )}
        </div>

        <div className="form-group">
          <label
            style={{
              marginBottom: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Upload Image:
          </label>
          <input
            type="file"
            className="form-control-file"
            onChange={handleChange}
            name="image"
            style={{
              fontSize: "14px",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {userInfoErrs.imageErr && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
              {userInfoErrs.imageErr}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{
            fontSize: "16px",
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Submit
        </button>
      </form>
      <Link to="/userInfo">
        <h1 className="m-6">User Info</h1>
      </Link>
    </div>
  );
}

export default Form;
