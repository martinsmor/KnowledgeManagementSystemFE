import searchIcon from "../../../assets/icon/search.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import httpClient from "../../../httpClient.js";

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
        placeholder="Cari Unit Kerja"
      />
    </div>
  );
}

function UnitKerja(props) {
  const [search, setSearch] = useState("");
  const [unitKerja, setUnitKerja] = useState([]);
  const [tambahUnitKerja, setTambahUnitKerja] = useState("");
  const [tambahKodeUnitKerja, setTambahKodeUnitKerja] = useState("");
  const [idUpdate, setIdUpdate] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  useEffect(() => {
    httpClient.readUnitKerja().then((data) => {
      console.log(data.data.unit_kerja);
      setUnitKerja(data.data.unit_kerja);
    });
  }, []);

  const handleTambahUnitKerja = (e) => {
    setTambahUnitKerja(e.target.value);
  };
  const handleTambahKodeUnitKerja = (e) => {
    setTambahKodeUnitKerja(e.target.value);
  };

  const handleTambah = () => {
    let data = {
      unit_kerja: tambahUnitKerja,
      unit_kerja_kode: tambahKodeUnitKerja,
    };
    httpClient.createUnitKerja(data).then((data) => {
      console.log(data);
      window.location.reload();
    });
  };
  const handleHapus = (id) => {
    httpClient.deleteUnitKerja(id).then((data) => {
      console.log(data);
      window.location.reload();
    });
  };
  const handleEdit = () => {
    let data = {
      unit_kerja: tambahUnitKerja,
      unit_kerja_kode: tambahKodeUnitKerja,
    };
    httpClient.updateUnitKerja(idUpdate, data).then((data) => {
      console.log(data);
      // window.location.reload();
    });
  };
  const handleEditButton = (id, nama, kode) => {
    setIdUpdate(id);
    setTambahUnitKerja(nama);
    setTambahKodeUnitKerja(kode);
  };

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-row gap-y-4 gap-x-6 top-[64px] md:p-8 p-0 pt-3 flex flex-col"
    >
      <SearchBar search={search} handleSearch={handleSearch} />
      <div>
        <label
          htmlFor="my-modal"
          className="btn btn-primary rounded btn-sm h-[40px] text-white"
        >
          Tambah Unit Kerja
        </label>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box flex flex-col">
            <h3 className="font-bold text-lg">Tambah Unit Kerja Baru</h3>
            <label htmlFor="tambahUnit">Nama Unit Kerja</label>
            <input
              onChange={handleTambahUnitKerja}
              value={tambahUnitKerja}
              className=" w-full h-12 p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
              type="text"
              placeholder="Nama Unit Kerja"
            />
            <label htmlFor="tambahKodeUnit">Kode Unit Kerja</label>
            <input
              onChange={handleTambahKodeUnitKerja}
              value={tambahKodeUnitKerja}
              className=" w-full h-12 p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
              type="number"
              placeholder="Nama Unit Kerja"
            />
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Batalkan
              </label>
              <label onClick={handleTambah} htmlFor="my-modal" className="btn">
                Simpan
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-x-auto min-w-full  border shadow-md rounded-md">
        <table className="min-w-screen table overflow-x-auto min-w-full ">
          <thead className="bg-white">
            <tr className="bg-white border-b">
              <th className="bg-white"></th>
              <th className="bg-white">Unit Kerja</th>

              <th className="bg-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {unitKerja === []
              ? null
              : unitKerja.map((item, index) => (
                  <>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.unit_kerja}</td>
                      <td className="w-[260px]">
                        <label
                          onClick={() =>
                            handleEditButton(
                              item.id,
                              item.unit_kerja,
                              item.unit_kerja_kode
                            )
                          }
                          htmlFor="editUnitKerja"
                          className="btn btn-success mr-2 rounded btn-sm  text-white"
                        >
                          Edit
                        </label>

                        <button
                          onClick={() => handleHapus(item.id)}
                          className="btn btn-error rounded btn-sm  text-white"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                    <input
                      type="checkbox"
                      id="editUnitKerja"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Ubah Unit Kerja</h3>
                        <label htmlFor="tambahKodeUnit">Kode Unit Kerja</label>
                        <input
                          onChange={handleTambahUnitKerja}
                          value={tambahUnitKerja}
                          className=" w-full h-12 p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
                          type="text"
                          placeholder="Nama Unit Kerja"
                        />
                        <label htmlFor="tambahKodeUnit">Kode Unit Kerja</label>
                        <input
                          onChange={handleTambahKodeUnitKerja}
                          value={tambahKodeUnitKerja}
                          className=" w-full h-12 p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
                          type="number"
                          placeholder="Nama Unit Kerja"
                        />
                        <div className="modal-action">
                          <label htmlFor="editUnitKerja" className="btn">
                            Batalkan
                          </label>
                          <label
                            onClick={handleEdit}
                            htmlFor="editUnitKerja"
                            className="btn"
                          >
                            Simpan
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UnitKerja;
