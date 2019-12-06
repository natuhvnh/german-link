import React, { Component } from "react";

class Conditions extends Component {
  render() {
    return (
      <div className="img-bg" id="conditions">
        <div className="conditions-bg container">
          <h4 className="text-center text-uppercase display-4 info-padding">
            Điều kiện du học Đức
          </h4>
          <ol className="text-white">
            <li className="conditon-text">
              Tham gia và đỗ kỳ thi THPT Quốc gia với các bài thi độc lập: Toán, Ngữ Văn, Ngoại ngữ
              và một số bài thi tổ hợp tự chọn (tổ hợp Khoa học Tự nhiên: Vật lý, Hóa học, Sinh học
              hay tổ hợp Khoa học Xã hội: Lịch sử, Địa lý, Giáo dục Công dân), đạt tổng điểm thi tối
              thiểu 36 (tính 6 môn thi xét Tốt nghiệp, không nhân hệ số, không làm tròn), trong đó
              không môn thi nào dưới 4 điểm và có ít nhất bốn môn thi không dưới 6 điểm
            </li>
            <li className="conditon-text">
              Trúng tuyến vào Hệ chính quy tại môi trường đại học Việt Nam được công nhận
            </li>
            <li className="conditon-text">Thi đạt chứng chỉ tiếng Đức trình độ B1</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Conditions;
