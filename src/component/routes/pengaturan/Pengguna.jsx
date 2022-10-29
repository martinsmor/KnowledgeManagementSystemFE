import { Link } from "react-router-dom";
import { useState } from "react";

function Pengguna(props) {
  const [updateRole, setUpdateRole] = useState("");
  const handleupdateRole = (e) => {
    setUpdateRole(e.target.value);
  };

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-row gap-y-4 gap-x-6 top-[64px] md:p-8 p-4 flex flex-col"
    >
      <div className=" overflow-x-auto min-w-full  border shadow-md rounded-md">
        <table className="min-w-screen table overflow-x-auto min-w-full ">
          <thead className="bg-white">
            <tr className="bg-white border-b">
              <th className="bg-white"></th>
              <th className="bg-white">Nama</th>
              <th className="bg-white">Unit Kerja</th>
              <th className="bg-white">Role</th>
              <th className="bg-white">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Michael Schott</td>
              <td>BPS Kabupaten Serang</td>
              <td>Approval</td>
              <td className="">
                <label
                  htmlFor="my-modal"
                  className="btn btn-accent rounded btn-sm  text-white"
                >
                  Ubah Role
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*Modal For Ubah Role*/}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box sm:rounded">
          <h3 className="font-bold text-lg">Ubah Role Pengguna</h3>
          <div className={"flex flex-col"}>
            <label htmlFor="">Role</label>
            <select
              value={updateRole}
              onChange={handleupdateRole}
              className="select transition-none w-full form-select appearance-none block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded  m-0  focus:outline-blue-400 focus:outline-offset-0 border border-gray-400 "
            >
              <option>-</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn rounded">
              Cancel
            </label>
            <label
              htmlFor="my-modal"
              className="btn btn-primary text-white rounded"
            >
              Simpan
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pengguna;
