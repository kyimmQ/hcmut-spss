import React,{useState} from "react";

import styles from './nhangiaodichin_nvia.module.css';
import search_icon from "../../assets/search.svg"
import Popup from "../popup/popup.component";
import Button from "../button/button.component";
import TableRow from "./nhan-giao-dich-table-content/nhangiaodichtablecontent.component";


/**
 * 
 * @param {*} props 
 * @returns 
 */
const NhanGiaoDichIn = (props) => {
    
    const exampleData = [
      {id: "1", time: "17:00:24", date: "18/11/2023", accountName: "Lê Duy Anh", accountNameTag: "anh.leduy04", 
      transactionID: "T-Pa-001", printerID: "BK-LTK-001", docName: "Software-Engineer-Document.docs", pageNumber: "100", 
      confirmation: true, status: true, delivery: true},
      {id: "2", time: "08:30:29", date: "29/10/2023", accountName: "Nguyễn Trần Bảo Ngọc", accountNameTag: "ngoc.nguyentran", 
      transactionID: "T-Pa-010", printerID: "BK-DiAn-001", docName: "Data-Structure-and-Algorithms-Textbook.pdf", pageNumber: "20", 
      confirmation: true, status: true, delivery: false},
      {id: "3", time: "20:00:01", date: "05/10/2023", accountName: "Nguyễn Trần Bảo Ngọc", accountNameTag: "ngoc.nguyentran", 
      transactionID: "T-Pa-100", printerID: "BK-LTK-009", docName: "Introduction-to-Artificial-Intelligence-Slide.pptx", pageNumber: "300", 
      confirmation: true, status: false, delivery: false},
      {id: "4", time: "17:00:24", date: "18/11/2023", accountName: "Lê Duy Anh", accountNameTag: "anh.leduy04", 
      transactionID: "T-Pa-001", printerID: "BK-LTK-001", docName: "Mark Richards, Neal Ford - Fundamentals of Software Architecture_ An Engineering Approach-O'Reilly Media (2020).pdf", pageNumber: "100", 
      confirmation: true, status: true, delivery: true},
      {id: "5", time: "08:30:29", date: "29/10/2023", accountName: "Nguyễn Trần Bảo Ngọc", accountNameTag: "ngoc.nguyentran", 
      transactionID: "T-Pa-010", printerID: "BK-DiAn-001", docName: "01_Ch1 Introduction_2023.pdf", pageNumber: "20", 
      confirmation: true, status: true, delivery: false},
      {id: "6", time: "20:00:01", date: "05/10/2023", accountName: "Nguyễn Trần Bảo Ngọc", accountNameTag: "ngoc.nguyentran", 
      transactionID: "T-Pa-100", printerID: "BK-LTK-009", docName: "03_Ch3_4 Requirements Engineering_2023.pdf", pageNumber: "22", 
      confirmation: true, status: false, delivery: false},
      {id: "7", time: "17:00:24", date: "18/11/2023", accountName: "Lê Duy Anh", accountNameTag: "anh.leduy04", 
      transactionID: "T-Pa-001", printerID: "BK-LTK-001", docName: "08_Ch8 Implementation_2023.pdf", pageNumber: "15", 
      confirmation: true, status: true, delivery: true},
      {id: "8", time: "08:30:29", date: "29/10/2023", accountName: "Nguyễn Trần Bảo Ngọc", accountNameTag: "ngoc.nguyentran", 
      transactionID: "T-Pa-010", printerID: "BK-DiAn-001", docName: "10_Ch10 Agile Methodology_2023.pdf", pageNumber: "20", 
      confirmation: true, status: true, delivery: false},
      {id: "9", time: "20:00:01", date: "05/10/2023", accountName: "Nguyễn Trần Bảo Ngọc", accountNameTag: "ngoc.nguyentran", 
      transactionID: "T-Pa-100", printerID: "BK-LTK-009", docName: "02_Ch2 Software Processes_2023.pdf", pageNumber: "10", 
      confirmation: true, status: false, delivery: false},
    ];

    // UseState
    const [filterString, setFilterString] = useState("");

    /**
     * Callback: Handle for SearchBar onChange event: set search's value to useState 'filterString'
     * @param {*} event 
     */
    const handleSearchBarOnChange = (event)=>{
      setFilterString(event.target.value);

    }

    /**
     * Get Data to Display, can be got from HardCode or Database
     * @returns :Array of datas
     */
    function getData(){
      return exampleData;
    }

    /**
     * Filter data with match string
     * @param {*} data : data to filter
     * @param {*} filterString : string to filter
     * @returns true : data matchs with filterString
     * @returns false: otherwise
     */
    function filter(data, filterString){
      if (data === undefined || filterString === undefined) return false;
      if (filterString == "") return true;
      //
      filterString = filterString.toLowerCase();
      const nameString = data['docName'].toLowerCase();
      //
      return (nameString.startsWith(filterString));
    }


    /* Display Data to Table
     * Input: array of object: {id, time, date, accountName, accountTagName, transactionID, printerID, docName, pageNumber, 
     *  confirmation:bool, status:bool, delivery:bool} */
    function displayTable(dataArr){
     //
    }

    // Main process
    const dataArr = getData();
    

    // Return
    return (
      

      <Popup openPopup={props.openPopup}>
        <div className="popup-title"><h1>Nhận giao dịch in</h1></div>
        <div className="popup-body">
          <div className={styles.container}>
            <div className={styles.searchContainer}>
                <img src={search_icon} alt="Search" />
                <input type="text" name="seacrhBar" onChange={handleSearchBarOnChange}/>
            </div>
            <div className={styles.tableContainer}>
              <table>
                <thead>
                  <tr>
                      <th style={{width: "8%"}}>Thời gian</th>
                      <th style={{width: "15%"}}>Tên tài khoản</th>
                      <th style={{width: "8%"}}>Mã giao dịch</th>
                      <th style={{width: "8%"}}>Mã máy in</th>
                      <th style={{width: "26%"}}>Tên tài liệu</th>
                      <th style={{width: "5%"}}>Số trang</th>
                      <th style={{width: "10%"}}>Xác nhận giao dịch</th>
                      <th style={{width: "10%"}}>Trạng thái tài liệu</th>
                      <th style={{width: "10%"}}>Trạng thái giao</th>
                    </tr>
                </thead>
                <tbody>
                  {dataArr.map((data)=> filter(data, filterString)&&(<TableRow data={data} key={data['id']}/>)    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="popup-footer">
          <Button className="button-footer" onClick={()=>props.openPopup(false)}>Quay lại</Button>
        </div>
      </Popup>
      
    );
  };
  
  export default NhanGiaoDichIn;