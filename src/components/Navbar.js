import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow py-3">
      <div className="container-fluid ">
        <div
          style={{
            width: "35px",
            height: "35px",
            backgroundColor: "lightgrey",
            borderRadius: "50%",
          }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                منو
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " href="#">
                پشتیبانی
              </a>
            </li>
            <li className="nav-item dropdown"></li>
          </ul>
          <form className="d-flex" role="search">
            لوگو
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
