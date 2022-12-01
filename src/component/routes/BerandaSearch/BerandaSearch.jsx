//Merupakan Page BerandaSearch yang dapat diakses oleh siapapun
//Fungsi Debounce untuk mengurangi jumlah request ke server

import { useState, useEffect, useMemo } from "react";
import Setting from "./Setting.jsx";
import AllKonten from "./Konten.jsx";
import debounce from "lodash.debounce";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BerandaSearch(props) {
  const [url, setUrl] = useState(new URLSearchParams(window.location.search));
  const { id } = useParams();
  const [isGrid, setIsGrid] = useState(false);
  const [filter, setFilter] = useState(
    !url.get("filter") ? "" : url.get("filter")
  );
  const [sort, setSort] = useState(
    !url.get("sort") ? "tanggal" : url.get("sort")
  );
  const [query, setQuery] = useState(id);
  const [search, setSearch] = useState(
    !url.get("query") ? "" : url.get("query")
  );
  const [getSearch, setGetSearch] = useState(search);
  const [back, setBack] = useState(false);

  const [locationKeys, setLocationKeys] = useState([]);
  const history = useNavigate();
  window.onpopstate = function (event) {
    // window.location.reload();
    console.log("Reload");
    let url = new URLSearchParams(window.location.search);
    setUrl(url);
    setFilter(!url.get("filter") ? "" : url.get("filter"));
    setSort(!url.get("sort") ? "tanggal" : url.get("sort"));
    setQuery(!url.get("query") ? "" : url.get("query"));
    setSearch(!url.get("query") ? "" : url.get("query"));
  };
  useEffect(() => {
    console.log(url.get("query"));
    console.log(url.get("filter"));
    console.log(url.get("sort"));
  }, []);

  const handleGetSearch = () => {
    console.log(search);
    setGetSearch(search);
  };

  const handleSearch = (e) => {
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
  const handleSort = (e) => {
    setSort(e);
    let url = new URLSearchParams(window.location.search);
    url.set("sort", e);
    history(`/beranda/search?${url}`);
  };

  const handleFilter = (e) => {
    setFilter(e);
    let url = new URLSearchParams(window.location.search);
    url.set("filter", e);
    window.history.pushState({}, "", `${window.location.pathname}?${url}`);
    setUrl(url);
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
      className=" dark:bg-black absolute content flex flex-row sm:gap-y-4 gap-y-2 gap-x-6 top-[64px] md:p-8 p-0 pt-3 flex flex-col"
    >
      <Setting
        isGrid={isGrid}
        handleGrid={handleGrid}
        handleList={handleList}
        handleFilter={handleFilter}
        handleSort={handleSort}
        search={search}
        handleGetSearch={handleGetSearch}
        handleSearch={handleSearch}
        debouncedResults={debouncedResults}
        defaultFilter={filter}
        defaultSort={sort}
      />
      <AllKonten
        isFull={props.isfull}
        isGrid={isGrid}
        search={search}
        sort={sort}
        getSearch={getSearch}
        filter={filter}
        url={url}
        back={back}
      />
    </div>
  );
}

export default BerandaSearch;
