// Setting component yang berisi search bar, filter, sort, dan grid/list
import { useEffect, useState } from "react";
import httpClient from "../../../httpClient.js";

// Sort component
function Sort(props) {
  const [sortType, setSortType] = useState("Terbaru");
  const handleSort = (e) => {
    setSortType(e);
    props.handleSort(e);
  };

  return (
    <div
      data-tip={"Urutkan Konten"}
      className="tooltip tooltip-top bg-white  dark:bg-[#171717]  dropdown dropdown-end rounded-md"
    >
      <label
        tabIndex={0}
        className={
          "flex flex-row cursor-pointer gap-x-2 h-10 min-w-full justify-center items-center  border-blue-400 border sm:border-2 rounded-md  px-3"
        }
      >
        <svg
          className={"w-5 dark:fill-white"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H320z" />
        </svg>
        {/* {sortType === "liked" ? "Popularitas" : "Terbaru"} */}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content  dark:bg-[#171717]  menu p-2 shadow bg-base-100 rounded-md border-gray-300 dark:border-zinc-800 border min-w-[135px] "
      >
        <li>
          <button
            className={"dark:hover:bg-gray-700"}
            onClick={() => handleSort("tanggal")}
          >
            Terbaru
          </button>
        </li>
        <li>
          <button
            className={"dark:hover:bg-gray-700"}
            onClick={() => handleSort("liked")}
          >
            Popularitas
          </button>
        </li>
      </ul>
    </div>
  );
}

//Filter component
function Filter(props) {
  const [jenisKonten, setJenisKonten] = useState("-");
  const [kategoriKonten, setKategoriKonten] = useState("");
  const [filter, setFilter] = useState("");
  const [isFilter, setIsFilter] = useState(false);
  const [data, setData] = useState([]);

  // JENIS KONTEN SUDAH TIDAK DIPAKAI (SEMUA KONTEN JADI 1 JENIS)

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
    props.filter(kategoriKonten);
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
  useEffect(() => {
    let data = {
      limit: 100,
      page: 1,
      search: "",
    };
    httpClient.readKategori(data).then((res) => {
      setData(res.data.kategori);
    });
  }, []);

  return (
    <>
      <label
        onClick={handleFilter}
        data-tip={"Filter Konten"}
        htmlFor="my-modal-4"
        className={
          kategoriKonten !== ""
            ? " tooltip dark:bg-[#171717] border-blue-400 border-2  modal-button cursor-pointer gap-x-2 bg-white  flex flex-row h-10 justify-center items-center  border-gray-400 rounded-md  px-3"
            : " tooltip dark:bg-[#171717]  sm:border-2 border  modal-button cursor-pointer gap-x-2 bg-white  flex flex-row h-10 justify-center items-center  border-gray-400 rounded-md  px-3"
        }
      >
        <svg
          className={"w-5 dark:fill-white"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
        </svg>
        {/* Filter */}
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label
        htmlFor="my-modal-4"
        className="modal sm:modal-middle modal-bottom cursor-pointer rounded-md"
      >
        <label
          className="modal-box  dark:bg-[#171717] dark:border-zinc-800 dark:border relative rounded-md sm:rounded-md"
          htmlFor=""
        >
          <h3 className="text-3xl font-bold mb-3">Filter Konten</h3>
          <div className="flex flex-col gap-y-2">
            <div className={"flex flex-col gap-y-2"}>
              <label htmlFor="">Kategori</label>
              <select
                value={kategoriKonten}
                onChange={handleKategoriKonten}
                className="select transition-none w-full  dark:bg-[#171717] dark:text-white min-h-0 h-10 form-select appearance-none block w-full px-3 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded  m-0  focus:outline-blue-500 focus:outline-offset-0 border border-gray-400 "
              >
                <option value={""}>-</option>
                {data.map((item, index) => {
                  return (
                    <option key={index} value={item.nama_kategori}>
                      {item.nama_kategori}
                    </option>
                  );
                })}
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
    </>
  );
}

//Grid or List component
function GridList(props) {
  return (
    <div
      className={
        "md:flex rounded-md hidden z-20  dark:bg-[#171717]   bg-white hidden flex-row h-10 justify-center items-center min-w-[86px] border-gray-400"
      }
    >
      <button
        data-tip="List"
        onClick={props.handleList}
        className={
          props.isGrid
            ? "tooltip tooltip-bottom h-full  rounded-l-md flex justify-center items-center border-2 border-gray-400 px-2.5 border-r-0"
            : "tooltip tooltip-bottom h-full  dark:bg-[#171717]  bg-gray-100  rounded-l-md flex justify-center items-center border-2 border-blue-400 px-2.5"
        }
      >
        <svg
          className={"w-5 dark:fill-white"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M64 144c26.5 0 48-21.5 48-48s-21.5-48-48-48S16 69.5 16 96s21.5 48 48 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm48-208c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
        </svg>
      </button>
      <button
        data-tip="Grid"
        onClick={props.handleGrid}
        className={
          !props.isGrid
            ? "tooltip tooltip-bottom h-full rounded-r-md flex justify-center items-center border-2 border-gray-400 px-2.5 border-l-0"
            : "tooltip tooltip-bottom h-full  dark:bg-[#171717]    bg-gray-100 rounded-r-md flex justify-center items-center border-2 border-blue-400 px-2.5 "
        }
      >
        <svg
          className={"w-5 dark:fill-white"}
          fill="none"
          viewBox="0 0 15 15"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#000">
            <path d="m5.5.5h-4c-.552285 0-1 .447715-1 1v4c0 .55228.447715 1 1 1h4c.55228 0 1-.44772 1-1v-4c0-.552285-.44772-1-1-1z" />
            <path d="m13.5.5h-4c-.55228 0-1 .447715-1 1v4c0 .55228.44772 1 1 1h4c.5523 0 1-.44772 1-1v-4c0-.552285-.4477-1-1-1z" />
            <path d="m13.5 8.5h-4c-.55228 0-1 .44772-1 1v4c0 .5523.44772 1 1 1h4c.5523 0 1-.4477 1-1v-4c0-.55228-.4477-1-1-1z" />
            <path d="m5.5 8.5h-4c-.552285 0-1 .44772-1 1v4c0 .5523.447715 1 1 1h4c.55228 0 1-.4477 1-1v-4c0-.55228-.44772-1-1-1z" />
          </g>
        </svg>
      </button>
    </div>
  );
}

//search bar component
// function SearchBar(props) {
//   return (
//     <div className="flex  flex-row w-full justify-center  px-0 items-center mb-2 sm:mb-0">
//       <form className={"w-full  h-full"}>
//         <div className="flex w-full  h-full">
//           <div className="relative w-full  h-full">
//             <input
//               value={props.search}
//               onChange={props.handleSearch}
//               className="block px-3 rounded-md w-full h-10 p-2.5 pr-12  z-20 text-sm text-black bg-white  border border-gray-400 focus:outline-2 focus:outline-blue-500  dark:bg-[#171717] dark:text-white"
//               placeholder="Cari Konten ..."
//               required
//             ></input>
//             <button
//               onClick={props.handleSubmit}
//               type="submit"
//               className="absolute top-0 right-0 px-2.5 h-10 text-sm font-medium text-white bg-blue-700 rounded-r-lg border  dark:border-gray-400  border-blue-700 hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               <svg
//                 aria-hidden="true"
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 ></path>
//               </svg>
//               <span className="sr-only">Search</span>
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

function Setting(props) {
  return (
    <>
      <div
        className={
          "sm:flex  dark:text-white flex-row w-full md:flex-nowrap md:px-0 px-4 flex-wrap py-2 gap-y-2 gap-x-4 rounded-md justify-between "
        }
      >
        {/* <div className={"flex flex-col w-[700px]"}>
          <SearchBar
            search={props.search}
            handleSearch={props.handleSearch}
            debouncedResults={props.debouncedResults}
            handleSubmit={props.handleSubmit}
          />
        </div> */}
        <div className={"flex flex-row gap-x-3"}>
          <GridList
            isGrid={props.isGrid}
            handleGrid={props.handleGrid}
            handleList={props.handleList}
          />

          <Filter
            filter={props.handleFilter}
            handleSubmit={props.handleSubmit}
          />
          <Sort
            handleSort={props.handleSort}
            handleSubmit={props.handleSubmit}
          />
        </div>
      </div>
    </>
  );
}

export default Setting;
