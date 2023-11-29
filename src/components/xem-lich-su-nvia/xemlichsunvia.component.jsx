import React, { useState } from "react";
import Popup from "../popup/popup.component";

const XemLichSuNvia = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="button-custom1" onClick={() => setOpen(true)}>
        Xem lịch sử
      </div>
      {open && (
        <Popup openPopup={setOpen} closeBtn={false}>
          <div className="popup-title">
            <h1>Lịch sử</h1>
          </div>
          <div className="popup-body">Xem ls</div>
          <div className="popup-footer">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
              }}
            >
              Quay lại
            </button>
          </div>
        </Popup>
      )}
    </div>
  );
};
export default XemLichSuNvia;
