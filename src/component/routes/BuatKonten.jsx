// Merupakan Page untuk Membuat Konten

import "react-quill/dist/quill.snow.css";
import { useContext, useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { Autocomplete, Chip, CircularProgress, TextField } from "@mui/material";
import httpClient from "../../httpClient.js";
import { useSnackbar } from "notistack";
import { AuthContext, UserContext } from "../../App.jsx";
import ImageUploader from "quill-image-uploader";
import { useNavigate } from "react-router-dom";

Quill.register("modules/imageUploader", ImageUploader);
const HOME_LINK = import.meta.env.VITE_HOME;

const tagsAll = [
  { title: "#SP2020" },
  { title: "#ST2023" },
  { title: "#SIG" },
  { title: "#bigdata" },
  { title: "#ask" },
  { title: "#info" },
  { title: "pertanian" },
  { title: "kependudukan" },
  { title: "pariwisata" },
];

const modules = {
  imageUploader: {
    upload: (file) => {
      return new Promise((resolve, reject) => {
        if (file.size > 500000) {
          reject("File is too big!");
          return;
        }
        const formData = new FormData();
        formData.append("image", file);
        httpClient.uploadImage(formData).then((res) => {
          resolve(HOME_LINK + "/content/" + res.data.thumbnail);
        });
      });
    },
  },
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
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const navigate = useNavigate();

  const isLogin = useContext(AuthContext);
  useEffect(() => {
    if (!isLogin) {
      navigate("/auth");
    }
    let data = {
      limit: 100,
      page: 1,
      search: "",
    };
    httpClient
      .readKategori(data)
      .then((res) => {
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
    if (file.size > 500000) {
      enqueueSnackbar("Ukuran File Terlalu Besar (>500kb) ", {
        variant: "error",
      });
      return;
    }
    setThumbnail(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCover(reader.result);
    };
  };
  useEffect(() => {}, [tags]);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (event) => {
    enqueueSnackbar("Mohon Tunggu Sebentar", { variant: "info" });
    setLoading(true);
    event.preventDefault();
    let tagsString = "";
    tags.forEach((tag) => {
      //  add # if not exist
      if (tag[0] !== "#") {
        tag = "#" + tag;
      }
      tagsString += tag + ",";
    });
    tagsString = tagsString.substring(0, tagsString.length - 1);
    const formData = new FormData();
    formData.append("username", user.username);
    formData.append("judul", title);
    formData.append("isi_konten", value);
    formData.append("tags", tagsString);
    formData.append("cover", thumbnail);
    formData.append("kategori", category);

    let data = {
      username: user.username,
      judul: title,
      isi_konten: value,
      tags: tagsString,
      kategori: category,
      thumbnail: Cover,
      cover: thumbnail,
    };
    httpClient
      .createContent(formData)
      .then((res) => {
        enqueueSnackbar("Konten Berhasil Dibuat", { variant: "success" });
        navigate("/konten/" + res.data.messages.contentId);
        // window.location.href = "/konten/" + res.data.messages.contentId;
      })
      .catch((err) => {
        enqueueSnackbar("Mohon Maaf, Terjadi Kesalahan", {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
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
              accept="image/*"
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
              multiple
              onChange={(event, value) => setTags(value)}
              id="tags-outlined"
              options={tagsAll.map((option) => option.title)}
              freeSolo
              size="small"
              sx={{
                backgroundColor: "white",
                borderWidth: 1,
                borderRadius: 1,
                borderColor: "gray.800",
                "&:hover": { borderColor: "transparent" },
              }}
              renderInput={(params) => (
                <TextField
                  sx={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderRadius: 1,
                    borderColor: "gray.800",
                    "&:hover": { borderColor: "transparent" },
                  }}
                  {...params}
                  placeholder="Tags"
                />
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
            disabled={loading}
            className={
              "bg-blue-500  disabled text-white px-4 py-2 rounded-md mt-4 w-full bg-[#1848CE] hover:bg-[#0636bd] hover:underline"
            }
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default BuatKonten;
