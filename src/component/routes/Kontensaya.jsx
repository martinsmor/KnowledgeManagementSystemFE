// Page Untuk Melihat Status Konten Yang telah

import { Link } from "react-router-dom";

function Kontensaya(props) {
  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-row gap-y-4 gap-x-6 top-[64px] md:p-8 p-4 "
    >
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
