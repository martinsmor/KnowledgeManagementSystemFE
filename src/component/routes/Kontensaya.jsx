// Page Untuk Melihat Status Konten Yang telah

import { Link } from "react-router-dom";
import { useState } from "react";
import searchIcon from "../../assets/icon/search.svg";

//search bar component
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

function Kontensaya(props) {
  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-col gap-y-4 gap-x-6 top-[64px] md:p-8 p-4 "
    >
      <SearchBar />
      <div className=" overflow-x-auto min-w-full  border shadow-md rounded-md">
        <table className="min-w-screen table overflow-x-auto min-w-full ">
          <thead className="bg-white">
            <tr className="bg-white border-b">
              <th className="bg-white"></th>
              <th className="bg-white">Judul</th>
              <th className="bg-white">Tanggal</th>
              <th className="bg-white">Status</th>
              <th className="bg-white">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bagaimana Pencatatan Kelahiran</td>
              <td>24 Agustus 2022</td>
              <td>
                <div className="badge badge-error badge-outline">Ditolak</div>
              </td>
              <td className="w-[260px]">
                <Link to={"/konten"}>
                  <button className="btn btn-info rounded btn-sm text-white">
                    Detail
                  </button>
                </Link>
                <Link
                  to={"/editkonten"}
                  href="frontend/src/Views/User/AturMember.jsx"
                >
                  <button className="btn btn-success mx-2 rounded btn-sm text-white">
                    Edit
                  </button>
                </Link>
                <label
                  htmlFor="my-modal"
                  className="btn btn-error rounded btn-sm  text-white"
                >
                  Delete
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*Delete Modal */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box sm:rounded">
          <h3 className="font-bold text-lg">
            Apakah anda yakin ingin menghapus konten
          </h3>
          <p className="py-4">Bagaimana Pencatatan Kelahiran</p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn rounded">
              Cancel
            </label>
            <label
              htmlFor="my-modal"
              className="btn btn-error text-white rounded"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontensaya;
