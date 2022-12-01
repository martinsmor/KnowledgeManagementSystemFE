// Halaman Approval yang berisi konten yang harus di approve oleh approval di unit kerja yang sama dengan content creator

import { Link } from "react-router-dom";
import React, { useContext, useEffect, useMemo, useState } from "react";
import searchIcon from "../../assets/icon/search.svg";
import httpClient from "../../httpClient.js";
import debounce from "lodash.debounce";
import TablePagination from "@mui/material/TablePagination";
import { Skeleton } from "@mui/material";
import { useSnackbar } from "notistack";
import { UserContext } from "../../App.jsx";

function SearchBar(props) {
  return (
    <div className="flex flex-row w-full justify-center gap-4 items-center">
      <div className={"z-20"}>
        <img className={"w-4 ml-4"} src={searchIcon} alt="search" />
      </div>
      <input
        onChange={props.debouncedResults}
        className="sm:w-full  dark:bg-[#171717]  w-full -ml-12 sm:-ml-11 h-10 p-2 pl-10 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
        type="text"
        placeholder="Cari Konten"
      />
      <div
        data-tip={"Urutkan Berdasar " + props.sort}
        className="sm:inline-block hidden  dark:bg-[#171717]  tooltip tooltip-bottom bg-white  dropdown z-20 dropdown-end rounded-md"
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
          className="dropdown-content dark:bg-[#171717] dark:border-zinc-800  menu p-2 shadow bg-base-100 rounded-md border-gray-300 border min-w-[135px] "
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
    </div>
  );
}

