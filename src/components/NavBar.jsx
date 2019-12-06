import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";

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
            <ScrollspyNav
              scrollTargetIds={["intro", "card", "conditions", "form"]}
              activeNavClass="is-active"
              scrollDuration="1000"
              headerBackground="false">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#intro">
                    Giới thiệu German-link ECO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#card">
                    Lý do du học Đức
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#conditions">
                    Điều kiện và các bước
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#form">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </ScrollspyNav>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
