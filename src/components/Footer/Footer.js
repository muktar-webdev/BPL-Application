import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="section-container">
        <div className="bpl one-fourth-width">
          <h2>BPL</h2>
        </div>
        <div className="home one-fourth-width">
          <h4>Home</h4>
          <p>News</p>
          <p>Features</p>
          <p>Press Realeases</p>
        </div>
        <div className="video one-fourth-width">
          <h4>Videos</h4>
          <p>Latest Videos</p>
          <p>highlights</p>
          <p>Features & Interviews</p>
        </div>
        <div className="other one-fourth-width">
          <h4>Others</h4>
          <p>About</p>
          <p>BCB Constitution</p>
          <p>Venues</p>
        </div>
      </section>
      {/* --Social Icons--// */}
      <section className="social-icons">
        <FontAwesomeIcon className="icon twitter" icon={faTwitter} />
        <FontAwesomeIcon className="icon facebook" icon={faFacebook} />
        <FontAwesomeIcon className="icon instragram" icon={faInstagram} />
        <FontAwesomeIcon className="icon youtube" icon={faYoutube} />
      </section>
      {/* --Credit -- */}
      <section className="credit">
        <p>
          &copy; Copyright BPL 2021.All Rights Reserved || Nishat Hasan Muktar
        </p>
      </section>
    </div>
  );
};

export default Footer;
