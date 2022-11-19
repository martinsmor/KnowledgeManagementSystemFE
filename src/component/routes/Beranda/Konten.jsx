// All Konten Card Component
import { Link } from "react-router-dom";
import LikeIcon from "../../../assets/icon/Like.jsx";
import CommentICon from "../../../assets/icon/Comment.jsx";
import { useEffect, useRef, useState } from "react";
import httpClient from "../../../httpClient.js";
import { CircularProgress, Skeleton, Typography } from "@mui/material";

const Loading = (props) => {
  return (
    <div
      key={12}
      to={"/konten/"}
      className={
        props.isGrid
          ? "card kontancard transition hover:border-blue-400 sm:w-80 w-full bg-base-100 border border-gray-300 sm:rounded-md rounded-none"
          : "card kontancard transition hover:border-blue-400  w-full bg-base-100 border border-gray-300 sm:rounded-md rounded-none"
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
        <div className={"flex justify-between gap-8 pr-6"}>
          <div className={""}>
            <Skeleton animation="wave" width={500} height={30} />
            <Skeleton animation="wave" width={700} height={20} />
            <Skeleton animation="wave" width={760} height={20} />
            <Skeleton animation="wave" width={720} height={20} />
            <Skeleton animation="wave" width={750} height={20} />
          </div>

          <div className={props.isGrid ? "hidden" : "lg:block hidden"}>
            <Skeleton variant="rounded" width={210} height={120} />
          </div>
        </div>

        <div>
          <div className="flex flex-row gap-x-1 mt-2">
            <div
              className={
                "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
              }
            >
              <span>
                <LikeIcon />
              </span>
              <span className={"ml-2 text-sm"}> 3 Reactions</span>
            </div>
            <div
              className={
                "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
              }
            >
              <span>
                <CommentICon />
              </span>
              <span className={"ml-2 text-sm"}> 2 Comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function AllKonten(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(10);

  // window.onscroll = function () {
  //   if (
  //     window.innerHeight + window.scrollY >=
  //     document.getElementById("maincontent").offsetHeight - 500
  //   ) {
  //     console.log("asd");
  //     // if (page < maxPage) {
  //     //   setPage(page + 1);
  //     // }
  //   }
  // };

  useEffect(() => {
    setLoading(true);
    let params = {
      search: props.search,
      sort: props.sort,
      filter: props.filter,
      page: 1,
      limit: 10,
    };
    httpClient.readAllContent(params).then((data) => {
      setData(data.data.data);
      setMaxPage(Math.ceil(data.data.total / 10));
      setLoading(false);
    });
    console.log("page", page);
    console.log("maxpage", maxPage);
  }, [props.search, props.sort, props.filter]);

  const handleAddData = (newData) => {
    const newDataList = data.concat(newData);
    setData(newDataList);
  };

  useEffect(() => {
    let params = {
      search: props.search,
      sort: props.sort,
      filter: props.filter,
      page: page,
      limit: 10,
    };
    httpClient.readAllContent(params).then((data) => {
      handleAddData(data.data.data);
    });
  }, [page]);

  const handleHTML = (html) => {
    let clean = html.replace(/(<([^>]+)>)/gi, "");
    return clean;
  };
  const handleLoadMore = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }
  };

  return (
    <div className={"flex flex-row sm:gap-4 gap-2 z-10 flex-wrap "}>
      {loading ? <Loading isGrid={props.isGrid} /> : null}

      {data === []
        ? null
        : data.map((item, index) => (
            <Link
              key={index}
              to={"/konten/" + item.contentId}
              className={
                props.isGrid
                  ? "card kontancard transition hover:border-blue-400 sm:w-80 w-full bg-base-100 border border-gray-300 sm:rounded-md rounded-none"
                  : "card kontancard transition hover:border-blue-400  w-full bg-base-100 border border-gray-300 sm:rounded-md rounded-none"
              }
            >
              <div className="card-body p-6 gap-y-1">
                <div className="flex flex-row">
                  <div className="avatar mr-4">
                    <div className="sm:w-10 sm:h-10 w-6 h-6 rounded-full">
                      <img src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row justify-around items-center sm:items-start gap-x-2">
                    <div className={"sm:text-normal text-sm"}>
                      {item.username}
                    </div>
                    <span className={"sm:hidden "}>&#183;</span>
                    <div className="text-sm">{item.tanggal}</div>
                  </div>
                </div>
                <div className={"flex justify-between gap-8 pr-6"}>
                  <div className={""}>
                    <h2 className="card-title text-2xl py-1 line-clamp-2">
                      {item.judul}
                    </h2>
                    <p className={"line-clamp-2"}>
                      {handleHTML(item.isi_konten)}
                    </p>
                  </div>
                  {item.thumbnail !== "default.png" ? (
                    <div
                      className={props.isGrid ? "hidden" : "lg:block hidden"}
                    >
                      <img
                        className={
                          "rounded-md object-cover min-w-[200px] border   min-h-[120px] max-h-[120px] max-w-[200px]"
                        }
                        src={"http://localhost:8080/assets/" + item.thumbnail}
                        alt=""
                      />
                    </div>
                  ) : null}
                </div>

                <div>
                  <div className="flex flex-row gap-x-1 mt-2">
                    <div
                      className={
                        "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
                      }
                    >
                      <span>
                        <LikeIcon />
                      </span>
                      <span className={"ml-2 text-sm"}>
                        {" "}
                        {item.liked} Reactions
                      </span>
                    </div>
                    <div
                      className={
                        "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
                      }
                    >
                      <span>
                        <CommentICon />
                      </span>
                      <span className={"ml-2 text-sm"}> 2 Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      <button
        onClick={handleLoadMore}
        className="btn btn-sm rounded mx-auto btn-secondary"
      >
        Load More Content
      </button>
      {/*{page < maxPage ? (*/}
      {/*  <div className={"flex justify-center items-center w-full"}>*/}
      {/*    <CircularProgress />*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*  <div className={"flex justify-center items-center w-full"}>*/}
      {/*    <div className={"text-gray-500 text-sm"}>No More Data</div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
}

export default AllKonten;
