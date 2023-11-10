import React from "react";
import "./header.css";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
const header = () => {
  return (
    <>
      <div className="navbar">
        <div className="dropdown">
          <button class="dropbtn">
            <Avatar style={{ background: "green" }}> U </Avatar>{" "}
            {/* <i className = "fa fa-caret-down"></i>*/}{" "}
          </button>{" "}
          <div className="dropdown-content">
            <a href="/"> Profile </a>
            <a href="/"> Logout </a>{" "}
          </div>{" "}
        </div>{" "}
        <a href="/"> Home </a>
        <a href="/">
          {" "}
          Calender{" "}
        </a> {/* < a href = " / " > Enrolled < /a> */} {""}
        <div style={{ marginTop: "14px" }} className="dropdown">
          <button className="dropbtn">
            {" "}
            <AddIcon />
          </button>{" "}
          <div className="dropdown-content">
            <a href="/"> Join Course </a>
            <a href="/"> Create Course </a>{" "}
          </div>{" "}
        </div>{" "}
        <h1> EduVerse </h1>{" "}
      </div>{" "}
    </>
  );
};

export default header;
