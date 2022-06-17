import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_start">
          <button>About Us</button>
          <button>Contact Us</button>
          <button>Help center</button>

          <div className="img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png"
              alt=""
              width="50px"
            />
            <img
              className="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png"
              alt=""
              width="45px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
