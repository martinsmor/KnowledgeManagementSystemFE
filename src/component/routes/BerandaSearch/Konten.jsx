// Component Konten Yang berisi infinite scroll dari konten

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import httpClient from "../../../httpClient.js";
import { CircularProgress, Skeleton } from "@mui/material";
import { useSnackbar } from "notistack";
import profilePicture from "../../../assets/default.jpg";
import notfound from "../../../assets/notfound.png";
import { useParams } from "react-router-dom";
import BPSLogo from "../../../assets/bpslogo.png";

const HOME_LINK = import.meta.env.VITE_HOME;

// Skeleton Loading
const Loading = (props) => {
  return (
    <div
      key={12}
      to={"/konten/"}
      className={
        props.isGrid
          ? "card dark:bg-[#171717]  dark:border-gray-900  kontancard transition hover:border-blue-400 sm:w-80 w-full bg-base-100 border border-gray-300 sm:rounded-md rounded-none"
          : "card dark:bg-[#171717]  dark:border-gray-900  kontancard transition hover:border-blue-400  w-full bg-base-100 border border-gray-300 sm:rounded-md rounded-none"
      }
    >
      <div className="card-body p-6 gap-y-1">
        <div className="flex flex-row">
          <div className="avatar mr-4">
            <Skeleton
              variant="circular"
              animation="wave"
              width={40}
              height={40}
            />
          </div>
          <div className="flex sm:flex-col flex-row justify-around items-center sm:items-start gap-x-2">
            <Skeleton width={150} height={15} animation="wave" />
            <span className={"sm:hidden "}>&#183;</span>
            <Skeleton width={100} height={15} animation="wave" />
          </div>
        </div>
        {props.isFull ? (
          <div className={"flex justify-between gap-8 pr-6"}>
            <div className={""}>
              {props.isGrid ? (
                <>
                  <Skeleton animation="wave" width={200} height={30} />
                  <Skeleton animation="wave" width={240} height={20} />
                  <Skeleton animation="wave" width={260} height={20} />
                  <Skeleton animation="wave" width={220} height={20} />
                  <Skeleton animation="wave" width={250} height={20} />
                </>
              ) : (
                <>
                  <Skeleton animation="wave" width={500} height={30} />
                  <Skeleton animation="wave" width={600} height={20} />
                  <Skeleton animation="wave" width={660} height={20} />
                  <Skeleton animation="wave" width={620} height={20} />
                  <Skeleton animation="wave" width={650} height={20} />
                </>
              )}
            </div>

            <div className={props.isGrid ? "hidden" : "lg:block hidden"}>
              <Skeleton variant="rounded" width={210} height={120} />
            </div>
          </div>
        ) : (
          <div className={"flex justify-between gap-8 pr-6"}>
            <div className={"sm:block hidden"}>
              {props.isGrid ? (
                <>
                  <Skeleton animation="wave" width={200} height={30} />
                  <Skeleton animation="wave" width={240} height={20} />
                  <Skeleton animation="wave" width={260} height={20} />
                  <Skeleton animation="wave" width={220} height={20} />
                  <Skeleton animation="wave" width={250} height={20} />
                </>
              ) : (
                <>
                  <Skeleton animation="wave" width={500} height={30} />
                  <Skeleton animation="wave" width={700} height={20} />
                  <Skeleton animation="wave" width={760} height={20} />
                  <Skeleton animation="wave" width={720} height={20} />
                  <Skeleton animation="wave" width={750} height={20} />
                </>
              )}
            </div>
            <div className={"sm:hidden block"}>
              <Skeleton animation="wave" width={260} height={30} />
              <Skeleton animation="wave" width={300} height={20} />
              <Skeleton animation="wave" width={300} height={20} />
              <Skeleton animation="wave" width={300} height={20} />
              <Skeleton animation="wave" width={300} height={20} />
            </div>

            <div className={props.isGrid ? "hidden" : "lg:block hidden"}>
              <Skeleton variant="rounded" width={210} height={120} />
            </div>
          </div>
        )}

        <div>
          <div className="flex flex-row gap-x-1 mt-2">
            <div
              className={
                "flex transition hover:bg-gray-100 py-1.5 rounded-md flex-row justify-center items-center"
              }
            >
              <Skeleton animation="wave" width={100} height={20} />
            </div>
            <div
              className={
                "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
              }
            >
              <Skeleton animation="wave" width={100} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component Konten
function AllKonten(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(10);
  const [count, setCount] = useState(1);
  const [loading2, setLoading2] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState(false);
  const [tags, setTags] = useState([]);
  const [reset, setReset] = useState(false);
  const [search, setSearch] = useState(true);

  // Fungsi Untuk Infinite Scroll
  window.onscroll = function () {
    if (props.isFull) {
      if (
        window.innerHeight + window.scrollY >=
        document.getElementById("maincontent").offsetHeight - 500
      ) {
        handleLoadMore2();
      }
    } else {
      if (
        window.innerHeight + window.scrollY >=
        document.getElementById("maincontent1").offsetHeight - 500
      ) {
        handleLoadMore2();
      }
    }
  };
  const handleLoadMore2 = () => {
    if (loading2) {
      return;
    }
    handleLoadMore();
  };

  useEffect(() => {
    setError(false);
    setPage(1);
    setReset(true);

    let params = {
      search: props.search,
      sort: props.sort,
      filter: props.filter,
      page: 1,
      limit: 10,
    };
    httpClient.readAllContent(params).then((res) => {
      setData(res.data.data);
      setCount(res.data.total);
      setMaxPage(Math.ceil(res.data.total / 10));
      setLoading(false);
    });
  }, [
    props.back,
    props.reset,
    props.getSearch,
    props.sort,
    props.filter,
    props.url,
  ]);

  const handleAddData = (newData) => {
    const newDataList = data.concat(newData);
    setData(newDataList);
  };
  const handleTanggal = (tanggal) => {
    let date = new Date(tanggal);
    let month = date.toLocaleString("default", { month: "long" });
    let day = date.getDate();
    let year = date.getFullYear();
    return day + " " + month + " " + year;
  };

  useEffect(() => {
    setLoading2(true);
    if (reset) {
      let state = reset;
      setReset(false);
      if (state) {
        setLoading2(false);
        return;
      }
    }
    let params = {
      search: props.search,
      sort: props.sort,
      filter: props.filter,
      page: page,
      limit: 10,
    };
    httpClient
      .readAllContent(params)
      .then((data) => {
        handleAddData(data.data.data);
      })
      .catch((err) => {
        enqueueSnackbar("Mohon Maaf, Terjadi Kesalahan", {
          variant: "error",
        });
        setError(true);
      })
      .finally(() => {
        setLoading(false);
        setLoading2(false);
      });
  }, [page]);

  const handleHTML = (html) => {
    let clean = html.replace(/(<([^>]+)>)/gi, " ");
    //remove special characters
    clean = clean.replace(/&nbsp;/gi, " ");
    clean = clean.replace(/&amp;/gi, " ");
    clean = clean.replace(/&quot;/gi, " ");
    clean = clean.replace(/&lt;/gi, " ");
    clean = clean.replace(/&gt;/gi, " ");
    return clean;
  };
  const handleLoadMore = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }
  };

  return (
    <div className={"flex flex-row sm:gap-4 gap-1 z-10 flex-wrap "}>
      {loading
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Loading key={item} isFull={props.isFull} isGrid={props.isGrid} />
          ))
        : null}

      {data.map((item, index) => (
        <Link
          key={index}
          to={"/konten/" + item.contentId}
          className={
            props.isGrid
              ? "card dark:bg-[#171717] dark:accent-slate-200 kontancard items-around transition hover:border-blue-400 dark:hover:border-gray-600 sm:w-80 w-full bg-base-100 border border-gray-300 dark:border-gray-900 sm:rounded-md rounded-none"
              : "card dark:bg-[#171717] dark:accent-slate-200 kontancard transition hover:border-blue-400  w-full dark:hover:border-gray-600 bg-base-100 border border-gray-300 sm:rounded-md dark:border-gray-900 rounded-none"
          }
        >
          <div
            className={
              props.isGrid ? "card-body p-6 gap-y-1" : "card-body p-6 gap-y-1 "
            }
          >
            <img
              className={
                !props.isGrid
                  ? "hidden"
                  : "rounded-md object-cover border min-w-full min-h-[150px] max-h-[150px] mb-2"
              }
              src={
                item.thumbnail === "default.png"
                  ? BPSLogo
                  : HOME_LINK + "/assets/" + item.thumbnail
              }
              alt=""
            />

            <div className="flex flex-row">
              <div className={props.isGrid ? "hidden" : "avatar mr-4"}>
                <div className="sm:w-10 sm:h-10 w-6 h-6 rounded-full">
                  <img
                    src={
                      item.user_photo === ""
                        ? profilePicture
                        : HOME_LINK + "/profile/" + item.user_photo
                    }
                    alt="user"
                  />
                  } />
                </div>
              </div>
              <div className="flex sm:flex-col flex-row justify-around items-center sm:items-start gap-x-2">
                <div className={"sm:text-normal text-sm font-medium"}>
                  {item.nama}
                </div>
                <span className={"sm:hidden "}>&#183;</span>
                <div className="text-sm">{handleTanggal(item.tanggal)}</div>
              </div>
            </div>
            <div className={"flex justify-between  max-w-full  gap-8 pr-6"}>
              <div className={""}>
                <h2 className="font-semibold text-xl py-1  max-w-full  line-clamp-2">
                  {item.judul}
                </h2>

                <p
                  className={
                    props.isGrid ? "hidden" : "line-clamp-2 max-w-full text-md"
                  }
                >
                  {handleHTML(item.isi_konten)}
                </p>
              </div>
              {item.thumbnail !== "default.png" ? (
                <div className={props.isGrid ? "hidden" : "lg:block hidden"}>
                  <img
                    className={
                      "rounded-md object-cover min-w-[200px] border   min-h-[120px] max-h-[120px] max-w-[200px]"
                    }
                    src={HOME_LINK + "/assets/" + item.thumbnail}
                    alt="This is a Thumbnail of the content"
                  />
                </div>
              ) : null}
            </div>

            <div>
              <div className="flex flex-wrap flex-row gap-x-1 mt-2">
                <div
                  className={
                    "flex transition hover:bg-rose-100 dark:hover:bg-gray-700 py-1.5 px-4 rounded-2xl flex-row justify-center items-center"
                  }
                >
                  <span>
                    <svg
                      className={"w-4 dark:fill-white"}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                    </svg>
                  </span>
                  <span className={"ml-2 text-sm"}>
                    {" "}
                    {item.liked}
                    <span className={"hidden sm:inline"}> Reactions</span>
                  </span>
                </div>
                <div
                  className={
                    "flex transition hover:bg-blue-100 dark:hover:bg-gray-700 py-1.5 px-4 rounded-2xl flex-row justify-center items-center"
                  }
                >
                  <span>
                    <svg
                      className={"w-4 dark:fill-white"}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z" />
                    </svg>
                  </span>
                  <span className={"ml-2 text-sm"}>
                    {item.commented}
                    <span className={"hidden sm:inline"}> Comments</span>
                  </span>
                </div>
                {item.tags !== ""
                  ? item.tags
                      .split(",")
                      .slice(0, 3)
                      .map((tag, index) => (
                        <div
                          key={index}
                          className={
                            props.isGrid
                              ? "hidden"
                              : "flex transition hover:bg-green-200  dark:hover:bg-gray-700 py-1.5 px-4 rounded-2xl  flex-row justify-center items-center"
                          }
                        >
                          <span className={"text-sm"}>{tag}</span>
                        </div>
                      ))
                  : null}
              </div>
            </div>
          </div>
        </Link>
      ))}
      {count === 0 ? (
        <div className={"flex flex-col mx-auto justify-center items-center"}>
          <img src={notfound} alt={"empty"} className={"w-3/4"} />
          <span>Konten Tidak Ditemukan</span>
          Coba cari dengan kata kunci lain atau hapus filter
        </div>
      ) : !loading && page < maxPage ? (
        <div className={"w-full my-8 flex justify-center"}>
          <CircularProgress />
        </div>
      ) : (
        <div className={"w-full  my-8 flex justify-center"}>
          <span>Tidak Ada Konten Lagi</span>
        </div>
      )}
    </div>
  );
}

export default AllKonten;
