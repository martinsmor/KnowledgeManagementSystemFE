//Merupakan Page Beranda yang akan di tampilkan setelah user berhasil login

import { useState, createContext, useContext, useRef, useEffect } from "react";
import profilePic from "../../assets/profile/profile.png";
import searchIcon from "../../assets/icon/search.svg";
import listIcon from "../../assets/icon/list.svg";
import gridIcon from "../../assets/icon/gridberanda.svg";
import sortIcon from "../../assets/icon/sort.svg";
import FilterIcon from "../../assets/icon/FilterIcon.jsx";

function Sort() {
  const [sortType, setSortType] = useState("Popularitas");

  return (
    <div
      data-tip={"Urutkan Berdasar " + sortType}
      className="tooltip tooltip-bottom dropdown dropdown-end"
    >
      <label
        tabIndex={0}
        className={
          "flex flex-row cursor-pointer h-10 justify-center items-center  border-gray-400 border rounded-md  px-3"
        }
      >
        <img className={"w-5 mr-2"} src={sortIcon} alt="" />
        {sortType}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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

//FilterIcon
function Filter() {
  return (
    <>
      <label
        htmlFor="my-modal"
        className={
          " modal-button cursor-pointer  flex flex-row h-10 justify-center items-center  border-gray-400 border rounded-md  px-3"
        }
      >
        <FilterIcon />
        Filter
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

//Grid or List
function GridList() {
  const [isGrid, setIsGrid] = useState(true);

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
      className={
        " flex bg-white flex-row h-10 justify-center items-center  border-gray-400"
      }
    >
      <button
        data-tip="List"
        onClick={handleList}
        className={
          isGrid
            ? "tooltip tooltip-bottom h-full rounded-l-md flex justify-center items-center border-2 border-gray-400 px-2.5 border-r-0"
            : "tooltip tooltip-bottom bg-gray-100 h-full  rounded-l-md flex justify-center items-center border-2 border-blue-400 px-2.5"
        }
      >
        <img className={"w-5"} src={listIcon} alt="" />
      </button>
      <button
        data-tip="Grid"
        onClick={handleGrid}
        className={
          !isGrid
            ? "tooltip tooltip-bottom h-full rounded-r-md flex justify-center items-center border-2 border-gray-400 px-2.5 border-l-0"
            : "tooltip tooltip-bottom bg-gray-100 h-full  rounded-r-md flex justify-center items-center border-2 border-blue-400 px-2.5 "
        }
      >
        <img className={"w-5"} src={gridIcon} alt="" />
      </button>
    </div>
  );
}

//search bar
function SearchBar() {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className={"z-20"}>
        <img className={"w-4"} src={searchIcon} alt="search" />
      </div>
      <input
        className="w-96 -ml-7 h-10 p-2 pl-9 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

function Beranda(props) {
  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-row gap-y-2 gap-x-6 top-[64px] md:p-8 p-4 flex flex-col"
    >
      <div
        className={
          "flex flex-row gap-x-4 w-full bg-gray-100 p-2 pl-5 rounded-md justify-between"
        }
      >
        <div className={"flex flex-col"}>
          <SearchBar />
        </div>
        <div className={"flex flex-row gap-x-2"}>
          <GridList />
          <Filter />
          <Sort />
        </div>
      </div>

      <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
        <div className="card-body p-4">
          <div className="flex flex-row">
            <div className="avatar mr-4">
              <div className="w-10 h-10 rounded-full">
                <img src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
              </div>
            </div>
            <div className="flex flex-col justify-around ">
              <div>Arya Stark</div>
              <div className="text-sm">30 Februari 2020</div>
            </div>
          </div>
          <h2 className="card-title text-lg">
            Pencatatan kehamilan mantan ART
          </h2>
          <p>
            Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat?
            sadfas asdfsadf asfdasf asdf{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
