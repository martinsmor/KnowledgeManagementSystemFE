import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import searchIcon from "../../../assets/icon/search.svg";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import httpClient from "../../../httpClient.js";
import TablePagination from "@mui/material/TablePagination";
import debounce from "lodash.debounce";
import FilterIcon from "../../../assets/icon/FilterIcon.jsx";

function SearchBar(props) {
  const [jenisKonten, setJenisKonten] = useState("-");
  const [kategoriKonten, setKategoriKonten] = useState("-");
  const [filter, setFilter] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  const handleJenisKonten = (e) => {
    setJenisKonten(e.target.value);
    console.log(e.target.value);
  };
  const handleKategoriKonten = (e) => {
    setKategoriKonten(e.target.value);
    console.log(e.target.value);
  };
  const handleReset = () => {
    setKategoriKonten("");
    setJenisKonten("");
  };
  const handleSimpan = () => {
    setFilter([jenisKonten, kategoriKonten]);
    props.filter([jenisKonten, kategoriKonten]);
    setIsFilter(true);
    console.log(filter);
  };
  const handleFilter = () => {
    if (!isFilter) {
      setJenisKonten("");
      setKategoriKonten("");
    } else {
      setJenisKonten(filter[0]);
      setKategoriKonten(filter[1]);
    }
  };
  return (
    <div className="flex flex-row w-full justify-center gap-x-4 items-center">
      <div className={"z-20"}>
        <img className={"w-4 ml-4"} src={searchIcon} alt="search" />
      </div>
      <input
        onChange={props.debouncedResults}
        className="w-full -ml-11 h-10 p-2 pl-11 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
        type="text"
        placeholder="Cari Pengguna Berdasarkan Nama"
      />
      <label
        onClick={handleFilter}
        htmlFor="my-modal-4"
        className={
          "w-[150px] modal-button cursor-pointer gap-x-2 bg-white  flex flex-row h-10 justify-center items-center  border-gray-400 border rounded-md  px-3"
        }
      >
        <FilterIcon />
        Filter
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label
        htmlFor="my-modal-4"
        className="modal sm:modal-middle modal-bottom cursor-pointer rounded-md"
      >
        <label
          className="modal-box relative rounded-md sm:rounded-md"
          htmlFor=""
        >
          <h3 className="text-3xl font-bold mb-3">Filter Pengguna</h3>
          <div className="flex flex-col gap-y-2">
            <div className={"flex flex-col"}>
              <label htmlFor="">Unit Kerja</label>
              <select
                value={jenisKonten}
                onChange={handleJenisKonten}
                className="select transition-none min-h-0 h-10 w-full form-select appearance-none block w-full px-3  text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded  m-0  focus:outline-blue-500 focus:outline-offset-0 border border-gray-400 "
              >
                <option value={""}>-</option>
                {props.dataUnitKerja.map((item, index) => {
                  return (
                    <option value={item.unit_kerja}>{item.unit_kerja}</option>
                  );
                })}
              </select>
            </div>
            <div className={"flex flex-col"}>
              <label htmlFor="">Role</label>
              <select
                value={kategoriKonten}
                onChange={handleKategoriKonten}
                className="select transition-none w-full  min-h-0 h-10 form-select appearance-none block w-full px-3 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded  m-0  focus:outline-blue-500 focus:outline-offset-0 border border-gray-400 "
              >
                <option value={""}>-</option>
                {props.dataRole.map((item, key) => (
                  <option key={key} value={item.role}>
                    {item.role}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="modal-action">
            <label onClick={handleReset} className="btn btn-sm rounded h-10">
              Reset
            </label>
            <label
              onClick={handleSimpan}
              htmlFor="my-modal-4"
              className="btn btn-sm  btn-primary rounded h-10"
            >
              Simpan
            </label>
          </div>
        </label>
      </label>
    </div>
  );
}

function Pengguna(props) {
  const [updateRole, setUpdateRole] = useState("");
  const [data, setData] = useState([]);
  const [dataRole, setDataRole] = useState([]);
  const [idUpdate, setIdUpdate] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [count, setCount] = useState(10);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(["", ""]);
  const [dataUnitKerja, setDataUnitKerja] = useState([]);

  const handleFilter = (e) => {
    setFilter(e);
  };

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  useEffect(() => {
    httpClient.readAllRole().then((res) => {
      setDataRole(res.data);
    });
    let data = {
      page: 1,
      limit: 1000,
    };
    httpClient.readUnitKerja(data).then((res) => {
      setDataUnitKerja(res.data.unit_kerja);
    });
  }, []);

  useEffect(() => {
    let data = {
      search: search,
      limit: rowsPerPage,
      page: page + 1,
      unitkerja: filter[0],
      role: filter[1],
    };
    httpClient.readAllUser(data).then((res) => {
      setData(res.data.user);
      setCount(res.data.total);
      console.log(res.data.user);
    });
  }, [search, page, rowsPerPage, filter]);

  const handleupdateRole = (id, nama) => {
    setUpdateRole(id);
    console.log(id);
    setIdUpdate(nama);
  };
  const handleChange = (e) => {
    setUpdateRole(e.target.value);
    console.log(e.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const confirmUpdate = () => {
    let data = {
      role: updateRole,
    };
    httpClient.updateRole(idUpdate, data).then((res) => {
      console.log(res);
    });
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-col gap-y-4 gap-x-6 top-[64px] md:p-8 p-4 flex flex-col"
    >
      <SearchBar
        search={search}
        handleSearch={handleSearch}
        debouncedResults={debouncedResults}
        filter={handleFilter}
        dataRole={dataRole}
        dataUnitKerja={dataUnitKerja}
      />
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
            {data.map((item, index) => (
              <tr key={index + 1}>
                <td className={"text-center font-semibold w-[80px]"}>
                  {index + 1 + page * 10}
                </td>
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
      <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
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
