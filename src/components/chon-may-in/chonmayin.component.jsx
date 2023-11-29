import React, { useContext, useEffect, useState } from "react";
import { getPrinters } from "../../ultis/firebase/firebase";
import { DocContext } from "../../contexts/doc.context";
import "./chonmayin.styles.css";

const ChonMayIn = () => {
  const [printerList1, setPrinterList1] = useState([]);
  const [printerList2, setPrinterList2] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const { doc, setDoc } = useContext(DocContext);
  useEffect(() => {
    const fetchData = async () => {
      const cs1 = await getPrinters(1);
      const cs2 = await getPrinters(2);
      setPrinterList1(cs1);
      setPrinterList2(cs2);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (selectedValue1) {
      setSelectedValue2("");
      const newDoc = { ...doc };
      newDoc.printer = selectedValue1;
      setDoc(newDoc);
    }
  }, [selectedValue1]);
  useEffect(() => {
    if (selectedValue2) {
      setSelectedValue1("");
      const newDoc = { ...doc };
      newDoc.printer = selectedValue2;
      setDoc(newDoc);
    }
  }, [selectedValue2]);
  const handleRadioChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };
  const handleRadioChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };
  console.log(doc);
  return (
    <div>
      <h2 className="printer-location">Cơ sở 1: Lý Thường Kiệt, P.14, Q.10</h2>
      <table className="printer-table">
        <thead>
          <tr>
            <th className="printer-title">Tên máy in</th>
            <th className="printer-title">Mã máy in</th>
            <th className="printer-title">Vị trí</th>
            <th className="printer-title">Trạng thái</th>
            <th className="printer-title">Chọn</th>
          </tr>
        </thead>
        <tbody className="printer-list">
          {printerList1.map((record) => (
            <tr>
              <td className="printer-item-content">{record.name}</td>
              <td className="printer-item-content">{record.code}</td>
              <td className="printer-item-content">{record.location}</td>
              <td className="printer-item-content">
                {record.status ? "Available" : "Unavailable"}
              </td>
              <td className="printer-item-content">
                <input
                  type="radio"
                  checked={selectedValue1 === record.code}
                  value={record.code}
                  onClick={handleRadioChange1}
                />{" "}
                Xác nhận
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="printer-location">Cơ sở 2: Dĩ An, Bình Dương</h2>
      <table className="printer-table">
        <thead>
          <tr>
            <th className="printer-title">Tên máy in</th>
            <th className="printer-title">Mã máy in</th>
            <th className="printer-title">Vị trí</th>
            <th className="printer-title">Trạng thái</th>
            <th className="printer-title">Chọn</th>
          </tr>
        </thead>
        <tbody className="printer-list">
          {printerList2.map((record) => (
            <tr>
              <td className="printer-item-content">{record.name}</td>
              <td className="printer-item-content">{record.code}</td>
              <td className="printer-item-content">{record.location}</td>
              <td className="printer-item-content">
                {record.status ? "Available" : "Unavailable"}
              </td>
              <td className="printer-item-content">
                <input
                  type="radio"
                  checked={selectedValue2 === record.code && record.status}
                  value={record.code}
                  onClick={handleRadioChange2}
                />{" "}
                Xác nhận
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <h2 className="printer-location">
                Cơ sở 1: Lý Thường Kiệt, P.14, Q.10
              </h2>
              <div className="printer-table">
                <div className="printer-table-title">
                  <div className="printer-title">Tên máy in</div>
                  <div className="printer-title">Mã máy in</div>
                  <div className="printer-title">Vị trí</div>
                  <div className="printer-title">Trạng thái</div>
                  <div className="printer-title">Chọn</div>
                </div>
                <ul className="printer-list">
                  <li className="printer-item">
                    <div className="printer-item-content">
                      Laser Brother HL-L2321D
                    </div>
                    <div className="printer-item-content">BK-LTK-001</div>
                    <div className="printer-item-content">B1-110</div>
                    <div className="printer-item-content">Available</div>
                    <div className="printer-item-content">
                      <input type="radio" name="printer" value="" /> Xác nhận
                    </div>
                  </li>
                  <li className="printer-item">
                    <div className="printer-item-content">
                      Samsung SL-M2070FW
                    </div>
                    <div className="printer-item-content">BK-LTK-001</div>
                    <div className="printer-item-content">C5-304</div>
                    <div className="printer-item-content">Not available</div>
                    <div className="printer-item-content">
                      <input type="radio" name="printer" value="" /> Xác nhận
                    </div>
                  </li>
                  <li className="printer-item">
                    <div className="printer-item-content">
                      Sony UP-X898MD A6
                    </div>
                    <div className="printer-item-content">BK-LTK-001</div>
                    <div className="printer-item-content">A3</div>
                    <div className="printer-item-content">Not available</div>
                    <div className="printer-item-content">
                      <input type="radio" name="printer" value="" /> Xác nhận
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="printer-location">Cơ sở 2: Dĩ An, Bình Dương</h2>
              <div className="printer-table">
                <div className="printer-table-title">
                  <div className="printer-title">Tên máy in</div>
                  <div className="printer-title">Mã máy in</div>
                  <div className="printer-title">Vị trí</div>
                  <div className="printer-title">Trạng thái</div>
                  <div className="printer-title">Chọn</div>
                </div>
                <ul className="printer-list">
                  <li className="printer-item">
                    <div className="printer-item-content">
                      Laser Brother HL-L2321D
                    </div>
                    <div className="printer-item-content">BK-LTK-001</div>
                    <div className="printer-item-content">H6-602</div>
                    <div className="printer-item-content">Available</div>
                    <div className="printer-item-content">
                      <input type="radio" name="printer" value="" /> Xác nhận
                    </div>
                  </li>
                  <li className="printer-item">
                    <div className="printer-item-content">
                      Samsung SL-M2070FW
                    </div>
                    <div className="printer-item-content">BK-LTK-001</div>
                    <div className="printer-item-content">H1-311</div>
                    <div className="printer-item-content">Not available</div>
                    <div className="printer-item-content">
                      <input type="radio" name="printer" value="" /> Xác nhận
                    </div>
                  </li>
                  <li className="printer-item">
                    <div className="printer-item-content">
                      Sony UP-X898MD A6
                    </div>
                    <div className="printer-item-content">BK-LTK-001</div>
                    <div className="printer-item-content">H3-506</div>
                    <div className="printer-item-content">Not available</div>
                    <div className="printer-item-content">
                      <input type="radio" name="printer" value="" /> Xác nhận
                    </div>
                  </li>
                </ul>
              </div> */}
    </div>
  );
};

export default ChonMayIn;
