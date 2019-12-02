import React, { Component } from "react";

class Brand extends Component {
  state = {
    images: [
      "images/img-1535510605.png",
      "images/img-1535510657.png",
      "images/lang-1529483351.png",
      "images/img-1535510745.png",
      "images/img-1535510766.png"
    ]
  };
  render() {
    return (
      <div className="container text-center">
        {/*text-center: center brand image*/}
        {this.state.images.map((item, index) => {
          return index === 2 ? (
            <a href="/" key={index}>
              <img src={item} alt="brand" className="d-none d-md-inline brand-main" />
            </a>
          ) : (
            <a href="/" key={index}>
              <img src={item} alt="brand" className="d-none d-md-inline brand" />
            </a>
          );
        })}
      </div>
    );
  }
}

export default Brand;
