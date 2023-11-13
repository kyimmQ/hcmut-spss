import React, { useContext } from "react";

import XemLichSu from "../xem-lich-su/xemlichsu.component";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../ultis/firebase/firebase";

import { Link } from "react-router-dom";

const Navigation = (props) => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        Logo here
      </Link>
      {!currentUser ? (
        <div className="link-container">
          <Link className="nav-link" to="/">
            Trang chủ
          </Link>
          <Link className="nav-link" to="/contact">
            Liên hệ
          </Link>
        </div>
      ) : (
        <div className="link-container">
          <XemLichSu />
          <button type="button" onClick={signOutUser}>
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
