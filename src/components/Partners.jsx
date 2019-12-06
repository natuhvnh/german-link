import React, { Component } from "react";

class Partners extends Component {
  render() {
    return (
      <div className="container partner-padding">
        <div className="text-center display-4 text-uppercase info-padding">Đối tác</div>
        <div className="row">
          <div
            id="slides"
            className="carousel slide w-100"
            data-ride="carousel"
            data-interval="3000">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item partner active">
                <img className="img-fluid col-3" src="images/img-1535449751.jpg" alt="slide 1" />
                <img className="img-fluid col-3" src="images/img-1535449787.png" alt="slide 2" />
                <img className="img-fluid col-3" src="images/img-1535449812.png" alt="slide 3" />
                <img className="img-fluid col-3" src="images/img-1535449828.png" alt="slide 4" />
              </div>
              <div className="carousel-item partner">
                <img className="img-fluid col-4" src="images/img-1535449844.jpg" alt="slide 5" />
                <img className="img-fluid col-4" src="images/img-1535449859.png" alt="slide 6" />
                <img className="img-fluid col-4" src="images/img-1535449874.png" alt="slide 7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
