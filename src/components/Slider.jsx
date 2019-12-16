import React, { Component } from "react";
import axios from "axios";

class Slider extends Component {
  // state = {
  //   images: ["images/img-1529488716.jpg", "images/img-1529488687.jpg"]
  // };
  state = {
    images: []
  };
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/sliders").then(res => {
      this.setState({
        images: res.data
      });
    });
  }
  handleClose = () => {
    console.log("Close");
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div id="slides" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              {this.state.images.map((_image, index) => {
                return index === 0 ? (
                  <li
                    data-target="#slides"
                    data-slide-to={index.toString()}
                    className="active"
                    key={index}></li>
                ) : (
                  <li data-target="#slides" data-slide-to={index.toString()} key={index}></li>
                );
              })}
            </ul>
            <div className="carousel-inner">
              {this.state.images.map((image, index) => {
                return index === 0 ? (
                  <div className="carousel-item active" key={index}>
                    <img
                      src={"http://127.0.0.1:8000/storage" + image.original}
                      alt="slide"
                      className="img-fluid mx-auto d-block"
                    />
                    <div className="carousel-caption">
                      <button className="btn btn-outline-warning" onClick={this.handleClose}>
                        <i className="fa fa-plus"></i>
                      </button>
                      <button className="btn btn-outline-warning" onClick={this.handleClose}>
                        <i className="fa fa-pencil"></i>
                      </button>
                      <button className="btn btn-outline-warning" onClick={this.handleClose}>
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="carousel-item" key={index}>
                    <img
                      src={"http://127.0.0.1:8000/storage" + image.original}
                      alt="slide"
                      className="img-fluid mx-auto d-block"
                    />
                    <div className="carousel-caption">
                      <button className="btn btn-outline-warning" onClick={this.handleClose}>
                        <i className="fa fa-plus"></i>
                      </button>
                      <button className="btn btn-outline-warning" onClick={this.handleClose}>
                        <i className="fa fa-pencil"></i>
                      </button>
                      <button className="btn btn-outline-warning" onClick={this.handleClose}>
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default Slider;
