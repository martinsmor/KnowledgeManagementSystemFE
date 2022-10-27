function Pengguna(props) {
  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-row gap-y-4 gap-x-6 top-[64px] md:p-8 p-4 flex flex-col"
    >
      <h1>Pengguna</h1>
    </div>
  );
}

export default Pengguna;
