import React from "react";
import "./Footer.css";
import Logo from "../../images/Insaid.png";
const Footer = () => {
  return (
    <div className="Footer_container">
      <div className="Footer1">
        <img src={Logo} alt="" />
        <p>Welcome in Insaid Fashion Wear specially designed for your kids</p>
        <h1>Follow Us</h1>
        <ul>
          <li>
            <i className="fa fa-facebook"></i>
          </li>
          <li>
            <i className="fa fa-instagram"></i>
          </li>
          <li>
            <i className="fa fa-twitter"></i>
          </li>
          <li>
            <i className="fa fa-linkedin"></i>
          </li>
        </ul>
      </div>
      <div className="Footer2">
        <h1>Information</h1>
        <ul>
          <li>About Us</li>
          <li>Delivery Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Manufacturer</li>
        </ul>
      </div>

      <div className="Footer3">
        <h1>Customer Service</h1>
        <ul>
          <li>Contact Us</li>
          <li>Returns</li>
          <li>Order History</li>
          <li>Wishlist</li>
          <li>Affiliate</li>
        </ul>
      </div>

      <div className="Footer4">
        <h1>Contact Us</h1>
        <ul>
          <li>Gurugram, Haryana</li>
          <li>+91 7063119228</li>
          <li>admissions@insaid.co</li>
        </ul>
      </div>
      <div className="blank">
        <h1>
          © 2022 INSAID A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
