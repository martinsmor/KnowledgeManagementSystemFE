import { Link } from "react-router-dom";

function Approval(props) {
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
