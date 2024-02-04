import React from "react";
import NavBar from "./navBar";
import Image from "next/image";
import MyPicture from "../assets/mypicture.png";

const CTA = () => {
  return (
    <div className="main-container">
      <NavBar />
      <div className="cta-content-wrapper">
        <div className="cta-content">
          <Image alt="image of Eugene" src={MyPicture} />
          <h1 className="cta-heading">Software engineer and designer</h1>
          <p className="cta-text">
            Turning &apos;ugh&apos; into &apos;wow&apos; with design and tech?
            Sign me up, I&apos;m obsessed!
          </p>
        </div>
      </div>

      <div className="cta-footer">
        <p>Portfolio 2023 - 2024</p>
        <p>Available for hire</p>
      </div>
    </div>
  );
};

export default CTA;
