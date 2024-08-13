import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 NextGen Academy Vivek Kumar. All rights reserved. 
        </p>
        <div className="social-links">
        <a href="https://github.com/viveksinghjadaun" target="_blank" rel="noopener noreferrer">
        <AiFillGithub />
      </a>
      <a href="https://twitter.com/viveksjadaun" target="_blank" rel="noopener noreferrer">
        <AiFillTwitterSquare />
      </a>
      <a href="https://linkedin.com/in/viveksinghjadaun" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin />
      </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
