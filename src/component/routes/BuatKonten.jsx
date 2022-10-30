// Merupakan Page untuk Membuat Konten

import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import { Autocomplete, Chip, TextField } from "@mui/material";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
];

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

  const [jenisKonten, setJenisKonten] = useState("Artikel");
  const handleJenisKonten = (e) => {
    setJenisKonten(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-row gap-y-4 gap-x-6 top-[64px] pt-4 md:p-8 p-2 flex flex-col"
    >
      <form className={"flex flex-col gap-y-3"} onSubmit={handleSubmit}>
        <div className={"flex flex-col gap-y-1"}>
          <label className={"text-lg font-semibold"} htmlFor="">
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
        <div className={"flex flex-col gap-y-1"}>
          <label className={"text-lg font-semibold"} htmlFor="">
            Kategori Konten
          </label>
          <select
            value={jenisKonten}
            onChange={handleJenisKonten}
            className="select font-normal transition-none min-h-0 h-[40px] w-full form-select appearance-none block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded  m-0  focus:outline-blue-400 focus:outline-offset-0 focus:outline border border-gray-400 "
          >
            <option>Artikel</option>
            <option>Pertanyaan</option>
            <option>Foto</option>
            <option>Video</option>
            <option>Audio</option>
          </select>
        </div>
        <div className={"flex flex-col gap-y-1 "}>
          <label className="text-lg font-semibold" htmlFor="title">
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
        <div className={"flex flex-col gap-y-1 "}>
          <label className="text-lg font-semibold" htmlFor="title">
            Tags Konten
          </label>
          <Autocomplete
            multiple
            onChange={(event, value) => console.log(value)}
            id="tags-outlined"
            options={top100Films.map((option) => option.title)}
            freeSolo
            size="small"
            sx={{ backgroundColor: "white" }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" placeholder="Tags" />
            )}
          />
        </div>

        {jenisKonten === "Artikel" || jenisKonten === "Pertanyaan" ? (
          <div className={"flex flex-col gap-y-1"}>
            <label className="text-lg font-semibold" htmlFor="title">
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
