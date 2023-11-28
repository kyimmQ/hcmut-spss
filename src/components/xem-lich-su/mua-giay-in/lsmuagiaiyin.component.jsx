import React, { useContext, useEffect, useState } from "react";
import { getBuyHistory } from "../../../ultis/firebase/firebase";
import { UserContext } from "../../../contexts/user.context";

const LsMuaGiay = () => {
  const { currentUser } = useContext(UserContext);
  const [searchField, setSearchField] = useState("");
  const [ls, setLs] = useState([]);
  const [filteredLs, setFilteredLs] = useState(ls);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBuyHistory(currentUser);

      setLs(response);
    };
    fetchData();
    // const newLs = response.map((response) => response);
    // console.log(newLs);
  }, []);

  useEffect(() => {
    const newLs = ls.filter((record) => {
      return record.ma.toLocaleLowerCase().includes(searchField);
    });
    setFilteredLs(newLs);
  }, [ls, searchField]);
  const handleSearch = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    setSearchField(searchString);
    // const newLs = ls.filter((record) => {
    //   return record.ma.toLocaleLowerCase().includes(searchField);
    // });

    // // console.log(newLs, searchField);
    // setFilteredLs(newLs);
  };
  // console.log(filteredLs);
  return (
    <div>
      <input
        type="search"
        className="search-box"
        onChange={handleSearch}
        placeholder="Tìm mã số"
      />
      <table>
        <thead>
          <tr>
            <th>Thời gian</th>
            <th>Mã giao dịch</th>
            <th>Số trang</th>
            <th>Giá tiền</th>
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
                <td>{record.soluonggiay}</td>
                <td>{`${record.giatien} VNĐ`}</td>
                <td>{record.paid ? "Paid" : "Unpaid"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LsMuaGiay;
