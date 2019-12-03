import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="bg-secondary">
        <div className="container form">
          <span className="text-center info-padding form-header">
            Để được tư vấn chi tiết, chính xác và tiết kiệm thời gian, xin vui lòng điền đầy đủ các
            thông tin sau
          </span>
          <form className="row">
            <div className="col-md-6 col-12">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="hoten"
                  placeholder="Họ tên"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  id="phone"
                  placeholder="Số điện thoại"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="date"
                  className="form-control"
                  id="date"
                  placeholder="Năm sinh"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="school">Đã có giấy báo nhập học trường:</label>
                <input
                  type="text"
                  name="school"
                  className="form-control"
                  id="school"
                  placeholder="Tên trường"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="school">Ngành trên giấy báo nhập học:</label>
                <input
                  type="text"
                  name="major"
                  className="form-control"
                  id="major"
                  placeholder="Tên ngành"
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="score">Tốt nghiệp từ năm 2014 trở về trước</label>
              <label htmlFor="score">Điểm thi đại học 3 môn ghi trên giấy báo nhập học</label>
              <div className="row">
                <div className="form-group col-md-4 col-12">
                  <label htmlFor="math">Môn 1</label>
                  <input type="text" name="math" className="form-control" id="math" required />
                </div>
                <div className="form-group col-md-4 col-12">
                  <label htmlFor="sub2">Môn 2</label>
                  <input type="text" name="sub2" className="form-control" id="sub2" required />
                </div>
                <div className="form-group col-md-4 col-12">
                  <label htmlFor="sub3">Môn 3</label>
                  <input type="text" name="sub3" className="form-control" id="sub3" required />
                </div>
              </div>
              <label htmlFor="score">Tốt nghiệp THPT từ 2015-2016: Điểm 4 môn</label>
              <div className="row">
                <div className="form-group col-lg-3 col-md-6 col-12">
                  <label htmlFor="math">Toán</label>
                  <input type="text" name="math" className="form-control" id="math" required />
                </div>
                <div className="form-group col-lg-3 col-md-6 col-12">
                  <label htmlFor="liter">Văn</label>
                  <input type="text" name="liter" className="form-control" id="liter" required />
                </div>
                <div className="form-group col-lg-3 col-md-6 col-12">
                  <label htmlFor="eng">Ngoại ngữ</label>
                  <input type="text" name="eng" className="form-control" id="eng" required />
                </div>
                <div className="form-group col-lg-3 col-md-6 col-12">
                  <label htmlFor="option">
                    <select name="cars" className="custom-select-sm custom-select">
                      <option selected>Tự chọn</option>
                      <option value="toan">Toán</option>
                      <option value="Vatly">Vật lý</option>
                      <option value="Hoahoc">Hóa học</option>
                      <option value="Nguvan">Ngữ văn</option>
                      <option value="Lichsu">Lịch sử</option>
                      <option value="Dialy">Địa lý</option>
                      <option value="Sinhhoc">Sinh học</option>
                      <option value="Tienganh">Tiếng anh</option>
                      <option value="GDCD">GDCD</option>
                    </select>
                  </label>
                  <input type="text" name="option" className="form-control" id="option" required />
                </div>
              </div>
              <label htmlFor="score">Tốt nghiệp THPT từ 2017 trở đi: Điểm 6 môn</label>
              <div className="row">
                <div className="form-group col-md-4 col-sm-6 col-12">
                  <label htmlFor="math">Toán</label>
                  <input type="text" name="math" className="form-control" id="math" required />
                </div>
                <div className="form-group col-md-4 col-sm-6 col-12">
                  <label htmlFor="liter">Văn</label>
                  <input type="text" name="liter" className="form-control" id="liter" required />
                </div>
                <div className="form-group col-md-4 col-sm-6 col-12">
                  <label htmlFor="eng">Ngoại ngữ</label>
                  <input type="text" name="eng" className="form-control" id="eng" required />
                </div>
                <div className="form-group col-md-4 col-sm-6 col-12">
                  <label htmlFor="option">
                    <select name="cars" className="custom-select-sm custom-select">
                      <option selected>Tự chọn 1</option>
                      <option value="toan">Toán</option>
                      <option value="Vatly">Vật lý</option>
                      <option value="Hoahoc">Hóa học</option>
                      <option value="Nguvan">Ngữ văn</option>
                      <option value="Lichsu">Lịch sử</option>
                      <option value="Dialy">Địa lý</option>
                      <option value="Sinhhoc">Sinh học</option>
                      <option value="Tienganh">Tiếng anh</option>
                      <option value="GDCD">GDCD</option>
                    </select>
                  </label>
                  <input type="text" name="option" className="form-control" id="option" required />
                </div>
                <div className="form-group col-md-4 col-sm-6 col-12">
                  <label htmlFor="option">
                    <select name="cars" className="custom-select-sm custom-select">
                      <option selected>Tự chọn 2</option>
                      <option value="toan">Toán</option>
                      <option value="Vatly">Vật lý</option>
                      <option value="Hoahoc">Hóa học</option>
                      <option value="Nguvan">Ngữ văn</option>
                      <option value="Lichsu">Lịch sử</option>
                      <option value="Dialy">Địa lý</option>
                      <option value="Sinhhoc">Sinh học</option>
                      <option value="Tienganh">Tiếng anh</option>
                      <option value="GDCD">GDCD</option>
                    </select>
                  </label>
                  <input type="text" name="option" className="form-control" id="option" required />
                </div>
                <div className="form-group col-md-4 col-sm-6 col-12">
                  <label htmlFor="option">
                    <select name="cars" className="custom-select-sm custom-select">
                      <option selected>Tự chọn 3</option>
                      <option value="toan">Toán</option>
                      <option value="Vatly">Vật lý</option>
                      <option value="Hoahoc">Hóa học</option>
                      <option value="Nguvan">Ngữ văn</option>
                      <option value="Lichsu">Lịch sử</option>
                      <option value="Dialy">Địa lý</option>
                      <option value="Sinhhoc">Sinh học</option>
                      <option value="Tienganh">Tiếng anh</option>
                      <option value="GDCD">GDCD</option>
                    </select>
                  </label>
                  <input type="text" name="option" className="form-control" id="option" required />
                </div>
              </div>
            </div>
            <div className="text-center col-12">
              <button type="submit" className="btn btn-primary center">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
