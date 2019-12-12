import React, { Component } from "react";

class Info extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="info-bg">
          <div className="container info-display">
            <div className="row">
              <div className="col-12 col-md-3 col-sm-4 info-padding">
                <img src="images/img-1535449075.png" alt="german-link" className="info-img" />
              </div>
              <div className="col-12 col-md-3 col-sm-6 info-padding">
                <h4 className="text-uppercase info-text">
                  Giải pháp
                  <br />
                  du học
                  <br />
                  thông minh nhất
                </h4>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center info-bg-1 info-padding">
          <h3>
            <i className="fa fa-smile-o info-icon"></i> 5 LÝ DO VÌ SAO CHỌN GERMAN-LINK ECO
          </h3>
        </div>
        <div className="bg-secondary text-white">
          <div className="container">
            <div className="row">
              <span className="col-12 col-md-6 info-padding text-justify">
                <i className="fa fa-check-circle-o info-icon-1"></i> Tư vấn và hoạch định một lộ
                trình du học tối ưu.
              </span>
              <span className="col-12 col-md-6 info-padding text-justify">
                <i className="fa fa-check-circle-o info-icon-1"></i> Chúng tôi đồng hành và hỗ trợ
                việc du học Đức diễn ra thành công và đúng tiến độ.
              </span>
              <span className="col-12 col-md-6 info-padding text-justify">
                <i className="fa fa-check-circle-o info-icon-1"></i> Hỗ trợ giải quyết tốt nhất các
                vấn đề phát sinh từ phía trường đại học và các cơ quan chức năng cấp visa của Đức.
              </span>
              <span className="col-12 col-md-6 info-padding text-justify">
                <i className="fa fa-check-circle-o info-icon-1"></i> Giảm thiểu tối đa các rủi ro bị
                muộn, bị từ chối cấp giấy báo nhập học và Visa.
              </span>
              <span className="col-12 col-md-6 info-padding text-justify">
                <i className="fa fa-check-circle-o info-icon-1"></i> Sử dụng dịch vụ du học Đức chất
                lượng CAO nhưng chi phí THẤP NHẤT.
              </span>
            </div>
          </div>
        </div>
        <div className="text-center info-bg-1 info-padding">
          <h3>
            <i className="fa fa-frown-o info-icon"></i> CÁC RỦI RO KHI TỰ LÀM HỒ SƠ
          </h3>
        </div>
        <div className="bg-secondary text-white">
          <div className="container">
            <div className="row">
              <span className="col-12 col-md-6 info-padding text-justify">
                <i className="fa fa-exclamation-triangle info-icon-2"></i> Mất rất nhiều thời gian
                để tìm hiểu, cập nhật các quy định của trường đại học Đức, Đại sứ quán, Sở ngoại
                kiều v.v...
              </span>
              <span className="col-12 col-md-6 info-padding text-justify">
                <i className="fa fa-exclamation-triangle info-icon-2"></i> Việc không nắm rõ và
                không cập nhật thường xuyên những thay đổi về các quy định xin trường, xin visa sẽ
                làm tăng cao rủi ro bị từ chối cấp giấy báo nhập học, cấp visa.
              </span>
              <span className="col-12 col-md-6 info-padding text-justify">
                <i className="fa fa-exclamation-triangle info-icon-2"></i> Việc quá tải về số lượng
                người xin trường, xin visa đi Đức sẽ tăng nguy cơ hồ sơ của khách hàng bị xử lý
                chậm, sai. Nếu không liên hệ, can thiệp kịp thời sẽ làm lỡ một học kỳ, gây thiệt hại
                lớn về kinh tế và ảnh hưởng tiêu cực đến tâm lý của gia đình.
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Info;
