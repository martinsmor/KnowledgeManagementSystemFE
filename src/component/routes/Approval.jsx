import { Link } from "react-router-dom";
import { useState } from "react";
import searchIcon from "../../assets/icon/search.svg";

function Approval(props) {
  function SearchBar() {
    const [search, setSearch] = useState("");

    function handleSearch(e) {
      setSearch(e.target.value);
      console.log(e.target.value);
    }

    return (
      <div className="flex flex-row w-full justify-center items-center">
        <div className={"z-20"}>
          <img className={"w-4 ml-4"} src={searchIcon} alt="search" />
        </div>
        <input
          onChange={handleSearch}
          value={search}
          className="w-1/2 -ml-8 h-10 p-2 pl-9 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
          type="text"
          placeholder="Cari Konten"
        />
      </div>
    );
  }

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-col gap-y-4 gap-x-6 top-[64px] md:p-8 p-4 flex flex-col"
    >
      <SearchBar />
      <div className=" overflow-x-auto min-w-full  border shadow-md rounded-md">
        <table className="min-w-screen table overflow-x-auto min-w-full ">
          <thead className="bg-white">
            <tr className="bg-white border-b">
              <th className="bg-white"></th>
              <th className="bg-white">Judul</th>
              <th className="bg-white">Tanggal</th>
              <th className="bg-white">Diajukan Oleh</th>
              <th className="bg-white">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bagaimana Pencatatan Kelahiran</td>
              <td>24 Agustus 2022</td>
              <td>Michael Schott</td>
              <td className="w-[260px]">
                <Link
                  to={"/approval"}
                  href="frontend/src/Views/User/AturMember.jsx"
                >
                  <button className="btn btn-success mx-2 rounded btn-sm text-white">
                    Terima
                  </button>
                </Link>
                <button
                  // onClick={() => handleDelete(item.username)}
                  className="btn btn-error rounded btn-sm  text-white"
                >
                  Tolak
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Approval;
