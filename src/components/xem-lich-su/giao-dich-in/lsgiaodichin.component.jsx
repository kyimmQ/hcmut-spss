import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/user.context";
import { getPrintHistory } from "../../../ultis/firebase/firebase";
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
    });
    setFilteredLs(newLs);
  }, [ls, searchField]);
  const handleSearch = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };

  return (
    <div>
      <input
        type="search"
        className="search-box"
        onChange={handleSearch}
        placeholder="Tìm tên tài liệu"
      />
      <table>
        <thead>
          <tr>
            <th>Thời gian</th>
            <th>Mã giao dịch</th>
            <th>Mã máy in</th>
            <th>Tên tài liệu</th>
            <th>Số trang</th>
            <th>Trạng thái</th>
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
                <td>{record.name}</td>
                <td>{record.numPage}</td>
                <td>{record.printed ? "Printed" : "Received"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LsIn;
