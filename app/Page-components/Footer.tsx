import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-heading-container">
        <h3 className="footer-heading">Check out more of my stuff...</h3>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-link-group">
          <Link href="https://dribbble.com/damiiisgod" target="_blank" className="footer-link">
            Dribbble
          </Link>
          <Link href="https://github.com/BeingDamii" target="_blank" className="footer-link">
            Github
          </Link>
          <Link href="https://twitter.com/hydedenz" target="_blank" className="footer-link">
            Twitter
          </Link>
        </div>
        <div className="footer-link-group">
          <Link href="mailto:dwanedehydra@gmail.com" target="_blank" className="footer-link">
            E-Mail
          </Link>
          <Link href="https://www.linkedin.com/in/damii-dennison-aa7975255/" target="_blank" className="footer-link">
            Linkedin
          </Link>
          <Link href="https://medium.com/@hydedenz" target="_blank" className="footer-link">
            Medium
          </Link>
        </div>
      </div>
      <div className="footer-attr">
        <p className="footer-attr-text">
          This website was built in 2 sprints here is <Link href="/">how i did it.</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
