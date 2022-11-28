// Page Pengguna yang berisi pengguna dan mengubah role pengguna

import React, { useEffect, useMemo, useState } from "react";
import searchIcon from "../../../assets/icon/search.svg";
import httpClient from "../../../httpClient.js";
import TablePagination from "@mui/material/TablePagination";
import debounce from "lodash.debounce";
import { Skeleton } from "@mui/material";
import { useSnackbar } from "notistack";

function SearchBar(props) {
  const [jenisKonten, setJenisKonten] = useState("-");
  const [kategoriKonten, setKategoriKonten] = useState("-");
  const [filter, setFilter] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  const handleJenisKonten = (e) => {
    setJenisKonten(e.target.value);
  };
  const handleKategoriKonten = (e) => {
    setKategoriKonten(e.target.value);
  };
  const handleReset = () => {
    setKategoriKonten("");
    setJenisKonten("");
  };
  const handleSimpan = () => {
    setFilter([jenisKonten, kategoriKonten]);
    props.filter([jenisKonten, kategoriKonten]);
    setIsFilter(true);
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
        className="w-full sm:-ml-11 -ml-9  h-10 p-2 pl-11 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
        type="text"
        placeholder="Cari Pengguna"
      />
      <label
        onClick={handleFilter}
        htmlFor="my-modal-4"
        className={
          "w-[150px] modal-button cursor-pointer gap-x-2 bg-white  flex flex-row h-10 justify-center items-center  border-gray-400 border rounded-md  px-3"
        }
      >
        <svg
          className={"w-5"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
        </svg>
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
                    <option key={index} value={item.unit_kerja}>
                      {item.unit_kerja}
                    </option>
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleFilter = (e) => {
    setFilter(e);
  };

  function handleSearch(e) {
    setSearch(e.target.value);
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
    setError(false);
    setLoading(true);
    setData([]);
    let data = {
      search: search,
      limit: rowsPerPage,
      page: page + 1,
      unitkerja: filter[0],
      role: filter[1],
    };
    httpClient
      .readAllUser(data)
      .then((res) => {
        setData(res.data.user);
        setCount(res.data.total);
      })
      .catch((err) => {
        setError(true);
        enqueueSnackbar("Mohon Maaf, Terjadi Kesalahan", { variant: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search, page, rowsPerPage, filter]);

  const handleupdateRole = (id, nama) => {
    setUpdateRole(id);
    setIdUpdate(nama);
  };
  const handleChange = (e) => {
    setUpdateRole(e.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const confirmUpdate = () => {
    let data1 = {
      role: updateRole,
    };
    httpClient
      .updateRole(idUpdate, data1)
      .then((res) => {
        // change role in data state
        let newData = data.map((item) => {
          if (item.username === idUpdate) {
            item.role = updateRole;
          }
          return item;
        });
        setData(newData);
        enqueueSnackbar("Berhasil Mengubah Role", { variant: "success" });
      })
      .catch((err) => {
        enqueueSnackbar("Mohon Maaf, Terjadi Kesalahan", { variant: "error" });
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
            {error ? (
              <tr>
                <td colSpan={5} className="text-center">
                  Mohon Maaf, Terjadi Kesalahan
                </td>
              </tr>
            ) : null}
            {loading
              ? [...Array(10)].map((item, index) => (
                  <tr key={index} className="bg-white border-b min-h-[65px]">
                    <td className="bg-white">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                    <td className="bg-white">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                    <td className="bg-white">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                    <td className="bg-white">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                    <td className="bg-white">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                  </tr>
                ))
              : null}
            {count === 0 ? (
              <tr>
                <td colSpan={5} className="text-center">
                  Pengguna Tidak Ditemukan
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
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
                      className={
                        item.role === "Administrator"
                          ? "btn-disabled btn btn-accent rounded btn-sm  text-white"
                          : "btn btn-accent rounded btn-sm  text-white"
                      }
                      onClick={() => handleupdateRole(item.role, item.username)}
                    >
                      Ubah Role
                    </label>
                  </td>
                </tr>
              ))
            )}
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
        <div className="modal-box rounded-md sm:rounded">
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
