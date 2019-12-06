import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="bg-secondary ">
          <div className="container footer-padding">
            <div className="row">
              <div className="col-sm-4 text-center">
                <img src="images/img-1535449075.png" alt="logo" className="footer-img" />
              </div>
              <div className="col-sm-8 col-12 text-white ">
                <div className="footer-info">
                  <h6 className="font-weight-bolder comp-name">
                    Công ty cổ phần Du học German-link
                  </h6>
                  <p>
                    <span>Địa chỉ: Số 10, lô D, ngõ 59 Láng Hạ, Ba Đình, Hà Nội</span>
                    <br />
                    <span>Điện thoại: 08 2999 3111</span>
                    <br />
                    <span>Email: duhocduc@gl.edu.vn</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
