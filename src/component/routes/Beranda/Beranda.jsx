//Merupakan Page BerandaSearch yang dapat diakses oleh siapapun
//Fungsi Debounce untuk mengurangi jumlah request ke server

import { useState, useEffect, useMemo } from "react";
import Setting from "./Setting.jsx";
import AllKonten from "./Konten.jsx";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Beranda(props) {
  const [isGrid, setIsGrid] = useState(Cookies.get("isGrid") === "true");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("tanggal");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    //  Link to search page react router
    navigate(`/beranda/search?query=${search}&filter=${filter}&sort=${sort}`);
  };

  const handleSearch = (e) => {
    // link to search page
    setSearch(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });
  const handleSort = async (e) => {
    // await setSort(e); and then link to search page
    setSort(e);
    navigate(`/beranda/search?query=${search}&filter=${filter}&sort=${e}`);
  };

  const handleFilter = (e) => {
    setFilter(e);
    navigate(`/beranda/search?query=${search}&filter=${e}&sort=${sort}`);
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
      className=" dark:bg-black absolute content flex flex-row sm:gap-y-4 gap-y-2 gap-x-6 top-[64px] md:p-8 p-0 pt-3 flex flex-col"
    >
      <Setting
        isGrid={isGrid}
        handleGrid={handleGrid}
        handleList={handleList}
        handleFilter={handleFilter}
        handleSort={handleSort}
        search={search}
        handleSearch={handleSearch}
        debouncedResults={debouncedResults}
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
