//Merupakan Page Beranda yang dapat diakses oleh siapapun
//Path: src\component\routes\Beranda.jsx
//Berisi Fitur Search, Sort, Setting, dan List/Grid Konten

import { useState, createContext, useContext, useRef, useEffect } from "react";
import Setting from "./Setting.jsx";
import AllKonten from "./Konten.jsx";

function Beranda(props) {
  const [data, setData] = useState([]);

  const [isGrid, setIsGrid] = useState(false);
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState("Terbaru");
  const [search, setSearch] = useState("d");

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
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-row gap-y-4 gap-x-6 top-[64px] md:p-8 p-0 pt-3 flex flex-col"
    >
      <Setting
        isGrid={isGrid}
        handleGrid={handleGrid}
        handleList={handleList}
        handleFilter={handleFilter}
        handleSort={handleSort}
        search={search}
        handleSearch={handleSearch}
      />
      <AllKonten isGrid={isGrid} />
    </div>
  );
}

export default Beranda;
