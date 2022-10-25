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

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute z-40 content top-[64px] p-8"
    >
      <form onSubmit={handleSubmit}>
        <label className="mb-1 text-xl font-semibold" htmlFor="title">
          Judul Konten
        </label>
        <input
          placeholder={"Title"}
          required
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="border border-gray-400 px-3 rounded-md w-full p-2 my-2 focus:outline-2 focus:outline-blue-500"
        />
        <label className="mb-1 text-xl font-semibold" htmlFor="title">
          Isi Konten
        </label>
        <ReactQuill
          placeholder={"Isi Konten ..."}
          modules={modules}
          value={value}
          onChange={setValue}
        />
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
