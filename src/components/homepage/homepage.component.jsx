import React, { useContext, useState } from "react";
import Navigation from "../navigation/navigation.component";
import Footer from "../footer/footer.component";
import Popup from "../popup/popup.component";
import Button from "../button/button.component";
import XacNhanGiaoDich from "../xac-nhan-giao-dich/xacnhangiaodich.component";
import ChonMayIn from "../chon-may-in/chonmayin.component";
import { UserContext } from "../../contexts/user.context";

import {
  signInWithGooglePopup,
  createUserFromAuth,
} from "../../ultis/firebase/firebase";

import "./homepage.styles.css";

// sign in function
const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  createUserFromAuth(user);
};

const Homepage = (props) => {
  // states for popup
  const [inTaiLieu, setInTaiLieu] = useState(false);
  const [muaGiayIn, setMuaGiayIn] = useState(false);
  const [chonMayIn, setChonMayIn] = useState(false);
  const [xacNhanGiaoDich, setXacNhanGiaoDich] = useState(false);
  // user context for different ui
  const { currentUser } = useContext(UserContext);
  return (
    <div className="homepage">
      <Navigation />
      <div className="homepage_body">
        <h1 className="title">HCMUT SSPS</h1>
        <h2 className="subtitle">Student Smart Printing Service</h2>
        {!currentUser ? (
          <Button
            type="button"
            buttonType={"body"}
            onClick={logGoogleUser}
            className="button-custom"
          >
            Đăng nhập
          </Button>
        ) : (
          <div>
            <Button
              type="button"
              buttonType={"body"}
              onClick={() => setInTaiLieu(true)}
              className="button-custom"
            >
              In tài liệu
            </Button>
            <Button
              type="button"
              buttonType={"body"}
              onClick={() => setMuaGiayIn(true)}
              className="button-custom"
            >
              Mua giấy in
            </Button>
          </div>
        )}

        {/* chưa hoàn thành */}
        {inTaiLieu && (
          <Popup openPopup={setInTaiLieu}>
            <div className="popup-title">
              <h1>Tải tài liệu lên</h1>
            </div>
            <div className="popup-body">Body</div>
            <div className="popup-footer">Footer</div>
          </Popup>
        )}
        {muaGiayIn && (
          <Popup openPopup={setMuaGiayIn}>
            <div className="popup-title">
              <h1>Mua giấy in</h1>
            </div>
            <div className="popup-body">Body</div>
            <div className="popup-footer">Footer</div>
          </Popup>
        )}

        {chonMayIn && (
          <Popup openPopup={setChonMayIn}>
            <div className="popup-title">
              <h1>Chọn máy in</h1>
            </div>
            <div className="popup-body">
              <ChonMayIn/>
            </div>
            <div className="popup-footer">
              <button className="button-footer">Xác nhận</button>
              <button className="button-footer">Quay lại</button>
            </div>
          </Popup>
        )}

        {xacNhanGiaoDich && (
          <Popup openPopup={setXacNhanGiaoDich}>
            <div className="popup-title">
              <h1>Xác nhận giao dịch</h1>
            </div>
            <div className="popup-body">
              <XacNhanGiaoDich/>
            </div>
            <div className="popup-footer">
              <button className="button-footer">Xác nhận</button>
              <button className="button-footer">Quay lại</button>
            </div>
          </Popup>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
