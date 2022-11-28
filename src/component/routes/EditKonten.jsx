// Merupakan Page untuk Mengedit Konten

import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { Autocomplete, TextField } from "@mui/material";
import httpClient from "../../httpClient.js";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const HOME_LINK = import.meta.env.VITE_HOME;

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

function EditKonten(props) {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [Cover, setCover] = useState("");
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [data, setData] = useState({});
  const { id } = useParams();
  const [defaultTags, setDefaultTags] = useState([]);
  const HOME_LINK = import.meta.env.VITE_HOME;
  const [editThumbnail, setEditThumbnail] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    let data = {
      limit: 100,
      page: 1,
      search: "",
    };
    httpClient.readKategori(data).then((res) => {
      setCategories(res.data.kategori);
    });
    httpClient.readContent(id).then((data) => {
      setTitle(data.data.judul);
      setCategory(data.data.kategori);
      setValue(data.data.isi_konten);
      setData(data.data);
      // remove last comma on tags
      let tag = data.data.tags;
      // make array of tag ,
      let tagArray = tag.split(",");
      tagArray.map((item) => {
        defaultTags.push(item);
        tags.push(item);
      });
      if (data.data.thumbnail !== "default.png") {
        setCover(HOME_LINK + "/assets/" + data.data.thumbnail);
      }
    });
  }, []);

  const handleChangeCover = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    //if size > 1mb
    if (file.size > 500000) {
      enqueueSnackbar("Ukuran File Terlalu Besar (>500kb) ", {
        variant: "error",
      });
      return;
    }

    reader.onloadend = () => {
      setEditThumbnail(true);
      setCover(reader.result);
    };
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let tagsString = "";
    tags.forEach((tag) => {
      tagsString += tag + ",";
    });
    tagsString = tagsString.substring(0, tagsString.length - 1);
    let data = {
      username: "user1",
      judul: title,
      isi_konten: value,
      tags: tagsString,
      kategori: category,
      thumbnail: Cover,
      editThumbnail: editThumbnail,
    };
    httpClient.updateContent(id, data).then((res) => {
      window.location.href = "/konten/" + id;
    });
  };
  const resetFileInput = (e) => {
    let randomString = Math.random().toString(36);
    setEditThumbnail(true);
    setCover("");
  };

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute content flex flex-row gap-y-4 gap-x-6 top-[64px] pt-4 md:p-8 p-4 flex flex-col"
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
            className="border border-gray-400 px-3 rounded w-full p-2 focus:outline-2 focus:outline-blue-500"
          />
        </div>
        <div className={"flex flex-col gap-y-1 "}>
          <label className="text-lg font-medium">Cover Konten</label>
          <div className={"flex flex-row gap-2"}>
            <label
              className="btn btn-primary rounded w-fit btn-sm font-medium"
              htmlFor="cover"
            >
              Upload Cover
            </label>
            {Cover && (
              <button
                onClick={resetFileInput}
                type={"button"}
                className="btn rounded btn-error btn-sm w-fit text-white"
              >
                Hapus Cover
              </button>
            )}
          </div>

          <input
            id={"cover"}
            type="file"
            onChange={handleChangeCover}
            accept="image/jpg,.gif,.png,.jpeg,.jpg"
            className={"hidden"}
          />
        </div>
        {Cover && (
          <div className={"flex flex-col gap-y-1 "}>
            <label className="text-lg font-medium" htmlFor="title">
              Preview Cover
            </label>
            <img src={Cover} className={"w-1/3"} alt="dfas" />
          </div>
        )}

        <div className={"flex flex-col gap-y-1"}>
          <label className={"text-lg font-medium"} htmlFor="">
            Kategori Konten
          </label>
          <select
            value={category}
            onChange={handleCategory}
            className="select font-normal transition-none min-h-0 h-[40px] w-full form-select appearance-none block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded  m-0  focus:outline-blue-500 focus:outline-offset-0 focus:outline border border-gray-400 "
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
            multiple
            onChange={(event, value) => setTags(value)}
            id="tags-outlined"
            options={tagsAll.map((option) => option.title)}
            freeSolo
            defaultValue={defaultTags}
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
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditKonten;
