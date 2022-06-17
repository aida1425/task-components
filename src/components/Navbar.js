import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="header">
        <div className="heder_nav">
          <div className="nav">
            <img
              src="https://i.pinimg.com/originals/6f/35/0d/6f350d177d15776f7874b5c4d0e68a5b.jpg"
              alt=""
              width="300px"
            />
            <div className="h1">
              <h1>Social questionnaire!</h1>
            </div>
            <button className="btn">Sign in</button>
            <button className="btn">Sign up</button>
            <button className="btn">Sign in</button>
            <button>Log in as a guest</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
