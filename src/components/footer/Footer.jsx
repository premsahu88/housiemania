import React from "react";
import "./footer.css";

const Footer = () => {
    const startYear = 2023;
    const endYear = new Date().getFullYear();

  return (
    <>
      <section className="footer">
        <p>
        Copyright © {startYear}-{endYear} Your Company Name. All Rights Reserved.
        </p>
      </section>
    </>
  );
};

export default Footer;
