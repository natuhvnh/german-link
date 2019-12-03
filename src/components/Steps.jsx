import React, { Component } from "react";

class Steps extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h4 className="text-center text-uppercase display-4 info-padding">Các bước thực hiện</h4>
          <div className="stepwizard">
            <div className="stepwizard-row setup-panel">
              <div className="stepwizard-step col-xs-2 step-padding">
                <span type="button" className="btn btn-success btn-circle">
                  1
                </span>
                <p>Tư vấn lộ trình du học</p>
              </div>
              <div className="stepwizard-step col-xs-2 step-padding">
                <span type="button" className="btn btn-success btn-circle">
                  2
                </span>
                <p>Ký kết hợp đồng</p>
              </div>
              <div className="stepwizard-step col-xs-2 step-padding">
                <span type="button" className="btn btn-success btn-circle">
                  3
                </span>
                <p>Xử lý hồ sơ</p>
              </div>
              <div className="stepwizard-step col-xs-2 step-padding">
                <span type="button" className="btn btn-success btn-circle">
                  4
                </span>
                <p>Cập nhật tiến động định kỳ</p>
              </div>
              <div className="stepwizard-step col-xs-2 step-padding">
                <span type="button" className="btn btn-success btn-circle">
                  5
                </span>
                <p>Nhận giấy báo nhập học và visa</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Steps;
