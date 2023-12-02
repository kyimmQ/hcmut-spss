import React, {useState} from "react";

import styles from './nhangiaodichtablecontent.module.css'


/* Component to display each row of table in NhanGiaoDich 
*   props:  
*       + data: object of each row to display: {id, time, date, accountName, accountNameTag, transactionID, printerID, docName, pageNumber, 
*                           confirmation:bool, status:bool, delivery:bool}
*/

const TableRow = (props) => {
    const data = props.data;
    
    return(
        <tr>
            <td>
            <div className={styles.time}>{data.time}</div>
            <div className={styles.date}>{data.data}</div>
            </td>
            <td>
            <div className={styles.accountName}>{data.accountName}</div>
            <div className={styles.accountNameTag}>{data.accountNameTag}</div>
            </td>
            <td>{data.transactionID}</td>
            <td>{data.printerID}</td>
            <td>{data.docName}</td>
            <td>{data.pageNumber}</td>
            <td>
            <input type="radio" name={"confirmation"+data.id}  value="Confirm" checked={data.confirmation} readOnly/>
            <span >Xác nhận</span>
            <br />
            <input type="radio" name={"confirmation"+data.id}  value="UnConfirm" checked={!data.confirmation} readOnly/>
            <span >Chưa xác nhận</span>
            </td>
            <td>
            <input type="radio" name={"status"+data.id}  value="Printed" checked={data.status} readOnly/>
            <span >Đã in</span>
            <br />
            <input type="radio" name={"status"+data.id}  value="UnPrinted" checked={!data.status} readOnly/>
            <span >Chưa in</span>
            </td>
            <td>
            <input type="radio" name={"delivery"+data.id}  value="Delivered" checked={data.delivery} readOnly/>
            <span >Đã in</span>
            <br />
            <input type="radio" name={"delivery"+data.id} value="UnDelivered" checked={!data.delivery} readOnly/>
            <span >Chưa in</span>
            </td>
        </tr>

        
    );

}

export default TableRow;
