import React, { useContext, useState } from "react";
import Navigation from "../Navigation/Navigation.component";
import Footer from "../Footer/Footer.component";
import Popup from "../popup/popup.component";
import Button from "../Button/Button.component";
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
  // user context for different ui
  const { currentUser } = useContext(UserContext);
  return (
    <div className="homepage">
      <Navigation />
      <div className="homepage_body">
      <h1 className="title">HCMUT_SSPS</h1>
      <h2 className="subtitle">Student Smart Printing Service</h2>
      {!currentUser ? (
        <Button type="button" buttonType={"body"} onClick={logGoogleUser}>
          Đăng nhập
        </Button>
      ) : (
        <div>
          <Button
            type="button"
            buttonType={"body"}
            onClick={() => setInTaiLieu(true)}
          >
            In tài liệu
          </Button>
          <Button
            type="button"
            buttonType={"body"}
            onClick={() => setMuaGiayIn(true)}
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
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
