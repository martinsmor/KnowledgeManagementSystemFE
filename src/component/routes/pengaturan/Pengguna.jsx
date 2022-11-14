import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import searchIcon from "../../../assets/icon/search.svg";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import httpClient from "../../../httpClient.js";

function SearchBar() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="flex flex-row w-full justify-center items-center">
      <div className={"z-20"}>
        <img className={"w-4 ml-4"} src={searchIcon} alt="search" />
      </div>
      <input
        onChange={handleSearch}
        value={search}
        className="w-1/2 -ml-8 h-10 p-2 pl-9 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
        type="text"
        placeholder="Cari Pengguna"
      />
    </div>
  );
}

function Pengguna(props) {
  const [updateRole, setUpdateRole] = useState("");
  const [data, setData] = useState([]);
  const [dataRole, setDataRole] = useState([]);
  const [idUpdate, setIdUpdate] = useState("");

  useEffect(() => {
    httpClient.readAllUser().then((res) => {
      setData(res.data);
      console.log(res.data);
    });
    httpClient.readAllRole().then((res) => {
      setDataRole(res.data);
    });
  }, []);

  const handleupdateRole = (id, nama) => {
    setUpdateRole(id);
    console.log(id);
    setIdUpdate(nama);
  };
  const handleChange = (e) => {
    setUpdateRole(e.target.value);
    console.log(e.target.value);
  };
  const confirmUpdate = () => {
    let data = {
      role: updateRole,
    };
    httpClient.updateRole(idUpdate, data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-col gap-y-4 gap-x-6 top-[64px] md:p-8 p-4 flex flex-col"
    >
      <SearchBar />
      <div className=" overflow-x-auto min-w-full  border shadow-md rounded-md">
        <table className="min-w-screen table overflow-x-auto min-w-full ">
          <thead className="bg-white">
            <tr className="bg-white border-b">
              <th className="bg-white"></th>
              <th className="bg-white">Nama</th>
              <th className="bg-white">Unit Kerja</th>
              <th className="bg-white">Role</th>
              <th className="bg-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr key={key + 1}>
                <td>{key + 1}</td>
                <td>{item.nama}</td>
                <td>{item.unit_kerja}</td>
                <td>{item.role}</td>
                <td className="">
                  <label
                    htmlFor="my-modal"
                    className="btn btn-accent rounded btn-sm  text-white"
                    onClick={() => handleupdateRole(item.role, item.username)}
                  >
                    Ubah Role
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*Modal For Ubah Role*/}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box sm:rounded">
          <h3 className="font-bold text-lg">Ubah Role Pengguna</h3>
          <div className={"flex flex-col"}>
            <label htmlFor="">Role</label>
            <select
              value={updateRole}
              onChange={handleChange}
              className="select transition-none w-full form-select appearance-none block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded  m-0  focus:outline-blue-400 focus:outline-offset-0 border border-gray-400 "
            >
              {dataRole.map((item, key) =>
                item.role === updateRole ? (
                  <option key={key} value={item.role} selected>
                    {item.role}
                  </option>
                ) : (
                  <option key={key} value={item.role}>
                    {item.role}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn rounded btn-sm h-10">
              Cancel
            </label>
            <label
              htmlFor="my-modal"
              className="btn btn-primary btn-sm text-white rounded h-10"
              onClick={confirmUpdate}
            >
              Simpan
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pengguna;
