//Merupakan Page Beranda yang dapat diakses oleh siapapun
//Path: src\component\routes\Beranda.jsx
//Berisi Fitur Search, Sort, Filter, dan List/Grid Konten

import { useState, createContext, useContext, useRef, useEffect } from "react";
import profilePic from "../../assets/profile/profile.png";
import searchIcon from "../../assets/icon/search.svg";
import listIcon from "../../assets/icon/list.svg";
import gridIcon from "../../assets/icon/gridberanda.svg";
import sortIcon from "../../assets/icon/sort.svg";
import FilterIcon from "../../assets/icon/FilterIcon.jsx";
import LikeIcon from "../../assets/icon/Like.jsx";
import CommentICon from "../../assets/icon/Comment.jsx";
import { Link } from "react-router-dom";

//sort component
function Sort(props) {
  const [sortType, setSortType] = useState("Terbaru");

  const handleSort = (e) => {
    setSortType(e);
    props.handleSort(e);
  };

  return (
    <div
      data-tip={"Urutkan Berdasar " + sortType}
      className="tooltip tooltip-bottom bg-white dropdown z-20 dropdown-end"
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
                className="select transition-none w-full form-select appearance-none block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded-md  m-0  focus:outline-blue-400 focus:outline-offset-0 border border-gray-400 "
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
                className="select transition-none w-full form-select appearance-none block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded-md  m-0  focus:outline-blue-400 focus:outline-offset-0 border border-gray-400 "
              >
                <option>-</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>
          <div className="modal-action">
            <label onClick={handleReset} className="btn rounded-md">
              Reset
            </label>
            <label
              onClick={handleSimpan}
              htmlFor="my-modal-4"
              className="btn rounded-md btn-primary"
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
        "md:flex hidden bg-white hidden flex-row h-10 justify-center items-center min-w-[86px] border-gray-400"
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
function SearchBar() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="flex flex-row w-full justify-center items-center">
      <div className={"z-20 -ml-5 "}>
        <img className={"w-4  "} src={searchIcon} alt="search" />
      </div>
      <input
        onChange={handleSearch}
        value={search}
        className="-ml-7 w-full h-10 p-2 pl-9 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

// All Konten Card Component
function AllKonten(props) {
  return (
    <div className={"flex flex-row gap-4 z-10 flex-wrap"}>
      <Link
        to={"/konten"}
        className={
          props.isGrid
            ? "card kontancard transition hover:border-blue-400 sm:w-80 w-full bg-base-100 border border-gray-300 rounded-md"
            : "card kontancard transition hover:border-blue-400  w-full bg-base-100 border border-gray-300 rounded-md"
        }
      >
        <div className="card-body p-6 gap-y-1">
          <div className="flex flex-row">
            <div className="avatar mr-4">
              <div className="sm:w-10 sm:h-10 w-6 h-6 rounded-full">
                <img src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row justify-around items-center sm:items-start gap-x-2">
              <div className={"sm:text-normal text-sm"}>Arya Stark</div>
              <span className={"sm:hidden "}>&#183;</span>
              <div className="text-sm">30 Februari 2020</div>
            </div>
          </div>
          <div className={""}>
            <h2 className="card-title text-2xl py-1">
              Pencatatan kehamilan mantan ART
            </h2>
            <p className={"line-clamp-2 "}>
              Kehamilan yang dialami mantan ART yang sudah pindah apakah
              tercatat? Pertanyaan ditujukan untuk rumah tangga ini, tidak
              ditanya terkait ART yang telah pindah (bukan ART lagi). Jadi,
              ketika PPL datang ke rumah tangga yang dahulu ada mantan ART
              (karena pindah) yang hamil 2017-2022, maka kehamilan tersebut
              tidak dicakup
            </p>
          </div>

          <div>
            <div className="flex flex-row gap-x-1 mt-2">
              <div
                className={
                  "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
                }
              >
                <span>
                  <LikeIcon />
                </span>
                <span className={"ml-2 text-sm"}> 2 Reactions</span>
              </div>
              <div
                className={
                  "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
                }
              >
                <span>
                  <CommentICon />
                </span>
                <span className={"ml-2 text-sm"}> 2 Comments</span>
              </div>
              <div
                className={
                  props.isGrid
                    ? "hidden"
                    : "flex flex-row justify-center items-center"
                }
              >
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #SP2020
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Kehamilan
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Asisten
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to={"/konten"}
        className={
          props.isGrid
            ? "card kontancard transition hover:border-blue-400 sm:w-80 w-full bg-base-100 border border-gray-300 rounded-md"
            : "card kontancard transition hover:border-blue-400  w-full bg-base-100 border border-gray-300 rounded-md"
        }
      >
        <div className="card-body p-6 gap-y-1">
          <div className="flex flex-row">
            <div className="avatar mr-4">
              <div className="sm:w-10 sm:h-10 w-6 h-6 rounded-full">
                <img src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row justify-around items-center sm:items-start gap-x-2">
              <div className={"sm:text-normal text-sm"}>Arya Stark</div>
              <span className={"sm:hidden "}>&#183;</span>
              <div className="text-sm">30 Februari 2020</div>
            </div>
          </div>
          <div className={""}>
            <h2 className="card-title text-2xl py-1">
              Pencatatan kehamilan mantan ART
            </h2>
            <p className={"line-clamp-2 "}>
              Kehamilan yang dialami mantan ART yang sudah pindah apakah
              tercatat? Pertanyaan ditujukan untuk rumah tangga ini, tidak
              ditanya terkait ART yang telah pindah (bukan ART lagi). Jadi,
              ketika PPL datang ke rumah tangga yang dahulu ada mantan ART
              (karena pindah) yang hamil 2017-2022, maka kehamilan tersebut
              tidak dicakup
            </p>
          </div>

          <div>
            <div className="flex flex-row gap-x-1 mt-2">
              <div
                className={
                  "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
                }
              >
                <span>
                  <LikeIcon />
                </span>
                <span className={"ml-2 text-sm"}> 2 Reactions</span>
              </div>
              <div
                className={
                  "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
                }
              >
                <span>
                  <CommentICon />
                </span>
                <span className={"ml-2 text-sm"}> 2 Comments</span>
              </div>
              <div
                className={
                  props.isGrid
                    ? "hidden"
                    : "flex flex-row justify-center items-center"
                }
              >
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #SP2020
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Kehamilan
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Asisten
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to={"/konten"}
        className={
          props.isGrid
            ? "card kontancard transition hover:border-blue-400 sm:w-80 w-full bg-base-100 border border-gray-300 rounded-md"
            : "card kontancard transition hover:border-blue-400  w-full bg-base-100 border border-gray-300 rounded-md"
        }
      >
        <div className="card-body p-6 gap-y-1">
          <div className="flex flex-row">
            <div className="avatar mr-4">
              <div className="sm:w-10 sm:h-10 w-6 h-6 rounded-full">
                <img src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row justify-around items-center sm:items-start gap-x-2">
              <div className={"sm:text-normal text-sm"}>Arya Stark</div>
              <span className={"sm:hidden "}>&#183;</span>
              <div className="text-sm">30 Februari 2020</div>
            </div>
          </div>
          <div className={""}>
            <h2 className="card-title text-2xl py-1">
              Pencatatan kehamilan mantan ART
            </h2>
            <p className={"line-clamp-2 "}>
              Kehamilan yang dialami mantan ART yang sudah pindah apakah
              tercatat? Pertanyaan ditujukan untuk rumah tangga ini, tidak
              ditanya terkait ART yang telah pindah (bukan ART lagi). Jadi,
              ketika PPL datang ke rumah tangga yang dahulu ada mantan ART
              (karena pindah) yang hamil 2017-2022, maka kehamilan tersebut
              tidak dicakup
            </p>
          </div>

          <div>
            <div className="flex flex-row gap-x-1 mt-2">
              <div
                className={
                  "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
                }
              >
                <span>
                  <LikeIcon />
                </span>
                <span className={"ml-2 text-sm"}> 2 Reactions</span>
              </div>
              <div
                className={
                  "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
                }
              >
                <span>
                  <CommentICon />
                </span>
                <span className={"ml-2 text-sm"}> 2 Comments</span>
              </div>
              <div
                className={
                  props.isGrid
                    ? "hidden"
                    : "flex flex-row justify-center items-center"
                }
              >
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #SP2020
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Kehamilan
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Asisten
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to={"/konten"}
        className={
          props.isGrid
            ? "card kontancard transition hover:border-blue-400 sm:w-80 w-full bg-base-100 border border-gray-300 rounded-md"
            : "card kontancard transition hover:border-blue-400  w-full bg-base-100 border border-gray-300 rounded-md"
        }
      >
        <div className="card-body p-6 gap-y-1">
          <div className="flex flex-row">
            <div className="avatar mr-4">
              <div className="sm:w-10 sm:h-10 w-6 h-6 rounded-full">
                <img src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row justify-around items-center sm:items-start gap-x-2">
              <div className={"sm:text-normal text-sm"}>Arya Stark</div>
              <span className={"sm:hidden "}>&#183;</span>
              <div className="text-sm">30 Februari 2020</div>
            </div>
          </div>
          <div className={""}>
            <h2 className="card-title text-2xl py-1">
              Pencatatan kehamilan mantan ART
            </h2>
            <p className={"line-clamp-2 "}>
              Kehamilan yang dialami mantan ART yang sudah pindah apakah
              tercatat? Pertanyaan ditujukan untuk rumah tangga ini, tidak
              ditanya terkait ART yang telah pindah (bukan ART lagi). Jadi,
              ketika PPL datang ke rumah tangga yang dahulu ada mantan ART
              (karena pindah) yang hamil 2017-2022, maka kehamilan tersebut
              tidak dicakup
            </p>
          </div>

          <div>
            <div className="flex flex-row gap-x-1 mt-2">
              <div
                className={
                  "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
                }
              >
                <span>
                  <LikeIcon />
                </span>
                <span className={"ml-2 text-sm"}> 2 Reactions</span>
              </div>
              <div
                className={
                  "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
                }
              >
                <span>
                  <CommentICon />
                </span>
                <span className={"ml-2 text-sm"}> 2 Comments</span>
              </div>
              <div
                className={
                  props.isGrid
                    ? "hidden"
                    : "flex flex-row justify-center items-center"
                }
              >
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #SP2020
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Kehamilan
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Asisten
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to={"/konten"}
        className={
          props.isGrid
            ? "card kontancard transition hover:border-blue-400 sm:w-80 w-full bg-base-100 border border-gray-300 rounded-md"
            : "card kontancard transition hover:border-blue-400  w-full bg-base-100 border border-gray-300 rounded-md"
        }
      >
        <div className="card-body p-6 gap-y-1">
          <div className="flex flex-row">
            <div className="avatar mr-4">
              <div className="sm:w-10 sm:h-10 w-6 h-6 rounded-full">
                <img src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row justify-around items-center sm:items-start gap-x-2">
              <div className={"sm:text-normal text-sm"}>Arya Stark</div>
              <span className={"sm:hidden "}>&#183;</span>
              <div className="text-sm">30 Februari 2020</div>
            </div>
          </div>
          <div className={""}>
            <h2 className="card-title text-2xl py-1">
              Pencatatan kehamilan mantan ART
            </h2>
            <p className={"line-clamp-2 "}>
              Kehamilan yang dialami mantan ART yang sudah pindah apakah
              tercatat? Pertanyaan ditujukan untuk rumah tangga ini, tidak
              ditanya terkait ART yang telah pindah (bukan ART lagi). Jadi,
              ketika PPL datang ke rumah tangga yang dahulu ada mantan ART
              (karena pindah) yang hamil 2017-2022, maka kehamilan tersebut
              tidak dicakup
            </p>
          </div>

          <div>
            <div className="flex flex-row gap-x-1 mt-2">
              <div
                className={
                  "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
                }
              >
                <span>
                  <LikeIcon />
                </span>
                <span className={"ml-2 text-sm"}> 2 Reactions</span>
              </div>
              <div
                className={
                  "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
                }
              >
                <span>
                  <CommentICon />
                </span>
                <span className={"ml-2 text-sm"}> 2 Comments</span>
              </div>
              <div
                className={
                  props.isGrid
                    ? "hidden"
                    : "flex flex-row justify-center items-center"
                }
              >
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #SP2020
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Kehamilan
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Asisten
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function Beranda(props) {
  // Grid or List Untuk tampilan konten
  // Filter and Sort untuk request ke API
  const [isGrid, setIsGrid] = useState(false);
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState("Terbaru");

  const handleSort = (e) => {
    setSort(e);
  };

  const handleFilter = (e) => {
    setFilter(e);
  };

  const handleList = () => {
    if (isGrid) {
      setIsGrid(false);
    }
  };
  const handleGrid = () => {
    if (!isGrid) {
      setIsGrid(true);
    }
  };

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-row gap-y-4 gap-x-6 top-[64px] md:p-8 p-4 flex flex-col"
    >
      <div
        className={
          "flex flex-row gap-x-4 w-full bg-gray-100 md:flex-nowrap flex-wrap p-2 pl-4 gap-y-2 rounded-md justify-between"
        }
      >
        <div className={"flex flex-col w-full"}>
          <SearchBar />
        </div>
        <div className={"flex flex-row gap-x-3"}>
          <GridList
            isGrid={isGrid}
            handleGrid={handleGrid}
            handleList={handleList}
          />
          <Filter filter={handleFilter} />
          <Sort handleSort={handleSort} />
        </div>
      </div>
      <AllKonten isGrid={isGrid} />
    </div>
  );
}

export default Beranda;
