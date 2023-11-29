import React, { useContext, useState } from "react";
import Navigation from "../navigation/navigation.component";
import Footer from "../footer/footer.component";
import Popup from "../popup/popup.component";
import Button from "../button/button.component";
import XacNhanGiaoDich from "../xac-nhan-giao-dich/xacnhangiaodich.component";
import ChonMayIn from "../chon-may-in/chonmayin.component";
import Upload from "../Upload_file/Upload_file.component";
import { UserContext } from "../../contexts/user.context";

import {
  signInWithGooglePopup,
  createUserFromAuth,
  db,
  getPrinters,
} from "../../ultis/firebase/firebase";

import "./homepage.styles.css";
import MuaGiayIn from "../mua-giay-in/muagiayin.component";
import ThongSoIn from "../thong-so-in/thongsoin.components";

// sign in function
const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  createUserFromAuth(user, { numOfPaper: 500 });
};

const Homepage = (props) => {
  // states for popup
  const [inTaiLieu, setInTaiLieu] = useState(false);
  const [muaGiayIn, setMuaGiayIn] = useState(false);
  const [chonMayIn, setChonMayIn] = useState(false);
  const [thongSoIn, setThongSoIn] = useState(false);
  const [xacNhanGiaoDich, setXacNhanGiaoDich] = useState(false);
  // user context for different ui
  const { currentUser } = useContext(UserContext);

  return (
    <div className="homepage">
      <Navigation />
      <div className="homepage_body">
        {/* <h1 className="title">HCMUT SSPS</h1> */}
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
            <div className="popup-body"><Upload/></div>
            <div className="popup-footer"> 
            <button className="button-footer" onClick={() => setChonMayIn(true)}>Xác nhận</button>
              <button className="button-footer" onClick={() => setInTaiLieu(false)}>Hủy</button>
              </div>
          </Popup>
        )}
        {muaGiayIn && (
          <Popup openPopup={setMuaGiayIn}>
            <div className="popup-title muagiayin-popup-title">
              <h1>Mua giấy in</h1>
            </div>
            <div className="popup-body">
              <MuaGiayIn props={{ setMuaGiayIn }} />
            </div>
            {/* <div className="popup-footer">
              
            </div> */}
          </Popup>
        )}

        {chonMayIn && (
          <Popup openPopup={setChonMayIn}>
            <div className="popup-title">
              <h1>Chọn máy in</h1>
            </div>
            <div className="popup-body">
              <ChonMayIn />
            </div>
            <div className="popup-footer">
              <button className="button-footer" onClick={()=> setThongSoIn(true)}>Xác nhận</button>
              <button className="button-footer">Quay lại</button>
            </div>
          </Popup>
        )}

        {thongSoIn &&(
          <ThongSoIn openPopup={setThongSoIn} setXacNhanGiaoDich={setXacNhanGiaoDich}/>
        )}

        {xacNhanGiaoDich && (
          <Popup openPopup={setXacNhanGiaoDich}>
            <div className="popup-title">
              <h1>Xác nhận giao dịch</h1>
            </div>
            <div className="popup-body">
              <XacNhanGiaoDich />
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
