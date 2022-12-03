// Page Untuk Melihat Status Konten Yang telah di Buat
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
import searchIcon from "../../assets/icon/search.svg";
import httpClient from "../../httpClient.js";
import TablePagination from "@mui/material/TablePagination";
import React from "react";
import { Skeleton } from "@mui/material";
import { useSnackbar } from "notistack";
import { UserContext } from "../../App.jsx";

//search bar component dan Sort
function SearchBar(props) {
  return (
    <div className="flex flex-row w-full justify-center gap-x-4 items-center">
      <div className={"z-20"}>
        <img className={"w-4 ml-4"} src={searchIcon} alt="search" />
      </div>
      <input
        onChange={props.debouncedResults}
        className="w-full  dark:bg-[#171717]  sm:-ml-10 -ml-12 h-10 p-2 pl-10 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
        type="text"
        placeholder="Cari Konten"
      />
      <div
        data-tip={"Urutkan Berdasar " + props.sort}
        className="sm:inline-block  dark:bg-[#171717] hidden  tooltip tooltip-bottom bg-white  dropdown z-20 dropdown-end rounded-md"
      >
        <label
          tabIndex={0}
          className={
            "sm:flex hidden flex-row cursor-pointer gap-x-2 h-10 min-w-[137px] justify-center items-center  border-blue-400 border-2 rounded-md  px-3"
          }
        >
          <svg
            className={"w-5 dark:fill-white"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H320z" />
          </svg>
          {props.sort}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content  dark:bg-[#171717] dark:border-zinc-800   menu p-2 shadow bg-base-100 rounded-md border-gray-300 border min-w-[135px] "
        >
          <li>
            <button
              className={"dark:hover:bg-gray-700"}
              onClick={() => props.handleSort("Terbaru")}
            >
              Terbaru
            </button>
          </li>
          <li>
            <button
              className={"dark:hover:bg-gray-700"}
              onClick={() => props.handleSort("Judul")}
            >
              Judul
            </button>
          </li>
        </ul>
      </div>
      <div
        data-tip={"Tampilkan " + props.filter}
        className="sm:inline-block  dark:bg-[#171717]  dark:border-zinc-800   hidden tooltip tooltip-bottom bg-white  dropdown z-20 dropdown-end rounded-md"
      >
        <label
          tabIndex={0}
          className={
            "sm:flex hidden  flex-row cursor-pointer gap-x-2 h-10 min-w-[137px] justify-center items-center  border-blue-400 border-2 rounded-md  px-3"
          }
        >
          <svg
            className={"w-5 dark:fill-white"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
          </svg>
          {props.filter}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content  dark:bg-[#171717]  menu p-2 shadow bg-base-100 rounded-md border-gray-300 border min-w-[135px] "
        >
          <li>
            <button
              className={"dark:hover:bg-gray-700"}
              onClick={() => props.handleFilter("All")}
            >
              Semua
            </button>
          </li>
          <li>
            <button
              className={"dark:hover:bg-gray-700"}
              onClick={() => props.handleFilter("Menunggu")}
            >
              Menunggu
            </button>
          </li>
          <li>
            <button
              className={"dark:hover:bg-gray-700"}
              onClick={() => props.handleFilter("Diterima")}
            >
              Diterima
            </button>
          </li>
          <li>
            <button
              className={"dark:hover:bg-gray-700"}
              onClick={() => props.handleFilter("Ditolak")}
            >
              Ditolak
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Kontensaya(props) {
  const user = useContext(UserContext);

  const [data, setData] = useState([]);
  const [deleteData, setDelete] = useState("");
  const [deleteJudul, setDeleteJudul] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [count, setCount] = useState(10);
  const [sort, setSort] = useState("Terbaru");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setError(false);
    setLoading(true);
    setData([]);
    let data = {
      search: search,
      username: user.username,
      limit: rowsPerPage,
      page: page + 1,
      sort: sort,
      filter: filter,
    };
    httpClient
      .readContentByUsername(data)
      .then((res) => {
        setData(res.data.content);
        setCount(res.data.total);
      })
      .catch((err) => {
        enqueueSnackbar("Mohon Maaf, Terjadi Kesalahan", {
          variant: "error",
        });
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search, page, rowsPerPage, sort, filter]);

  function handleDelete(e) {
    setDelete(e);
    let dataDelete = data.filter((item) => item.contentId === e)[0];
    setDeleteJudul(dataDelete.judul);
  }

  function confirmDelete() {
    httpClient
      .deleteContent(deleteData)
      .then((res) => {
        enqueueSnackbar("Konten Berhasi Dihapus", { variant: "success" });
        //  delete data from state
        setData(data.filter((item) => item.contentId !== deleteData));
        setCount(count - 1);
      })
      .catch((err) => {
        enqueueSnackbar("Mohon Maaf, Terjadi Kesalahan", {
          variant: "success",
        });
      });
  }

  const handleTanggal = (tanggal) => {
    let date = new Date(tanggal);
    let month = date.toLocaleString("default", { month: "long" });
    let day = date.getDate();
    let year = date.getFullYear();
    return day + " " + month + " " + year;
  };

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute dark:bg-black content flex flex-col gap-y-4 gap-x-6 top-[64px] md:p-8 p-4 "
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
        <table className="min-w-screen table overflow-x-auto min-w-full">
          <thead className="bg-white  dark:bg-[#171717] ">
            <tr className="bg-white dark:bg-[#171717]  border-b">
              <th className="bg-white dark:bg-[#171717] "></th>
              <th className="bg-white dark:bg-[#171717] ">Judul</th>
              <th className="bg-white dark:bg-[#171717] ">Tanggal</th>
              <th className="bg-white dark:bg-[#171717] ">Status</th>
              <th className="bg-white dark:bg-[#171717] ">Action</th>
            </tr>
          </thead>
          <tbody className={" dark:bg-[#171717] "}>
            {error ? (
              <tr>
                <td colSpan={5} className="text-center  dark:bg-[#171717] ">
                  Mohon Maaf, Terjadi Kesalahan
                </td>
              </tr>
            ) : null}
            {loading
              ? [...Array(10)].map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white  dark:bg-[#171717]  border-b min-h-[65px]  dark:bg-[#171717] "
                  >
                    <td className="bg-white dark:bg-[#171717] ">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                    <td className="bg-white dark:bg-[#171717] ">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                    <td className="bg-white dark:bg-[#171717] ">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                    <td className="bg-white dark:bg-[#171717] ">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                    <td className="bg-white dark:bg-[#171717] ">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                  </tr>
                ))
              : null}

            {count === 0 ? (
              <tr>
                <td colSpan="5" className="text-center  dark:bg-[#171717] ">
                  Konten Tidak Ditemukan
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index + 1}>
                  <td
                    className={"text-center font-semibold dark:bg-[#171717] "}
                  >
                    {index + 1 + page * rowsPerPage}
                  </td>
                  <td
                    className={
                      "max-w-[400px] min-w-[200px]  whitespace-normal  dark:bg-[#171717] "
                    }
                  >
                    {item.judul}
                  </td>
                  <td className={" dark:bg-[#171717] "}>
                    {handleTanggal(item.tanggal)}
                  </td>
                  <td className={" dark:bg-[#171717] "}>
                    <div className={"flex flex-row gap-2"}>
                      <div
                        className={
                          item.status === "Menunggu"
                            ? "badge  badge-outline w-20"
                            : item.status === "Diterima"
                            ? "badge badge-success badge-outline w-20"
                            : item.status === "Ditolak"
                            ? "badge badge-error badge-outline w-20"
                            : "badge badge-outline w-20"
                        }
                      >
                        {item.status}
                      </div>
                      {item.status === "Ditolak" ? (
                        <div
                          className={
                            "tooltip whitespace-normal cursor-pointer before:w-[20rem] before:content-[attr(data-tip)]"
                          }
                          data-tip={item.feedback}
                        >
                          <svg
                            className={"w-5 fill-rose-500"}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
                          </svg>
                        </div>
                      ) : null}
                    </div>
                  </td>
                  <td className="w-[260px] dark:bg-[#171717] ">
                    <Link to={"/konten/" + item.contentId}>
                      <button className="btn btn-info rounded btn-sm text-white hover:underline">
                        Detail
                      </button>
                    </Link>
                    <Link
                      to={"/editkonten/" + item.contentId}
                      href="frontend/src/Views/User/AturMember.jsx"
                    >
                      <button className="btn btn-success mx-2 rounded btn-sm text-white hover:underline">
                        Edit
                      </button>
                    </Link>
                    <label
                      htmlFor="my-modal"
                      onClick={() => handleDelete(item.contentId)}
                      className="btn btn-error rounded btn-sm  text-white hover:underline"
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
      <div className={"rounded-md dark:bg-slate-500"}>
        <TablePagination
          component="div"
          count={count}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>

      {/*Delete Modal */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal  modal-bottom sm:modal-middle ">
        <div className="modal-box  dark:bg-[#171717] sm:rounded rounded-md">
          <h3 className="font-bold text-xl">
            Apakah anda yakin ingin menghapus konten
          </h3>
          <p className="py-4">{deleteJudul}</p>
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
