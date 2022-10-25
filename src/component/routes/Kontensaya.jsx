// Page Untuk Melihat Status Konten Yang telah

function Kontensaya() {
  return (
    <div className="overflow-x-auto absolute z-40 content flex flex-row left-[280px] top-[64px] p-8">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Judul</th>
            <th>Tanggal</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>27 Agustus 2021</td>
            <td>
              <div className="badge badge-success badge-outline">Disetujui</div>
            </td>
            <td>
              <button className="btn btn-primary btn-sm rounded-md ">
                Lihat
              </button>
              <button className="btn btn-secondary btn-sm mx-2 rounded-md">
                Delete
              </button>
              <button className="btn btn-accent btn-sm rounded-md">Edit</button>
            </td>
          </tr>
          <tr className="hover">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>22 Maret 2022</td>
            <td>
              <div className="badge badge-error badge-outline">Ditolak</div>
            </td>
          </tr>
          <tr className="hover">
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>
              <div className="badge badge-neutral badge-outline">Pending</div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
}

export default Kontensaya;