function Approval(props) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState("");
  const [feedback, setFeedback] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [count, setCount] = useState(10);
  const [sort, setSort] = useState("Terbaru");
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState(false);
  const [judulClicked, setJudulClicked] = useState("");
  const user = useContext(UserContext);

  const handleTerima = (id) => {
    setClicked(id);
    let clickData = data.filter((item) => item.contentId === id);
    setJudulClicked(clickData[0].judul);
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

  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  useEffect(() => {
    setError(false);
    setLoading(true);
    setData([]);
    let data = {
      search: search,
      username: (user && user.username) || "xyz",
      limit: rowsPerPage,
      page: page + 1,
      sort: sort,
    };
    httpClient
      .readApprovalContent(data)
      .then((res) => {
        setData(res.data.content);
        setCount(res.data.total);
      })
      .catch((err) => {
        enqueueSnackbar("Terjadi kesalahan", { variant: "error" });
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search, page, rowsPerPage, sort]);
  const handleTanggal = (tanggal) => {
    let date = new Date(tanggal);
    let month = date.toLocaleString("default", { month: "long" });
    let day = date.getDate();
    let year = date.getFullYear();
    return day + " " + month + " " + year;
  };

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const confirmTerima = () => {
    let data1 = {
      status: "Diterima",
    };
    httpClient
      .changeStatusContent(clicked, data1)
      .then((res) => {
        enqueueSnackbar("Konten Berhasil Diterima", {
          variant: "success",
        });
        setData(data.filter((item) => item.contentId !== clicked));
        setCount(count - 1);
      })
      .catch((err) => {
        enqueueSnackbar("Mohon Maaf, Terjadi Kesalahan", {
          variant: "error",
        });
      });
  };

  const confirmTolak = () => {
    let data1 = {
      status: "Ditolak",
    };
    httpClient
      .changeStatusContent(clicked, data1)
      .then((res) => {
        enqueueSnackbar("Konten Berhasil Ditolak", { variant: "success" });
        setData(data.filter((item) => item.contentId !== clicked));
        setCount(count - 1);
      })
      .catch((err) => {
        enqueueSnackbar("Mohon Maaf, Terjadi Kesalahan", { variant: "error" });
      });
    let data2 = {
      feedback: feedback,
      from: user.username,
    };
    httpClient.addFeedback(clicked, data2).then((res) => {});
  };

  const handleFeedback = (e) => {
    setFeedback(e.target.value);
  };

  const handleTolak = (id) => {
    setClicked(id);

    setFeedback("");
  };

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute  dark:bg-black  content flex flex-col gap-y-4 gap-x-6 top-[64px] md:p-8 p-4 flex flex-col"
    >
      <SearchBar
        search={search}
        debouncedResults={debouncedResults}
        sort={sort}
        handleSort={handleSort}
      />
      <div className=" overflow-x-auto min-w-full  border shadow-md rounded-md">
        <table className="min-w-screen table overflow-x-auto min-w-full ">
          <thead className="bg-white dark:bg-[#171717] ">
            <tr className="bg-white  dark:bg-[#171717] border-b">
              <th className="bg-white  dark:bg-[#171717] "></th>
              <th className="bg-white dark:bg-[#171717] ">Judul</th>
              <th className="bg-white dark:bg-[#171717] ">Tanggal</th>
              <th className="bg-white dark:bg-[#171717] ">Diajukan Oleh</th>
              <th className="bg-white dark:bg-[#171717] ">Action</th>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <tr>
                <td colSpan={5} className="text-center  dark:bg-[#171717] ">
                  Mohon Maaf, Terjadi Kesalahan
                </td>
              </tr>
            ) : null}
            {loading
              ? [...Array(10)].map((item, index) => (
                  <tr key={index} className="bg-white border-b min-h-[65px]">
                    <td className=" dark:bg-[#171717] bg-white">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                    <td className=" dark:bg-[#171717] bg-white">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                    <td className=" dark:bg-[#171717] bg-white">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                    <td className=" dark:bg-[#171717] bg-white">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                    <td className=" dark:bg-[#171717] bg-white">
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
              data.map((item, index) => {
                return (
                  <tr key={index + 1}>
                    <td
                      className={
                        "text-center font-semibold w-[80px] dark:bg-[#171717] "
                      }
                    >
                      {index + 1 + page * rowsPerPage}
                    </td>
                    <td
                      className={
                        "max-w-[400px] whitespace-normal  dark:bg-[#171717] "
                      }
                    >
                      {item.judul}
                    </td>
                    <td className={" dark:bg-[#171717] "}>
                      {handleTanggal(item.tanggal)}
                    </td>
                    <td className={" dark:bg-[#171717] "}>{item.nama}</td>
                    <td className="w-[260px]  dark:bg-[#171717] ">
                      <div className={"gap-x-2 flex"}>
                        <Link to={"/konten/" + item.contentId}>
                          <button className="btn btn-info rounded btn-sm text-white hover:underline">
                            Detail
                          </button>
                        </Link>
                        <label
                          htmlFor="my-modal"
                          onClick={() => handleTerima(item.contentId)}
                          className="btn btn-primary rounded btn-sm text-white"
                        >
                          Terima
                        </label>
                        <label
                          htmlFor="my-modal1"
                          onClick={() => handleTolak(item.contentId)}
                          className="btn btn-error rounded btn-sm text-white"
                        >
                          Tolak
                        </label>
                      </div>
                    </td>
                  </tr>
                );
              })
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

      {/*Terima Modal */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box  dark:bg-[#171717]  rounded-md sm:rounded">
          <h3 className="font-bold text-lg">
            Apakah anda yakin ingin Menerima Konten ini?
          </h3>
          <p className="py-4">{judulClicked}</p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn rounded btn-sm h-10">
              Cancel
            </label>
            <label
              htmlFor="my-modal"
              onClick={confirmTerima}
              className="btn btn-primary text-white rounded  btn-sm h-10"
            >
              Terima
            </label>
          </div>
        </div>
      </div>
      {/*Tolak Modal */}
      <input type="checkbox" id="my-modal1" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box  dark:bg-[#171717]  rounded-md sm:rounded">
          <h3 className="font-bold text-lg mb-2">
            Apakah anda yakin ingin Menolak Konten ini?
          </h3>
          <div className={"flex flex-col"}>
            <label htmlFor="feedback">Beri Feedback Untuk Konten ini</label>
            <input
              onChange={handleFeedback}
              value={feedback}
              className="w-full  dark:bg-[#171717]  h-10 p-2 px-3 border border-gray-400 rounded focus:outline-2 focus:outline-blue-500"
              type="text"
              placeholder="Beri Feedback"
            />
          </div>

          <div className="modal-action">
            <label htmlFor="my-modal1" className="btn rounded btn-sm h-10">
              Cancel
            </label>
            <label
              htmlFor="my-modal1"
              onClick={confirmTolak}
              className="btn btn-error text-white rounded  btn-sm h-10"
            >
              Tolak
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approval;
