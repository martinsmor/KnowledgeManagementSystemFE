// Page Untuk Melihat Status Konten Yang telah
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import searchIcon from "../../assets/icon/search.svg";
import httpClient from "../../httpClient.js";
import ReactPaginate from "react-paginate";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";
import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import sortIcon from "../../assets/icon/sort.svg";

//search bar component
function SearchBar(props) {
  return (
    <div className="flex flex-row w-full justify-center gap-x-4 items-center">
      <div className={"z-20"}>
        <img className={"w-4 ml-4"} src={searchIcon} alt="search" />
      </div>
      <input
        onChange={props.debouncedResults}
        className="w-full -ml-10 h-10 p-2 pl-10 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
        type="text"
        placeholder="Cari Konten"
      />
      <div
        data-tip={"Urutkan Berdasar " + props.sort}
        className="tooltip tooltip-bottom bg-white  dropdown z-20 dropdown-end rounded-md"
      >
        <label
          tabIndex={0}
          className={
            "sm:flex hidden flex-row cursor-pointer gap-x-2 h-10 min-w-[137px] justify-center items-center  border-blue-400 border-2 rounded-md  px-3"
          }
        >
          <img className={"w-5"} src={sortIcon} alt="" />
          {props.sort}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-md border-gray-300 border min-w-[135px] "
        >
          <li>
            <button onClick={() => props.handleSort("Terbaru")}>Terbaru</button>
          </li>
          <li>
            <button onClick={() => props.handleSort("Judul")}>Judul</button>
          </li>
        </ul>
      </div>
      <div
        data-tip={"Urutkan Berdasar " + props.filter}
        className="tooltip tooltip-bottom bg-white  dropdown z-20 dropdown-end rounded-md"
      >
        <label
          tabIndex={0}
          className={
            "sm:flex hidden  flex-row cursor-pointer gap-x-2 h-10 min-w-[137px] justify-center items-center  border-blue-400 border-2 rounded-md  px-3"
          }
        >
          <img className={"w-5"} src={sortIcon} alt="" />
          {props.filter}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-md border-gray-300 border min-w-[135px] "
        >
          <li>
            <button onClick={() => props.handleFilter("Pending")}>
              Pending
            </button>
          </li>
          <li>
            <button onClick={() => props.handleFilter("Approved")}>
              Approved
            </button>
          </li>
          <li>
            <button onClick={() => props.handleFilter("Rejected")}>
              Rejected
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Kontensaya(props) {
  const [data, setData] = useState([]);
  const [deleteData, setDelete] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [count, setCount] = useState(10);
  const [sort, setSort] = useState("Terbaru");
  const [filter, setFilter] = useState("Pending");
  const [loading, setLoading] = useState(true);

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const handleSort = (event) => {
    setSort(event);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  useEffect(() => {
    setLoading(true);
    let data = {
      search: search,
      username: "user1",
      limit: rowsPerPage,
      page: page + 1,
      sort: sort,
      filter: filter,
    };
    httpClient.readContentByUsername(data).then((res) => {
      setData(res.data.content);
      setCount(res.data.total);
      res.data.content.map((item) => {
        //  change date format from yyyy-mm-dd to dd-mm-yyyy month name
        let date = new Date(item.tanggal);
        let month = date.toLocaleString("default", { month: "long" });
        let day = date.getDate();
        let year = date.getFullYear();
        item.tanggal = day + " " + month + " " + year;
      });
      setLoading(false);
      console.log(res.data);
    });
  }, [search, page, rowsPerPage, sort, filter]);

  function handleDelete(e) {
    setDelete(e);
    console.log(e);
  }

  function confirmDelete() {
    httpClient.deleteContent(deleteData).then((res) => {
      console.log(res);
    });
  }

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-col gap-y-4 gap-x-6 top-[64px] md:p-8 p-4 "
    >
      <SearchBar
        search={search}
        debouncedResults={debouncedResults}
        handleSort={handleSort}
        sort={sort}
        filter={filter}
        handleFilter={handleFilter}
      />
      <div className=" overflow-x-auto min-w-full  border shadow-md rounded-md">
        <table className="min-w-screen table overflow-x-auto min-w-full ">
          <thead className="bg-white">
            <tr className="bg-white border-b">
              <th className="bg-white"></th>
              <th className="bg-white">Judul</th>
              <th className="bg-white">Tanggal</th>
              <th className="bg-white">Status</th>
              <th className="bg-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? [...Array(10)].map((item, index) => (
                  <tr className="bg-white border-b min-h-[65px]">
                    <td className="bg-white">
                      <progress className="progress"></progress>
                    </td>
                    <td className="bg-white">
                      <progress className="progress"></progress>
                    </td>
                    <td className="bg-white">
                      <progress className="progress"></progress>
                    </td>
                    <td className="bg-white">
                      <progress className="progress"></progress>
                    </td>
                    <td className="bg-white">
                      <progress className="progress"></progress>
                    </td>
                  </tr>
                ))
              : null}

            {count === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  Konten Tidak Ditemukan
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index + 1}>
                  <td className={"text-center font-semibold"}>
                    {index + 1 + page * 10}
                  </td>
                  <td>{item.judul}</td>
                  <td>{item.tanggal}</td>
                  <td>
                    <div className="badge badge-error badge-outline w-20">
                      {item.status}
                    </div>
                  </td>
                  <td className="w-[260px]">
                    <Link to={"/konten"}>
                      <button className="btn btn-info rounded btn-sm text-white">
                        Detail
                      </button>
                    </Link>
                    <Link
                      to={"/editkonten"}
                      href="frontend/src/Views/User/AturMember.jsx"
                    >
                      <button className="btn btn-success mx-2 rounded btn-sm text-white">
                        Edit
                      </button>
                    </Link>
                    <label
                      htmlFor="my-modal"
                      onClick={() => handleDelete(item.contentId)}
                      className="btn btn-error rounded btn-sm  text-white"
                    >
                      Delete
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
      {/*Delete Modal */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box sm:rounded">
          <h3 className="font-bold text-lg">
            Apakah anda yakin ingin menghapus konten
          </h3>
          <p className="py-4">Bagaimana Pencatatan Kelahiran</p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn rounded btn-sm h-10">
              Cancel
            </label>
            <label
              onClick={confirmDelete}
              htmlFor="my-modal"
              className="btn btn-error text-white rounded  btn-sm h-10"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontensaya;
