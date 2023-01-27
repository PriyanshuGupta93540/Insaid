import React from "react";
import Navbar from "../Navbar/Navbar";
import Uppernavbar from "../Uppernavbar/Uppernavbar";
import I91 from "../../images/91.jpg";
import I92 from "../../images/Insaid.png";
import "./Contactus.css";
import Footer from "../../Components/Footer/Footer";

const Contactus = () => {
  return (
    <div>
      <Uppernavbar />
      <Navbar />
      <div className="Contactus">
        <img src={I91} alt="" />
        <img src={I92} alt="" />
        <h1>Contact Us</h1>
      </div>
      <div className="Contactus_Inner">
        <div className="Contactus_phone">
          <h1>Address</h1>
          <h2>Phone & Email</h2>
          <h3>+91 7063119228 </h3>
          <h3>info@example.com</h3>
        </div>
        <div className="Contactus_address">
          <h1>Our Store Address</h1>
          <h2>Gurugram Headquarters</h2>
          <h2>Haryana, India</h2>
        </div>
        <div className="Store_timings">
          <h1>Address</h1>
          <h2>Phone & Email</h2>
          <h2>+91 9625811095</h2>
          <h2>admissions@insaid.co</h2>
        </div>

        <div className="complaint_container">
          <div className="complaint">
            <h1>Leave A Message</h1>
          </div>
          <div className="complaint_heading">
            <h4>We'd love to hear from you!</h4>
          </div>
          <div className="complaint_start1">
            <div className="complaint_start2">
              <div className="complaint_input">
                <input type="text" placeholder="Full Name" required />
              </div>
            </div>
            <div className="complaint_start2">
              <div className="complaint_input">
                <input type="text" placeholder="Email" required />
              </div>
            </div>
            <div className="complaint_start2">
              <div className="complaint_input">
                <input type="text" placeholder="Phone Number" required />
              </div>
            </div>
            <div className="complaint_start2">
              <div className="complaint_input">
                <textarea required placeholder="Message"></textarea>
              </div>
            </div>
            <div className="Button">
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="blank">
        <Footer />
      </div>
    </div>
  );
};

export default Contactus;
