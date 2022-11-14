import searchIcon from "../../../assets/icon/search.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import httpClient from "../../../httpClient.js";

function SearchBar(props) {
  return (
    <div className="flex flex-row w-full justify-center items-center">
      <div className={"z-20"}>
        <img className={"w-4 ml-4"} src={searchIcon} alt="search" />
      </div>
      <input
        onChange={props.handleSearch}
        value={props.search}
        className="sm:w-1/2 w-full -ml-8 h-10 p-2 pl-9 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
        type="text"
        placeholder="Cari Unit Kerja"
      />
    </div>
  );
}

function UnitKerja(props) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [tambahUnitKerja, setTambahUnitKerja] = useState("");
  const [tambahKodeUnitKerja, setTambahKodeUnitKerja] = useState("");
  const [idUpdate, setIdUpdate] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  useEffect(() => {
    httpClient.readUnitKerja().then((data) => {
      console.log(data.data);
      setData(data.data);
    });
  }, []);

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-row gap-y-4 gap-x-6 top-[64px] md:p-8 p-0 pt-3 flex flex-col"
    >
      <SearchBar search={search} handleSearch={handleSearch} />
      <div className=" overflow-x-auto min-w-full  border shadow-md rounded-md">
        <table className="min-w-screen table overflow-x-auto min-w-full ">
          <thead className="bg-white">
            <tr className="bg-white border-b">
              <th className="bg-white"></th>
              <th className="bg-white">Unit Kerja</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.unit_kerja}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UnitKerja;
