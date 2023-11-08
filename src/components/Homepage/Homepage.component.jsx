import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation.component";
import Footer from "../Footer/Footer.component";
import Button from "../Button/Button.component";
import { UserContext } from "../../contexts/user.context";

import {
  signInWithGooglePopup,
  createUserFromAuth,
} from "../../ultis/firebase/firebase";

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  createUserFromAuth(user);
};

const Homepage = (props) => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="">
      <Navigation />
      <h1>HCMUT_SSPS</h1>
      <h2>Student Smart Printing Service</h2>
      {!currentUser ? (
        <Button type="button" onClick={logGoogleUser}>
          Đăng nhập
        </Button>
      ) : (
        <div>
          <Button type="button">In tài liệu</Button>
          <Button type="button">Mua giấy in</Button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Homepage;
