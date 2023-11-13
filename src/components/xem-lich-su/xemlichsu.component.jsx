import React, { useState } from "react";

import "./xemlichsu.syles.css";
import { ReactComponent as DropdownLogo } from "../../assets/mingcute_down-fill.svg";
import Popup from "../popup/popup.component";

const XemLichSu = () => {
  // state for dropdown
  const [xemLichSu, setXemLichSu] = useState(false);
  // states for popup
  const [giaoDichIn, setGiaoDichIn] = useState(false);
  const [muaGiayIn, setMuaGiayIn] = useState(false);
  return (
    <div className="dropdown">
      <div
        className="dropdown-title-wrapper"
        onClick={() => setXemLichSu(!xemLichSu)}
      >
        <div className="dropdown-title">Xem lịch sử</div>
        <DropdownLogo className="dropdown-logo" />
      </div>
      {xemLichSu && (
        <div className="dropdown-content">
          <div className="dropdown-item" onClick={() => setGiaoDichIn(true)}>
            Giao dịch in
          </div>
          <div className="dropdown-item" onClick={() => setMuaGiayIn(true)}>
            Mua giấy in
          </div>
        </div>
      )}
      {giaoDichIn && (
        <Popup openPopup={setGiaoDichIn}>
          <div className="popup-title">
            <h1>Lịch sử giao dịch in</h1>
          </div>
          <div className="popup-body">Body</div>
          <div className="popup-footer">Footer</div>
        </Popup>
      )}
      {muaGiayIn && (
        <Popup openPopup={setMuaGiayIn}>
          <div className="popup-title">
            <h1>Lịch sử mua giấy in</h1>
          </div>
          <div className="popup-body">Body</div>
          <div className="popup-footer">Footer</div>
        </Popup>
      )}
    </div>
  );
};

export default XemLichSu;
