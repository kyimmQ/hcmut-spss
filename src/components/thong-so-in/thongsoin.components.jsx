import React, {useState} from "react";

import './thongsoin.styles.css'
import Popup from "../popup/popup.component";
import Button from "../button/button.component";
import XacNhanGiaoDich from "../xac-nhan-giao-dich/xacnhangiaodich.component";

const ThongSoIn = (props) => {
    // useState var
    const [xacNhanGiaoDich, setXacNhanGiaoDich] = useState(false);
    let printProperties ={};

    return(
        <Popup openPopup={props.openPopup}>
            <div className="container">
                <div className="title">Tùy chỉnh thông số in</div>
                <div className="main-page">
                    <div className="preview-container">
                        <div className="preview-title">Xem trước</div>
                        <div className="preview-page"></div>
                    </div>
                    <div className="adjust-container">
                        <div className="adjust-row">
                            <label htmlFor="">Số bản:</label>
                            <input type="number" name="" id="" />
                        </div>
                        <div className="adjust-row size-select">
                            <label htmlFor="">Kích thước:</label>
                            <select name="" id="">
                                <option value="A4">A3</option>
                                <option value="A3">A3</option>
                            </select>
                        </div>
                        <div className="adjust-row">
                            <label htmlFor="">In từ trang:  </label>
                            <select name="" id=""></select>
                            <span> đến </span>
                            <select name="" id=""></select>
                        </div>
                        <div className="adjust-row print-direction">
                            <label htmlFor="">Hướng in:</label>
                            <input type="radio" name="direction" id="" value="vertical"/>
                            <span>Dọc</span>
                            <input type="radio" name="direction" id="" value="horizontal"/>
                            <span>Ngang</span>
                        </div>
                        <div className="adjust-row align-row">
                            <label htmlFor="">Canh lề (Inch)</label>
                            <div>
                                <div>
                                    <span>Trái:</span>
                                    <select name="" id=""></select>
                                    <span>Phải:</span>
                                    <select name="" id=""></select>
                                </div>
                                <div>
                                    <span>Trên:</span>
                                    <select name="" id=""></select>
                                    <span>Dưới:</span>
                                    <select name="" id=""></select>
                                </div>
                                
                             
                            </div>

                        </div>
                        <div className="adjust-row">
                            <label htmlFor="">Số trang/1 mặt:</label>
                            <input type="number" name="" id="" />
                        </div>
                    </div>
                </div>
                <div className="save-option">
                    <label htmlFor="">Lưu tài liệu trong vòng 7 ngày</label>
                    <input type="checkbox" name="" id="" />
                </div>
                <div className="btn-container">
                    <Button className='btn-custome' onClick={()=>setXacNhanGiaoDich(true)}>Xác nhận</Button>
                    <Button className='btn-custome' onClick={()=>props.openPopup(false)}>Quay lại</Button>
                </div>

                {xacNhanGiaoDich &&(
                    <Popup>
                        <XacNhanGiaoDich />
                    </Popup>
                    )
                };

            </div>
            
        </Popup>

        
            
        

    );





}

export default ThongSoIn;
