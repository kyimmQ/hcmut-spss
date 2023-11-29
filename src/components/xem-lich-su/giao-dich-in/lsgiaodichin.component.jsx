import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/user.context";
import { getPrintHistory } from "../../../ultis/firebase/firebase";
import search from "../../../assets/search.svg"

const LsIn = () => {
  const { currentUser } = useContext(UserContext);
  const [searchField, setSearchField] = useState("");
  const [ls, setLs] = useState([]);
  const [filteredLs, setFilteredLs] = useState(ls);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getPrintHistory(currentUser);
      setLs(response);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const newLs = ls.filter((record) => {
      return record.name.toLocaleLowerCase().includes(searchField);
    }).slice(0,8);
    setFilteredLs(newLs);
  }, [ls, searchField]);
  const handleSearch = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };

  return (
    <div>
      <div className="search-box-container">
        <img src={search} alt="Search" className="search-icon"/>
        <input
          type="search"
          className="search-box"
          onChange={handleSearch}
          placeholder="Tìm tên tài liệu"
        />
      </div>
      <table className="table-history">
        <thead>
          <tr>
            <th className="history-title">Thời gian</th>
            <th className="history-title">Mã giao dịch</th>
            <th className="history-title">Mã máy in</th>
            <th className="history-title">Tên tài liệu</th>
            <th className="history-title">Số trang</th>
            <th className="history-title">Trạng thái</th>
          </tr>
        </thead>
        {/* {console.log(ls)} */}
        <tbody>
          {filteredLs.map((record) => {
            return (
              <tr key={record.ma}>
                <td>{record.date.toDate().toString().slice(0, 24)}</td>
                <td>{record.ma.slice(0, 5)}</td>
                <td>{record.printerCode}</td>
                <td className="filename">{record.name}</td>
                <td className="price-td">{record.numPage}</td>
                <td className="pay-state">{record.printed ? "Printed" : "Received"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LsIn;
