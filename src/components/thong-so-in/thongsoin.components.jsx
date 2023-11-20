import React, {useState} from "react";

import './thongsoin.styles.css'
import Popup from "../popup/popup.component";
import Button from "../button/button.component";


const ThongSoIn = () => {
    // useState var
    const [xacNhanGiaoDich, setXacNhanGiaoDich] = useState(false);


    return(
        <Popup >
            <div className="title">Tùy chỉnh thông số in</div>
            <div className="main-page">
                <input type="number" name="" id="" />
            </div>
            <div className="option"></div>
            <div className="btn-container">
                <Button className='btn-custome'>Xác nhận</Button>
                <Button className='btn-custome'>Quay lại</Button>
            </div>
        </Popup>
    );





}

export default ThongSoIn;
