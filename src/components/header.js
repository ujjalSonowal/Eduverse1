import React from "react";
import "./header.css";
// import Avatar from "@mui/material/Avatar";

const header = () => {
  return (
    <>
      <header>
        <nav>
          <h1> EduVerse </h1>{" "}
          <div className="avtar">
            {" "}
            {/* <Avatar style={{ background: "green" }}> U </Avatar>{" "} */}{" "}
            <h3> Home </h3>{" "}
          </div>{" "}
        </nav>{" "}
      </header>{" "}
    </>
  );
};

export default header;
