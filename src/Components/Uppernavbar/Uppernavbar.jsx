import React from "react";
import "./Uppernavbar.css";

const Uppernavbar = () => {
  return (
    <div className="Uppernavbar_container">
      <div className="Uppernavbar_left">
        <ul>
          <li>+91 7063119228</li>
          <li>admissions@insaid.co</li>
        </ul>
      </div>
      <div className="Uppernavbar_right">
        <ul>
          <li>Connect with us</li>
          <li>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Uppernavbar;
