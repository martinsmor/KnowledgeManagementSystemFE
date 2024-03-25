// Halaman Konten yang telah dibuat

import ReactQuill from "react-quill";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import httpClient from "../../httpClient.js";
import { AuthContext, UserContext } from "../../App.jsx";
import { useSnackbar } from "notistack";
import { Skeleton } from "@mui/material";
import profilePicture from "../../assets/default.jpg";

const HOME_LINK = import.meta.env.VITE_HOME;

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
    ["link", "video", "code-block", "code-block"],
    ["clean"],
  ],
};

function SkeletonComponent() {
  return (
    <div
      className={
        "bg-white break-words  dark:bg-[#171717] dark:border-zinc-800 dark:text-slate-200 rounded-md min-w-full max-w-full rounded-b-none border-t border-x border-gray-300"
      }
    >
      <div className={"sm:p-12 p-4 pt-4"}>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="avatar mr-4">
              <Skeleton
                variant="circular"
                animation="wave"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col w-[200px] justify-around ">
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </div>
          </div>
          <div className={"flex gap-x-2"}>
            <div
              className={
                "flex transition gap-2 flex-row justify-center items-center"
              }
            >
              <Skeleton
                animation="wave"
                sx={{
                  width: { xs: "20px", sm: "100px" },
                }}
              />
            </div>

            <a
              href={"#comment"}
              className={
                "flex transition hover:bg-gray-100 dark:hover:bg-gray-700 px-4 rounded-md flex-row justify-center items-center"
              }
            >
              <Skeleton
                animation="wave"
                sx={{
                  width: { xs: "20px", sm: "100px" },
                }}
              />
            </a>
          </div>
        </div>

        <div>
          <Skeleton height={40} width={"60%"} animation="wave" />
          <Skeleton variant="rectangular" height={400} animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </div>
      </div>
    </div>
  );
}

