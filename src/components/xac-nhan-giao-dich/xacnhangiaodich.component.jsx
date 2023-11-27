import React from "react";
import "./xacnhangiaodich.styles.css";

const XacNhanGiaoDich = () => {
  return (
    <div>
      <div className="order-info">
        <div className="order-title">
          <span>Thời gian dự kiến: </span>
          <span className="order-content">10 phút</span>
        </div>
        <div className="order-title">
          <span>Thời gian hoàn thành dự kiến: </span>
          <span className="order-content">10:45, 15/10/2023</span>
        </div>
        <div className="order-title">
          <span>Số lượng file: </span>
          <span className="order-content">3</span>
        </div>
        <div className="order-title">Danh sách file: </div>
      </div>
      <div className="order-file-table">
        <div className="order-file-table-title">
          <div className="file-title">Tên tài liệu</div>
          <div className="file-title">Kích thước</div>
          <div className="file-title">Số trang</div>
        </div>
        <ul className="file-list">
          <li className="file-item">
            <div className="file-item-content file-name">
              Software-Engineer-document.pdf
            </div>
            <div className="file-item-content">100 KB</div>
            <div className="file-item-content">100</div>
          </li>
          <li className="file-item">
            <div className="file-item-content file-name">
              Software-Engineer-document.pdf
            </div>
            <div className="file-item-content">100 KB</div>
            <div className="file-item-content">100</div>
          </li>
          <li className="file-item">
            <div className="file-item-content file-name">
              Software-Engineer-document.pdf
            </div>
            <div className="file-item-content">100 KB</div>
            <div className="file-item-content">100</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default XacNhanGiaoDich;
