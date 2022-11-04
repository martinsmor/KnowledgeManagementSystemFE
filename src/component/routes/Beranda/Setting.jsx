//sort component
import { useState } from "react";
import sortIcon from "../../../assets/icon/sort.svg";
import FilterIcon from "../../../assets/icon/FilterIcon.jsx";
import listIcon from "../../../assets/icon/list.svg";
import gridIcon from "../../../assets/icon/gridberanda.svg";
import searchIcon from "../../../assets/icon/search.svg";

function Sort(props) {
  const [sortType, setSortType] = useState("Terbaru");

  const handleSort = (e) => {
    setSortType(e);
    props.handleSort(e);
  };

  return (
    <div
      data-tip={"Urutkan Berdasar " + sortType}
      className="tooltip tooltip-bottom bg-white  dropdown z-20 dropdown-end rounded-md"
    >
      <label
        tabIndex={0}
        className={
          "flex flex-row cursor-pointer gap-x-2 h-10 min-w-[137px] justify-center items-center  border-blue-400 border-2 rounded-md  px-3"
        }
      >
        <img className={"w-5"} src={sortIcon} alt="" />
        {sortType}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-md border-gray-300 border min-w-[135px] "
      >
        <li>
          <button onClick={() => handleSort("Terbaru")}>Terbaru</button>
        </li>
        <li>
          <button onClick={() => handleSort("Popularitas")}>Popularitas</button>
        </li>
      </ul>
    </div>
  );
}

//Filter component
function Filter(props) {
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
    setKategoriKonten("-");
    setJenisKonten("-");
  };
  const handleSimpan = () => {
    setFilter([jenisKonten, kategoriKonten]);
    props.filter([jenisKonten, kategoriKonten]);
    setIsFilter(true);
    console.log(filter);
  };
  const handleFilter = () => {
    if (!isFilter) {
      setJenisKonten("-");
      setKategoriKonten("-");
    } else {
      setJenisKonten(filter[0]);
      setKategoriKonten(filter[1]);
    }
  };

  return (
    <>
      <label
        onClick={handleFilter}
        htmlFor="my-modal-4"
        className={
          " modal-button cursor-pointer gap-x-2 bg-white  flex flex-row h-10 justify-center items-center  border-gray-400 border rounded-md  px-3"
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
          <h3 className="text-3xl font-bold mb-3">Filter Konten</h3>
          <div className="flex flex-col gap-y-2">
            <div className={"flex flex-col"}>
              <label htmlFor="">Jenis Konten</label>
              <select
                value={jenisKonten}
                onChange={handleJenisKonten}
                className="select transition-none min-h-0 h-10 w-full form-select appearance-none block w-full px-3  text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded  m-0  focus:outline-blue-500 focus:outline-offset-0 border border-gray-400 "
              >
                <option>-</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className={"flex flex-col"}>
              <label htmlFor="">Kategori</label>
              <select
                value={kategoriKonten}
                onChange={handleKategoriKonten}
                className="select transition-none w-full  min-h-0 h-10 form-select appearance-none block w-full px-3 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded  m-0  focus:outline-blue-500 focus:outline-offset-0 border border-gray-400 "
              >
                <option>-</option>
                <option>Han Solo</option>
                <option>Greedo</option>
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
        "md:flex rounded-md hidden bg-white hidden flex-row h-10 justify-center items-center min-w-[86px] border-gray-400"
      }
    >
      <button
        data-tip="List"
        onClick={props.handleList}
        className={
          props.isGrid
            ? "tooltip tooltip-bottom h-full rounded-l-md flex justify-center items-center border-2 border-gray-400 px-2.5 border-r-0"
            : "tooltip tooltip-bottom h-full bg-gray-100  rounded-l-md flex justify-center items-center border-2 border-blue-400 px-2.5"
        }
      >
        <img className={"w-5"} src={listIcon} alt="" />
      </button>
      <button
        data-tip="Grid"
        onClick={props.handleGrid}
        className={
          !props.isGrid
            ? "tooltip tooltip-bottom h-full rounded-r-md flex justify-center items-center border-2 border-gray-400 px-2.5 border-l-0"
            : "tooltip tooltip-bottom h-full   bg-gray-100 rounded-r-md flex justify-center items-center border-2 border-blue-400 px-2.5 "
        }
      >
        <img className={"w-5"} src={gridIcon} alt="" />
      </button>
    </div>
  );
}

//search bar component
function SearchBar(props) {
  function handleSearch(e) {
    props.handleSearch(e.target.value);
  }

  return (
    <div className="flex flex-row w-full justify-center px-4 sm:px-0 items-center">
      <div className={"z-20 -ml-5 "}>
        <img className={"w-4  "} src={searchIcon} alt="search" />
      </div>
      <input
        onChange={props.handleSearch}
        value={props.search}
        className="-ml-7 w-full h-10 p-2 pl-9 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

function Setting(props) {
  return (
    <>
      <div
        className={
          "sm:flex hidden flex-row gap-x-4 w-full bg-gray-100 md:flex-nowrap flex-wrap p-2 pl-4 gap-y-2 rounded-md justify-between"
        }
      >
        <div className={"flex flex-col w-full"}>
          <SearchBar search={props.search} handleSearch={props.handleSearch} />
        </div>
        <div className={"flex flex-row gap-x-3"}>
          <GridList
            isGrid={props.isGrid}
            handleGrid={props.handleGrid}
            handleList={props.handleList}
          />
          <Filter filter={props.handleFilter} />
          <Sort handleSort={props.handleSort} />
        </div>
      </div>
    </>
  );
}

export default Setting;
