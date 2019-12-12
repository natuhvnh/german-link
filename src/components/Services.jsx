import React, { Component } from "react";
import axios from "axios";

class Services extends Component {
  // state = {
  //   services: [
  //     {
  //       image: "images/img-1529287016.png",
  //       service: "dịch vụ trọn gói 55 triệu đồng",
  //       detail:
  //         "German-Link tư vấn và hỗ trợ khách hàng từ khâu đầu tiên cho đến lúc hoàn thiện hồ sơ xin visa."
  //     },
  //     {
  //       image: "images/img-1529287100.png",
  //       service: "dịch vụ tùy chọn",
  //       detail: "German-Link hỗ trợ thực hiện các khâu theo yêu cầu khách hàng."
  //     },
  //     {
  //       image: "images/img-1529287122.png",
  //       service: "hỗ trợ miễn phí",
  //       detail:
  //         "Tư vấn lộ trình du học miễn phí. Hỗ trợ miễn phí đặt mua bảo hiểm của Đức và vé máy bay."
  //     }
  //   ]
  // };
  state = {
    services: []
  };
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/services").then(res => {
      this.setState({
        services: res.data
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="text-center display-4 info-padding">CÁC GÓI DỊCH VỤ</div>
        <div className="container">
          <div className="row">
            {this.state.services.map((item, index) => {
              return (
                <div className="col-md-4 info-padding" key={index}>
                  <div>
                    <img src={item.image} alt="service" className="service-img" />
                  </div>
                  <div className="service-name text-uppercase text-center text-white">
                    <h4 className="service-name-text">{item.service}</h4>
                  </div>
                  <div className="service-detail">
                    <span className="service-detail-text">{item.detail}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default Services;
