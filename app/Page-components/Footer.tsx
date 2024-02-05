import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer-heading-container">
        <h3 className="footer-heading">Check out more of my stuff...</h3>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-link-group">
          <Link href="/" className="footer-link">
            Dribbble
          </Link>
          <Link href="/" className="footer-link">
            Github
          </Link>
          <Link href="/" className="footer-link">
            Twitter
          </Link>
        </div>
        <div className="footer-link-group">
          <Link href="/" className="footer-link">
            E-Mail
          </Link>
          <Link href="/" className="footer-link">
            Linkedin
          </Link>
          <Link href="/" className="footer-link">
            Medium
          </Link>
        </div>
      </div>
      <div className="footer-attr">
        <p className="footer-attr-text">
          This website was built in 2 sprints here is <Link href="/">how i did it.</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
