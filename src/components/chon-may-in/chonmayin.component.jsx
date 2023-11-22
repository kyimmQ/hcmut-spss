import React from 'react'
import './chonmayin.styles.css'

const ChonMayIn = () => {
  return (
    <div>
        <h2 className="printer-location">
                Cơ sở 1: Lý Thường Kiệt, P.14, Q.10
              </h2>
              <div className="printer-table">
                <div className="printer-table-title">
                  <div className="printer-title">Tên máy in</div>
                  <div className="printer-title">Mã máy in</div>
                  <div className="printer-title">Vị trí</div>
                  <div className="printer-title">Trạng thái</div>
                  <div className="printer-title">Chọn</div>
                </div>
                <ul className="printer-list">
                  <li className="printer-item">
                    <div className="printer-item-content">
                      Laser Brother HL-L2321D
                    </div>
                    <div className="printer-item-content">BK-LTK-001</div>
                    <div className="printer-item-content">B1-110</div>
                    <div className="printer-item-content">Available</div>
                    <div className="printer-item-content">
                      <input type="radio" name="printer" value="" /> Xác nhận
                    </div>
                  </li>
                  <li className="printer-item">
                    <div className="printer-item-content">
                      Samsung SL-M2070FW
                    </div>
                    <div className="printer-item-content">BK-LTK-001</div>
                    <div className="printer-item-content">C5-304</div>
                    <div className="printer-item-content">Not available</div>
                    <div className="printer-item-content">
                      <input type="radio" name="printer" value="" /> Xác nhận
                    </div>
                  </li>
                  <li className="printer-item">
                    <div className="printer-item-content">
                      Sony UP-X898MD A6
                    </div>
                    <div className="printer-item-content">BK-LTK-001</div>
                    <div className="printer-item-content">A3</div>
                    <div className="printer-item-content">Not available</div>
                    <div className="printer-item-content">
                      <input type="radio" name="printer" value="" /> Xác nhận
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="printer-location">Cơ sở 2: Dĩ An, Bình Dương</h2>
              <div className="printer-table">
                <div className="printer-table-title">
                  <div className="printer-title">Tên máy in</div>
                  <div className="printer-title">Mã máy in</div>
                  <div className="printer-title">Vị trí</div>
                  <div className="printer-title">Trạng thái</div>
                  <div className="printer-title">Chọn</div>
                </div>
                <ul className="printer-list">
                  <li className="printer-item">
                    <div className="printer-item-content">
                      Laser Brother HL-L2321D
                    </div>
                    <div className="printer-item-content">BK-LTK-001</div>
                    <div className="printer-item-content">H6-602</div>
                    <div className="printer-item-content">Available</div>
                    <div className="printer-item-content">
                      <input type="radio" name="printer" value="" /> Xác nhận
                    </div>
                  </li>
                  <li className="printer-item">
                    <div className="printer-item-content">
                      Samsung SL-M2070FW
                    </div>
                    <div className="printer-item-content">BK-LTK-001</div>
                    <div className="printer-item-content">H1-311</div>
                    <div className="printer-item-content">Not available</div>
                    <div className="printer-item-content">
                      <input type="radio" name="printer" value="" /> Xác nhận
                    </div>
                  </li>
                  <li className="printer-item">
                    <div className="printer-item-content">
                      Sony UP-X898MD A6
                    </div>
                    <div className="printer-item-content">BK-LTK-001</div>
                    <div className="printer-item-content">H3-506</div>
                    <div className="printer-item-content">Not available</div>
                    <div className="printer-item-content">
                      <input type="radio" name="printer" value="" /> Xác nhận
                    </div>
                  </li>
                </ul>
              </div>
    </div>
  )
}

export default ChonMayIn