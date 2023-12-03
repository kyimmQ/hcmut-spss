import React, { useContext, useEffect, useState } from "react";

import XemLichSuUser from "../xem-lich-su/xemlichsu.component";
import { UserContext } from "../../contexts/user.context";

import { getUserInfo, signOutUser } from "../../ultis/firebase/firebase";

import { Link } from "react-router-dom";

import logo from "../../assets/spss_logo.svg";

import "./navigation.styles.css";
import XemLichSuNvia from "../xem-lich-su-nvia/xemlichsunvia.component";
import { RoleContext } from "../../contexts/role.context";

const Navigation = (props) => {
  const { currentUser } = useContext(UserContext);

  const { role } = useContext(RoleContext);

  return (
    <div className="navigation">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      {!currentUser ? (
        <div className="link-container">
          <Link className="nav-link" to="/" id="box1">
            Trang chủ
          </Link>
          <Link className="nav-link" to="/contact" id="box2">
            Liên hệ
          </Link>
        </div>
      ) : (
        <div className="link-container">
          {role == "user" ? <XemLichSuUser /> : <XemLichSuNvia />}
          <button
            type="button"
            onClick={signOutUser}
            className="button-custom1"
          >
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
