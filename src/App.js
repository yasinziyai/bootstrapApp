import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import OtherApp from "./components/otherApp";
// import "../assets/fonts/WebFonts/css/fontiran.css";
import "../src/assets/WebFonts/css/fontiran.css";
import "../src/assets/global.css";

const FaceApp = () => {
  return (
    <div>
      <Navbar />
      <OtherApp />
    </div>
  );
};
export default FaceApp;
