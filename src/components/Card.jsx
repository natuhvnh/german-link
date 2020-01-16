import React, { Component } from "react";
import axios from "axios";

class Card extends Component {
  // state = {
  //   cards: [
  //     {
  //       title: "CHẤT LƯỢNG GIÁO DỤC HÀNG ĐẦU THẾ GIỚI",
  //       text:
  //         "Đức hiện có hơn 400 trường đại học cùng hơn 1.800 chương trình học với chất lượng đào tạo hàng đầu thế giới và bằng cấp được công nhận toàn cầu. Đức là lựa chọn lý tưởng của nhiều du học sinh quốc tế.",
  //       image: "images/img-1529052013.png.jpeg"
  //     },
  //     {
  //       title: "MIỄN HỌC PHÍ VÀ HỖ TRỢ SINH VIÊN",
  //       text:
  //         "Đến với Đức, sinh viên có thể khám phá hơn 600 danh lam thắng cảnh của thế giới. Ngoài ra, sinh viên được thỏa sức đi du lịch và tìm hiểu nền văn hóa của 26 quốc gia Châu Âu khác mà không cần xin visa.",
  //       image: "images/index.png"
  //     },
  //     {
  //       title: "CƠ HỘI DU LỊCH TOÀN CHÂU ÂU",
  //       text:
  //         "Đến với Đức, sinh viên có thể khám phá hơn 600 danh lam thắng cảnh của thế giới. Ngoài ra, sinh viên được thỏa sức đi du lịch và tìm hiểu nền văn hóa của 26 quốc gia Châu Âu khác mà không cần xin visa.",
  //       image: "images/index1.png"
  //     },
  //     {
  //       title: "CƠ HỘI NGHỀ NGHIỆP",
  //       text:
  //         "Sinh viên được phép làm thêm mỗi năm 120 ngày toàn thời gian hoặc 240 ngày bán thời gian.Sau khi tốt nghiệp đại học, sinh viên được ở lại tới 18 tháng để tìm việc làm.",
  //       image: "images/index2.png"
  //     },
  //     {
  //       title: "CƠ HỘI ĐỊNH CƯ",
  //       text:
  //         "Để được cấp Thẻ xanh Châu Âu, sinh viên tốt nghiệp chỉ cần có mức lương từ 37.000- 48.000 Euro/ năm. Với chứng chỉ tiếng Đức B1, người sở hữu Thẻ xanh sẽ được cấp giấy phép định cư vô thời hạn chỉ sau 24 tháng lưu trú.",
  //       image: "images/index3.png"
  //     },
  //     {
  //       title: "ĐẤT NƯỚC AN TOÀN ĐÁNG SỐNG",
  //       text:
  //         "Là một trong bốn quốc gia có nền kinh tế mạnh nhất thế giới, Đức có mức sống cao với chế độ y tế và hệ thống an sinh xã hội toàn diện. Ngoài ra, Đức cũng là quốc gia ổn định về chính trị và xã hội, nơi quyền tự do và bình đẳng được xem trọng.",
  //       image: "images/index4.png"
  //     }
  //   ]
  // };
  state = {
    cards: []
  };
  // Laravel backend
  // componentDidMount() {
  //   axios.get("http://127.0.0.1:8000/cards").then(res => {
  //     this.setState({
  //       cards: res.data
  //     });
  //     console.log(res.data);
  //   });
  // }

  // Django backend
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/card", {
        headers: { Authorization: "Token c018f7bc68f86e220ce2f69d47adac59179bb4d3" }
      })
      .then(res => {
        this.setState({
          cards: res.data
        });
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container card-padding" id="card">
          <div className="row text-center card-padding">
            <div className="col-12">
              <h2 className="display-4">Lý do du học Đức</h2>
            </div>
            <hr />
          </div>
        </div>
        <div className="container card-padding">
          <div className="row">
            {this.state.cards.map((item, index) => {
              return (
                <div className="col-md-4 card-padding" key={index}>
                  <div className="card h-100">
                    <img src={item.image} alt="Ly do du hoc" className="card-img-top" />
                    <div className="card-body">
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-text">{item.text}</p>
                    </div>
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

export default Card;
