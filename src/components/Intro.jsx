import React, { Component } from "react";
import axios from "axios";

class Intro extends Component {
  // state = {
  //   intros: [
  //     {
  //       heading: "Dịch vụ chuyên nghiệp",
  //       intro:
  //         "German-Link là công ty chuyên dịch vụ du học Đức. Với kinh nghiệm chuyên sâu trong lĩnh vực này cùng một quy trình tích hợp chuyên nghiệp, chúng tôi đảm bảo hồ sơ của Quý khách sẽ được xử lý một cách nhanh chóng, hiệu quả.",
  //       icon: "fa fa-graduation-cap intro-icon"
  //     },
  //     {
  //       heading: "Chi phí hợp lý",
  //       intro:
  //         "Khách hàng sẽ được cung cấp dịch vụ chất lượng cao với một chi phí thấp nhất thị trường",
  //       icon: "fa fa-thumbs-up intro-icon"
  //     },
  //     {
  //       heading: "Giải quyết tốt khó khăn",
  //       intro:
  //         "Với đội ngũ chuyên gia giàu kinh nghiệm cùng nhiều mối quan hệ tại Đức và Việt Nam, German-Link có năng lực cao để giải quyết thành công các vấn đề phát sinh trong quá trình xin giấy báo nhập học và visa.",
  //       icon: "fa fa-star intro-icon"
  //     },
  //     {
  //       heading: "Cam kết có Zu",
  //       intro:
  //         "German-Link đảm bảo 100% khách hàng sẽ nhận được giấy báo nhập học (Zu) của trường đại học Đức. Nếu không, German-Link cam kết bồi thường 200% phí dịch vụ và tiếp tục hỗ trợ miễn phí 100% cho đến khi khách hàng có Zu.",
  //       icon: "fa fa-check-circle-o intro-icon"
  //     },
  //     {
  //       heading: "Mức giá linh hoạt",
  //       intro: "Có nhiều mức giá linh hoạt đáp ứng nhu cầu làm hồ sơ của từng khách hàng.",
  //       icon: "fa fa-refresh intro-icon"
  //     },
  //     {
  //       heading: "Tỉ lệ được Visa cao",
  //       intro:
  //         "Đến nay, 100% khách hàng đến với German-Link đều nhận được Visa du học Đức và rất hài lòng, tin tưởng dịch vụ của chúng tôi.",
  //       icon: "fa fa-id-card-o intro-icon"
  //     }
  //   ]
  // };
  state = {
    intros: []
  };
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/intro", {
        headers: { Authorization: "Token c018f7bc68f86e220ce2f69d47adac59179bb4d3" }
      })
      .then(res => {
        this.setState({
          intros: res.data
        });
      });
  }
  render() {
    return (
      <React.Fragment>
        <section className="bg-secondary" id="intro">
          <div className="container">
            <div className="row text-center intro-padding">
              <h2 className="display-4 col-12">GERMAN-LINK ECO</h2>
              <h4 className="col-12 intro-sub">Dịch vụ du học Đức số 1 Việt Nam</h4>
              {this.state.intros.map((intro, index) => {
                return (
                  <div className="col-12 col-sm-6 col-md-4 text-white" key={index}>
                    <div className="float-left">
                      <span>
                        <i className={intro.icon}></i>
                      </span>
                    </div>
                    <div>
                      <h6 className="font-weight-bolder text-left">{intro.heading}</h6>
                      <p className="text-justify">{intro.intro}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Intro;
