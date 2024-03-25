//Merupakan Page Beranda yang dapat diakses oleh siapapun

import { useState } from "react";
import Setting from "./Setting.jsx";
import AllKonten from "./Konten.jsx";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Beranda(props) {
  const [isGrid, setIsGrid] = useState(Cookies.get("isGrid") === "true");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("tanggal");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Fungsi untuk mengubah tampilan konten berdasar pencarian / filter / sort
  const handleSubmit = () => {
    navigate(`/beranda/search?query=${search}&filter=${filter}&sort=${sort}`);
  };

  const handleSort = async (e) => {
    setSort(e);
    navigate(`/beranda/search?query=${search}&filter=${filter}&sort=${e}`);
  };

  const handleFilter = (e) => {
    setFilter(e);
    navigate(`/beranda/search?query=${search}&filter=${e}&sort=${sort}`);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleList = () => {
    if (isGrid) {
      setIsGrid(false);
      Cookies.set("isGrid", false);
    }
  };
  const handleGrid = () => {
    if (!isGrid) {
      setIsGrid(true);
      Cookies.set("isGrid", true);
    }
  };

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className=" dark:bg-black absolute content flex flex-row sm:gap-y-4 gap-y-2 gap-x-6 top-[55px] md:p-8 p-0 pt-3 flex flex-col"
    >
      <Setting
        isGrid={isGrid}
        handleGrid={handleGrid}
        handleList={handleList}
        handleFilter={handleFilter}
        handleSort={handleSort}
        search={search}
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
      />
      <AllKonten
        isFull={props.isfull}
        isGrid={isGrid}
        search={search}
        sort={sort}
        filter={filter}
      />
    </div>
  );
}

export default Beranda;
