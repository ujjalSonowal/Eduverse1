import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  return (
    <>
      <section>
        <div className="form_data">
          <div className="from_heading">
            <h1> Sign Up </h1>{" "}
          </div>{" "}
          <form>
            <div className="form_input">
              <label htmlFor="name"> Name </label>{" "}
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your fullname"
              />{" "}
              <label htmlFor="RollNo"> Roll No. </label>{" "}
              <input
                type="text"
                name="rollno"
                id="rollno"
                placeholder="Enter your email id"
              />{" "}
              <label htmlFor="password"> Password </label>{" "}
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />{" "}
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {" "}
                  {!passShow ? "Show" : "Hide"}{" "}
                </div>{" "}
              </div>{" "}
              <label htmlFor="confirm_password"> Confirm Password </label>{" "}
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Enter your confirm password"
                />{" "}
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {" "}
                  {!passShow ? "Show" : "Hide"}{" "}
                </div>{" "}
              </div>{" "}
              <button className="btn" type="submit">
                {" "}
                Sign Up{" "}
              </button>{" "}
              <p>
                Already have an account ?{" "}
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  Login{" "}
                </NavLink>{" "}
              </p>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
};

export default Register;