function Konten(props) {
  const user = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();
  const [value, setValue] = useState("");
  const { id } = useParams();
  const [data, setData] = useState({});
  const [comment, setComment] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [isLikeFirst, setIsLikeFirst] = useState(false);
  const isLogin = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleHTML = (html) => {
    return { __html: html };
  };
  useEffect(() => {
    setIsLoading(true);
    httpClient
      .readContent(id)
      .then((data) => {
        setData(data.data);
        setLikeCount(parseInt(data.data.liked));
        setIsLoading(false);
      })
      .catch((err) => {
        enqueueSnackbar("Mohon Maaf, Terjadi Kesalahab", {
          variant: "error",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
    httpClient.readCommentByContentId(id).then((res) => {
      setComment(res.data);
      setCommentCount(res.data.length);
    });
    let data1 = {
      username: isLogin ? user.username : "",
    };
    if (isLogin) {
      httpClient.isLiked(data1, id).then((res) => {
        setIsLike(res.data);
        setIsLikeFirst(res.data);
      });
    }
  }, []);
  const addComment = () => {
    if (value === "") {
      enqueueSnackbar("Comment Tidak Boleh Kosong", {
        variant: "error",
      });
      return;
    }
    let data = {
      comment: value,
      username: user.username,
      profile_photo: user.profile_photo,
    };
    httpClient.addComment(id, data).then((res) => {
      let newComment = {
        isi_comment: value,
        username: user.username,
        nama: user.nama,
        profile_photo: user.profile_photo,
      };
      setComment([...comment, newComment]);
      setValue("");
      setCommentCount(commentCount + 1);
      enqueueSnackbar("Comment Berhasil Ditambahkan", {
        variant: "success",
      });
    });
  };
  const handleLike = () => {
    if (isLike) {
      let data1 = {
        username: user.username,
      };
      httpClient.unlikeContent(id, data1).then((res) => { });
      setIsLike(false);
      setLikeCount(likeCount - 1);
    } else {
      let data1 = {
        username: user.username,
      };
      httpClient.likeContent(id, data1).then((res) => { });
      setIsLike(true);
      setLikeCount(likeCount + 1);
    }
  };
  const handleTanggal = (tanggal) => {
    let date = new Date(tanggal);
    let month = date.toLocaleString("default", { month: "long" });
    let day = date.getDate();
    let year = date.getFullYear();
    return day + " " + month + " " + year;
  };

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute dark:bg-black flex-nowrap content top-[55px] md:p-12 p-0 items-center flex flex-col justify-center"
    >
      {isLoading ? (
        <SkeletonComponent />
      ) : (
        <div
          className={
            "bg-white break-words  dark:bg-[#171717] dark:border-zinc-800 dark:text-slate-200 rounded-md min-w-full max-w-full rounded-b-none border-t border-x border-gray-300"
          }
        >
          <div className={"sm:p-12 p-4 pt-4"}>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center">
                <div className="avatar mr-4">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      alt={data.nama}
                      src={
                        data.profile_photo === ""
                          ? profilePicture
                          : HOME_LINK + "/profile/" + data.profile_photo
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-around ">
                  <div>{data.nama}</div>
                  <div className="text-sm">{handleTanggal(data.tanggal)}</div>
                </div>
              </div>
              <div className={"flex gap-x-2"}>
                <div
                  className={
                    "flex transition gap-2 flex-row justify-center items-center"
                  }
                >
                  <label className="swap">
                    <input onClick={handleLike} type="checkbox" />
                    <svg
                      className={
                        isLikeFirst
                          ? "swap-off fill-red-600 w-5 h-5"
                          : "swap-on fill-red-600 w-5 h-5"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                    <svg
                      className={
                        !isLikeFirst
                          ? "swap-off dark:fill-white fill-gray-600 w-5 h-5"
                          : "swap-on dark:fill-white fill-red-600 w-5 h-5"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                    </svg>
                  </label>
                  <span>
                    {likeCount}
                    <span className={"sm:inline hidden"}> Reactions</span>
                  </span>
                </div>

                <div
                  className={
                    "flex transition  px-4 rounded-md flex-row justify-center items-center"
                  }
                >
                  <span>
                    <svg
                      className={"w-5 dark:fill-white"}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z" />
                    </svg>
                  </span>
                  <span className={"ml-2 text-sm"}>
                    {" "}
                    {commentCount}
                    <span className={"sm:inline hidden"}> Comments</span>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h1 className="my-6 mb-2 font-extrabold text-4xl ">
                {data.judul}
              </h1>
              <div className={"flex my-4 flex-wrap  gap-2"}>
                {/*{string to array}*/}
                {data.tags === ""
                  ? null
                  : data.tags.split(",").map((item, key) => {
                    return (
                      <Link
                        className={
                          "hover:bg-blue-200 rounded-2xl border dark:hover:bg-zinc-600 border-blue-200 hover:border-blue-400 px-3 py-1 "
                        }
                        // navigate(`/beranda/search?query=${search}&filter=${filter}&sort=${e}`);

                        to={
                          "../beranda/search?query=" +
                          item.substring(1) +
                          "&filter=" +
                          "&sort=tanggal"
                        }
                      >
                        {item}
                      </Link>
                    );
                  })}
              </div>
              {data.thumbnail !== "default.png" ? (
                <img
                  className={"w-full"}
                  src={HOME_LINK + "/assets/" + data.thumbnail}
                  alt="Thumbnail Content"
                />
              ) : null}

              <div
                className="prose prose-lg prose-gray block m-0 max-w-none text-black dark:text-slate-200"
                dangerouslySetInnerHTML={handleHTML(data.isi_konten)}
              ></div>
            </div>
          </div>
        </div>
      )}
      <div
        className={
          "bg-white   dark:bg-[#171717]  dark:border-zinc-800  rounded-md rounded-t-none border border-gray-300 shadow-xs w-full "
        }
      >
        <div
          id={"comment"}
          className={"flex flex-col sm:p-12 p-4 pt-4 gap-y-6 "}
        >
          <h1 className={"text-2xl font-semibold"}>
            Comments ({commentCount}){" "}
          </h1>

          {comment.map((item, key) => {
            return (
              <div
                className={
                  item.username === (isLogin ? user.username : "xyz")
                    ? "flex flex-row-reverse gap-x-2 sm:pl-14 pl-4"
                    : "flex flex-row gap-x-2 sm:pr-14 pr-4"
                }
              >
                <div className={"pt-2"}>
                  <div className="avatar">
                    <div className="sm:w-9 w-6 rounded-full">
                      <img
                        alt={item.username}
                        src={
                          item.profile_photo === ""
                            ? profilePicture
                            : HOME_LINK + "/profile/" + item.profile_photo
                        }
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "p-4 pt-2 border border-gray-300 dark:border-zinc-700 rounded-md w-full "
                  }
                >
                  <h4
                    className={
                      item.username === (isLogin ? user.username : "xyz")
                        ? "text-right text-lg font-semibold"
                        : "text-left text-lg font-semibold"
                    }
                  >
                    {item.nama}
                  </h4>
                  <div
                    className="prose prose-lg prose-gray block m-0 max-w-none break-words text-black dark:text-slate-200"
                    dangerouslySetInnerHTML={handleHTML(item.isi_comment)}
                  ></div>
                </div>
              </div>
            );
          })}

          {isLogin && data.status === "Diterima" ? (
            <div className={"sm:px-14"}>
              <ReactQuill
                placeholder={"Tambah Komentar ..."}
                modules={modules}
                value={value}
                onChange={setValue}
              />
              <button
                onClick={addComment}
                className={"btn mt-2 btn-primary rounded-md sm:w-auto w-full"}
              >
                Submit
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Konten;
