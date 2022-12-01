// Merupakan Page Unit Kerja yang ada

import searchIcon from "../../../assets/icon/search.svg";
import React, { useEffect, useMemo, useState } from "react";
import httpClient from "../../../httpClient.js";
import TablePagination from "@mui/material/TablePagination";
import debounce from "lodash.debounce";
import { useSnackbar } from "notistack";
import { Skeleton } from "@mui/material";

function SearchBar(props) {
  return (
    <div className="flex flex-row w-full justify-center items-center">
      <div className={"z-20"}>
        <img className={"w-4 ml-4"} src={searchIcon} alt="search" />
      </div>
      <input
        onChange={props.debounceResults}
        className="sm:w-full dark:bg-[#171717]  w-full -ml-8 h-10 p-2 pl-10 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
        type="text"
        placeholder="Cari Unit Kerja"
      />
    </div>
  );
}

function UnitKerja(props) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setLoading(true);
    setData([]);
    let data = {
      search: search,
      limit: rowsPerPage,
      page: page + 1,
    };
    httpClient
      .readUnitKerja(data)
      .then((data) => {
        setData(data.data.unit_kerja);
        setCount(data.data.total);
      })
      .catch((err) => {
        enqueueSnackbar("Mohon Maaf, Terjadi Kesalahan", { variant: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search, page, rowsPerPage]);

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
      className="absolute  dark:bg-black content flex flex-row gap-y-4 gap-x-6 top-[64px] md:p-8 p-0 pt-3 flex flex-col md:p-8 p-4"
    >
      <SearchBar search={search} debounceResults={debouncedResults} />
      <div className=" overflow-x-auto min-w-full   border shadow-md rounded-md">
        <table className="min-w-screen table overflow-x-auto min-w-full border-black ">
          <thead className="bg-white  border-black ">
            <tr className="bg-white border-b">
              <th className="bg-white dark:bg-[#171717] "></th>
              <th className="bg-white dark:bg-[#171717] ">Unit Kerja</th>
            </tr>
          </thead>
          <tbody>
            {count === 0 ? (
              <tr className="border-b">
                <td className="p-3 dark:bg-[#171717] "></td>
                <td className="p-3 dark:bg-[#171717] ">
                  Unit Kerja Tidak Ditemukan
                </td>
              </tr>
            ) : null}
            {error ? (
              <tr>
                <td colSpan={2} className="text-center dark:bg-[#171717] ">
                  Mohon Maaf, Terjadi Kesalahan
                </td>
              </tr>
            ) : null}
            {loading
              ? [...Array(10)].map((item, index) => (
                  <tr key={index} className="bg-white border-b min-h-[65px]">
                    <td className="bg-white dark:bg-[#171717] ">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                    <td className="bg-white dark:bg-[#171717] ">
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    </td>
                  </tr>
                ))
              : null}
            {data.map((item, index) => (
              <>
                <tr key={index}>
                  <td
                    className={
                      "text-center font-semibold dark:bg-[#171717]  w-[80px]"
                    }
                  >
                    {index + 1 + page * rowsPerPage}
                  </td>
                  <td className={"dark:bg-[#171717] "}>{item.unit_kerja}</td>
                </tr>
              </>
            ))}
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
    </div>
  );
}

export default UnitKerja;
