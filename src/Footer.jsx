import React from "react";
import ReactDOM from "react-dom";

function Footer() {
  var today = new Date();
  var currentYear = today.getFullYear();
  return (
    <footer>
      <p>Copyright &nbsp; © {currentYear} </p>
    </footer>
  );
}

export default Footer;
