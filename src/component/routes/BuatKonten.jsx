// Merupakan Page untuk Membuat Konten

import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import ReactQuill from "react-quill";

function BuatKonten(props) {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  let modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    let data = {
      title: title,
      content: value,
    };
  };

  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // Return the current status of files being uploaded
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // Return array of uploaded files after submit button is clicked
  // const handleSubmit = (files, allFiles) => {
  //   console.log(files.map(f => f.meta))
  //   allFiles.forEach(f => f.remove())
  // }

  const getFilesFromEvent = (e) => {
    return new Promise((resolve) => {
      getDroppedOrSelectedFiles(e).then((chosenFiles) => {
        resolve(chosenFiles.map((f) => f.fileObject));
      });
    });
  };

  const [jenisKonten, setJenisKonten] = useState("Artikel");
  const handleJenisKonten = (e) => {
    setJenisKonten(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-row gap-y-4 gap-x-6 top-[64px] md:p-8 p-4 flex flex-col"
    >
      <form className={"flex flex-col gap-y-3"} onSubmit={handleSubmit}>
        <div className={"flex flex-col gap-y-1"}>
          <label className={"text-xl font-semibold"} htmlFor="">
            Pilih Jenis Konten
          </label>
          <select
            value={jenisKonten}
            onChange={handleJenisKonten}
            className="select font-normal transition-none min-h-0 h-[40px] w-full form-select appearance-none block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded  m-0  focus:outline-blue-400 focus:outline-offset-0 border border-gray-400 "
          >
            <option>Artikel</option>
            <option>Pertanyaan</option>
            <option>Foto</option>
            <option>Video</option>
            <option>Audio</option>
          </select>
        </div>
        <div className={"flex flex-col gap-y-1 "}>
          <label className="text-xl font-semibold" htmlFor="title">
            Judul Konten
          </label>
          <input
            placeholder={"Title"}
            required
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="border border-gray-400 px-3 rounded w-full p-2 focus:outline-2 focus:outline-blue-500"
          />
        </div>

        {jenisKonten === "Artikel" || jenisKonten === "Pertanyaan" ? (
          <div className={"flex flex-col gap-y-1"}>
            <label className="text-xl font-semibold" htmlFor="title">
              Tulis Konten
            </label>
            <ReactQuill
              placeholder={"Isi Konten ..."}
              modules={modules}
              value={value}
              onChange={setValue}
            />
          </div>
        ) : null}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BuatKonten;
