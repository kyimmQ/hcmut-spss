import React, { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import Button from "../Button/Button.component";
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
          <h1>Xem lịch sử</h1>
          <Button type="button" onClick={signOutUser}>
            Đăng xuất
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
