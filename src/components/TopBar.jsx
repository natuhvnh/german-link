import React, { Component } from "react";

class TopBar extends Component {
  render() {
    return (
      <div className="text-right topbar">
        <div className="container">
          <ul>
            <li className="hotline">
              <span className="d-none d-md-inline">Hotline: </span>
              <a href="tel: 08 2999 3111">
                <b>08 2999 3111</b>
              </a>
            </li>
            <li className="top-bar-img">
              <span className="d-none d-md-inline">Language: </span>
              <img src="images/vietnam.png" alt="Vietnam" />
              <img src="images/germany.png" alt="Germany" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TopBar;
