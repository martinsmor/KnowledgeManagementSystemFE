// Merupakan Page untuk Membuat Konten

import "react-quill/dist/quill.snow.css";
import { useContext, useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { Autocomplete, Chip, TextField } from "@mui/material";
import httpClient from "../../httpClient.js";
import { useSnackbar } from "notistack";
import { AuthContext } from "../../App.jsx";

const tagsAll = [
  { title: "#SP2020", year: 1994 },
  { title: "#ST2023", year: 1972 },
  { title: "#SIG", year: 1974 },
  { title: "#bigdata", year: 2008 },
  { title: "#uiux", year: 1957 },
  { title: "#ask", year: 1993 },
  { title: "#info", year: 1994 },
];

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ align: [] }],
    ["link", "image", "video", "code-block"],
    ["clean"],
  ],
};

function BuatKonten(props) {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [Cover, setCover] = useState("");
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const isLogin = useContext(AuthContext);
  useEffect(() => {
    if (!isLogin) {
      window.location.href = "/auth";
    }
    let data = {
      limit: 100,
      page: 1,
      search: "",
    };
    httpClient
      .readKategori(data)
      .then((res) => {
        console.log(res.data);
        setCategories(res.data.kategori);
      })
      .catch((err) => {
        enqueueSnackbar("Mohon Maaf, Terjadi Kesalahan", {
          variant: "error",
        });
      });
  }, []);

  const handleChangeCover = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCover(reader.result);
    };
  };
  useEffect(() => {
    console.log(tags);
  }, [tags]);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    let tagsString = "";
    tags.forEach((tag) => {
      //  add # if not exist
      if (tag[0] !== "#") {
        tag = "#" + tag;
      }
      tagsString += tag + ",";
    });
    tagsString = tagsString.substring(0, tagsString.length - 1);
    console.log(tagsString);
    let data = {
      username: "user2",
      judul: title,
      isi_konten: value,
      tags: tagsString,
      kategori: category,
      thumbnail: Cover,
    };
    console.log(data);
    httpClient
      .createContent(data)
      .then((res) => {
        console.log(res);
        enqueueSnackbar("Konten Berhasil Dibuat", { variant: "success" });
        console.log(res.data.messages.contentId);
        window.location.href = "/konten/" + res.data.messages.contentId;
      })
      .catch((err) => {
        enqueueSnackbar("Mohon Maaf, Terjadi Kesalahan", {
          variant: "error",
        });
      });
  };
  const resetFileInput = (e) => {
    let randomString = Math.random().toString(36);
    setCover("");
  };

  if (isLogin) {
    return (
      <div
        id={props.isfull ? "maincontent" : "maincontent1"}
        className="absolute dark:bg-black  content flex flex-row gap-y-4 gap-x-6 top-[64px] pt-4 md:p-8 p-4 flex flex-col"
      >
        <form className={"flex flex-col gap-y-3"} onSubmit={handleSubmit}>
          <div className={"flex flex-col gap-y-1 "}>
            <label className="text-lg font-medium" htmlFor="title">
              Judul Konten
            </label>
            <input
              placeholder={"Title"}
              required
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="border  dark:bg-[#171717]  border-gray-400 px-3 rounded w-full p-2 focus:outline-2 focus:outline-blue-500"
            />
          </div>
          <div className={"flex flex-col gap-y-1 "}>
            <label className="text-lg font-medium">Cover Konten</label>
            <div className={"flex flex-row gap-2"}>
              <label
                className="btn btn-primary rounded h-[40px] w-fit btn-sm font-medium text-md capitalize hover:underline transition"
                htmlFor="cover"
              >
                Upload Cover
              </label>
              {Cover && (
                <button
                  onClick={resetFileInput}
                  type={"button"}
                  className="btn rounded btn-error  h-[40px]  btn-sm w-fit text-white text-md capitalize hover:underline transition"
                >
                  Hapus Cover
                </button>
              )}
            </div>

            <input
              id={"cover"}
              type="file"
              onChange={handleChangeCover}
              accept="image/jpg,.gif,.png,.svg,.jpeg"
              className={"hidden"}
            />
          </div>
          {Cover && (
            <div className={"flex flex-col gap-y-1 "}>
              <label className="text-lg font-medium" htmlFor="title">
                Preview Cover
              </label>
              <img
                src={Cover}
                className={
                  "max-h-[120px] max-w-[200px] rounded-md object-cover border"
                }
                alt="dfas"
              />
            </div>
          )}

          <div className={"flex flex-col gap-y-1"}>
            <label className={"text-lg font-medium"} htmlFor="">
              Kategori Konten
            </label>
            <select
              required={true}
              value={category}
              onChange={handleCategory}
              className="select  dark:bg-[#171717] dark:text-slate-200 font-normal transition-none min-h-0 h-[40px] w-full form-select appearance-none block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded  m-0  focus:outline-blue-500 focus:outline-offset-0 focus:outline border border-gray-400 "
            >
              <option value="" disabled defaultValue>
                -- Pilih Kategori --
              </option>
              {categories.map((category, index) => {
                return (
                  <option key={index + 1} value={category.nama_kategori}>
                    {category.nama_kategori}
                  </option>
                );
              })}
            </select>
          </div>

          <div className={"flex flex-col gap-y-1 "}>
            <label className="text-lg font-medium" htmlFor="title">
              Tags Konten
            </label>
            <Autocomplete
              className={"bg-rose-500"}
              multiple
              onChange={(event, value) => setTags(value)}
              id="tags-outlined"
              options={tagsAll.map((option) => option.title)}
              freeSolo
              size="small"
              sx={{ backgroundColor: "white", borderColor: "red" }}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" placeholder="Tags" />
              )}
            />
          </div>
          <div className={"flex flex-col gap-y-1"}>
            <label className="text-lg font-medium" htmlFor="title">
              Tulis Konten
            </label>
            <ReactQuill
              placeholder={"Isi Konten ..."}
              modules={modules}
              value={value}
              onChange={setValue}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full bg-[#1848CE] hover:bg-[#0636bd] hover:underline"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default BuatKonten;
