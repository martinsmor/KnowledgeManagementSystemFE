import searchIcon from "../../../assets/icon/search.svg";
import { Link } from "react-router-dom";
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
        className="sm:w-full w-full -ml-8 h-10 p-2 pl-10 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
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
    console.log(e.target.value);
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
    console.log("search", search);
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
      className="absolute content flex flex-row gap-y-4 gap-x-6 top-[64px] md:p-8 p-0 pt-3 flex flex-col md:p-8 p-4"
    >
      <SearchBar search={search} debounceResults={debouncedResults} />
      <div className=" overflow-x-auto min-w-full  border shadow-md rounded-md">
        <table className="min-w-screen table overflow-x-auto min-w-full ">
          <thead className="bg-white">
            <tr className="bg-white border-b">
              <th className="bg-white"></th>
              <th className="bg-white">Unit Kerja</th>
            </tr>
          </thead>
          <tbody>
            {count === 0 ? (
              <tr className="border-b">
                <td className="p-3"></td>
                <td className="p-3">Unit Kerja Tidak Ditemukan</td>
              </tr>
            ) : null}
            {error ? (
              <tr>
                <td colSpan={2} className="text-center">
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
                  </tr>
                ))
              : null}
            {data.map((item, index) => (
              <>
                <tr key={index}>
                  <td className={"text-center font-semibold w-[80px]"}>
                    {index + 1 + page * 10}
                  </td>
                  <td>{item.unit_kerja}</td>
                </tr>
              </>
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
    </div>
  );
}

export default UnitKerja;
