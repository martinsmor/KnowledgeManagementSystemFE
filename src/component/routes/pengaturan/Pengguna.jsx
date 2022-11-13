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
  const handleupdateRole = (e) => {
    setUpdateRole(e.target.value);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    httpClient.readAllUser().then((res) => {
      setData(res.data);
    });
  }, []);

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
              onChange={handleupdateRole}
              className="select transition-none w-full form-select appearance-none block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded  m-0  focus:outline-blue-400 focus:outline-offset-0 border border-gray-400 "
            >
              <option>-</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn rounded btn-sm h-10">
              Cancel
            </label>
            <label
              htmlFor="my-modal"
              className="btn btn-primary btn-sm text-white rounded h-10"
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
