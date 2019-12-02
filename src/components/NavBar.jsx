import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light sticky-top">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src="images/img-1535510766.png" alt="logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Giới thiệu German-link ECO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Lý do du học Đức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Điều kiện và các bước
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
