import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import searchIcon from "../../assets/icon/search.svg";
import httpClient from "../../httpClient.js";

function SearchBar(props) {
  return (
    <div className="flex flex-row w-full justify-center items-center">
      <div className={"z-20"}>
        <img className={"w-4 ml-4"} src={searchIcon} alt="search" />
      </div>
      <input
        onChange={props.handleSearch}
        value={props.search}
        className="sm:w-1/2 w-full -ml-8 h-10 p-2 pl-9 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
        type="text"
        placeholder="Cari Konten"
      />
    </div>
  );
}

function Approval(props) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    httpClient.readApprovalContent().then((res) => {
      setData(res.data);
    });
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  const confirmTerima = () => {
    let data = {
      status: "Approved",
    };
    httpClient.changeStatusContent(clicked, data).then((res) => {
      console.log(res);
    });
  };

  const confirmTolak = () => {
    let data = {
      status: "Rejected",
    };
    httpClient.changeStatusContent(clicked, data).then((res) => {
      console.log(res);
    });
    let data2 = {
      feedback: feedback,
      from: "user1",
    };
    httpClient.addFeedback(clicked, data2).then((res) => {
      console.log(res);
    });
  };

  const handleFeedback = (e) => {
    setFeedback(e.target.value);
  };

  const handleTolak = (id) => {
    setClicked(id);
    setFeedback("");
  };

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-col gap-y-4 gap-x-6 top-[64px] md:p-8 p-4 flex flex-col"
    >
      <SearchBar search={search} handleSearch={handleSearch} />
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
            {data.map((item, key) => {
              return (
                <tr key={key + 1}>
                  <td>{key + 1}</td>
                  <td>{item.judul}</td>
                  <td>{item.tanggal}</td>
                  <td>{item.username}</td>
                  <td className="w-[260px]">
                    <label
                      htmlFor="my-modal"
                      onClick={() => setClicked(item.contentId)}
                      className="btn btn-primary mx-2 rounded btn-sm text-white"
                    >
                      Terima
                    </label>
                    <label
                      htmlFor="my-modal1"
                      onClick={() => handleTolak(item.contentId)}
                      className="btn btn-error mx-2 rounded btn-sm text-white"
                    >
                      Tolak
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/*Terima Modal */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box sm:rounded">
          <h3 className="font-bold text-lg">
            Apakah anda yakin ingin Menerima Konten ini?
          </h3>
          <p className="py-4">Bagaimana Pencatatan Kelahiran</p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn rounded btn-sm h-10">
              Cancel
            </label>
            <label
              htmlFor="my-modal"
              onClick={confirmTerima}
              className="btn btn-primary text-white rounded  btn-sm h-10"
            >
              Terima
            </label>
          </div>
        </div>
      </div>
      {/*Tolak Modal */}
      <input type="checkbox" id="my-modal1" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box sm:rounded">
          <h3 className="font-bold text-lg">
            Apakah anda yakin ingin Menolak Konten ini?
          </h3>
          <div className={"flex flex-col"}>
            <label htmlFor="feedback">Beri Feedback Untuk Konten ini</label>
            <input
              onChange={handleFeedback}
              value={feedback}
              className="w-full h-10 p-2 px-3 border border-gray-400 rounded focus:outline-2 focus:outline-blue-500"
              type="text"
              placeholder="Beri Feedback"
            />
          </div>

          <div className="modal-action">
            <label htmlFor="my-modal1" className="btn rounded btn-sm h-10">
              Cancel
            </label>
            <label
              htmlFor="my-modal1"
              onClick={confirmTolak}
              className="btn btn-error text-white rounded  btn-sm h-10"
            >
              Tolak
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approval;
