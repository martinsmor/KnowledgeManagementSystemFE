import profilePic from "../../assets/profile/profile.png";
import LikeIcon from "../../assets/icon/Like.jsx";
import CommentICon from "../../assets/icon/Comment.jsx";
import Like from "../../assets/icon/Like.jsx";
import ReactQuill from "react-quill";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import httpClient from "../../httpClient.js";

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
    ["link"],
  ],
};

function Konten(props) {
  const [value, setValue] = useState("");
  const { id } = useParams();
  const [data, setData] = useState({});
  const [comment, setComment] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [isLikeFirst, setIsLikeFirst] = useState(false);

  const handleHTML = (html) => {
    return { __html: html };
  };
  useEffect(() => {
    httpClient.readContent(id).then((data) => {
      console.log(data.data);
      setData(data.data);
      setLikeCount(parseInt(data.data.liked));
      1;
    });
    httpClient.readCommentByContentId(id).then((res) => {
      console.log(res.data);
      setComment(res.data);
      setCommentCount(res.data.length);
    });
    let data1 = {
      username: "user1",
    };
    httpClient.isLiked(data1, id).then((res) => {
      console.log(res.data);
      setIsLike(res.data);
      setIsLikeFirst(res.data);
    });
  }, []);
  const addComment = () => {
    let data = {
      comment: value,
      username: "user1",
    };
    httpClient.addComment(id, data).then((res) => {
      console.log(res);
    });
    let newComment = {
      isi_comment: value,
      username: "user1",
    };
    setComment([...comment, newComment]);
    setValue("");
    setCommentCount(commentCount + 1);
  };
  const handleLike = () => {
    let data1 = {
      username: "user1",
    };
    if (isLike) {
      httpClient.unlikeContent(id, data1).then((res) => {
        console.log(res);
      });
      setIsLike(false);
      setLikeCount(likeCount - 1);
    } else {
      httpClient.likeContent(id, data1).then((res) => {
        console.log(res);
      });
      setIsLike(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute flex-nowrap content top-[64px] md:p-12 p-0 items-center flex flex-col justify-center"
    >
      <div
        className={
          "bg-white break-words rounded-md min-w-full max-w-full rounded-b-none border-t border-x border-gray-300"
        }
      >
        <div className={"sm:p-12 p-4 pt-4"}>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="avatar mr-4">
                <div className="w-12 rounded-full">
                  <img src={profilePic} />
                </div>
              </div>
              <div className="flex flex-col justify-around ">
                <div>Arya Stark</div>
                <div className="text-sm">30 Februari 2020</div>
              </div>
            </div>
            <div className={"sm:flex hidden gap-x-2"}>
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
                        ? "swap-off fill-gray-600 w-5 h-5"
                        : "swap-on fill-red-600 w-5 h-5"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                  </svg>
                </label>
                <span>{likeCount} Reactions</span>
              </div>

              <a
                href={"#comment"}
                className={
                  "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
                }
              >
                <span>
                  <CommentICon />
                </span>
                <span className={"ml-2 text-sm"}> {commentCount} Comments</span>
              </a>
            </div>
          </div>

          <div>
            <h1 className="my-6 mb-2 font-extrabold text-4xl ">{data.judul}</h1>
            {/*<div className="player-wrapper">*/}
            {/*  <ReactPlayer*/}
            {/*    className="react-player"*/}
            {/*    url="https://www.youtube.com/watch?v=oAZK7e_iHAQ"*/}
            {/*    controls*/}
            {/*    width="100%"*/}
            {/*    height="100%"*/}
            {/*  />*/}
            {/*</div>*/}
            <img
              className={"w-full"}
              src={"http://localhost:8080/assets/" + data.thumbnail}
              alt=""
            />
            <div
              className="prose prose-lg prose-gray block m-0 max-w-none text-black"
              dangerouslySetInnerHTML={handleHTML(data.isi_konten)}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={
          "bg-white rounded-md rounded-t-none border border-gray-300 shadow-xs w-full "
        }
      >
        <div
          id={"comment"}
          className={"flex flex-col sm:p-12 p-4 pt-4 gap-y-6 "}
        >
          <h1 className={"text-2xl font-semibold"}>
            Comments ({commentCount}){" "}
          </h1>
          {/*profile with comment*/}
          {comment.map((item, key) => {
            return (
              <div
                className={
                  item.username === "user1"
                    ? "flex flex-row-reverse gap-x-2 sm:pl-14 pr-4"
                    : "flex flex-row gap-x-2 sm:pr-14 pr-4"
                }
              >
                <div className={"pt-2"}>
                  <div className="avatar">
                    <div className="sm:w-9 w-6 rounded-full">
                      <img src={profilePic} />
                    </div>
                  </div>
                </div>
                <div
                  className={"p-4 border border-gray-300 rounded-md w-full "}
                >
                  <h4 className={"text-lg font-semibold"}>{item.username}</h4>
                  <div
                    className="prose prose-lg prose-gray block m-0 max-w-none break-words text-black"
                    dangerouslySetInnerHTML={handleHTML(item.isi_comment)}
                  ></div>
                </div>
              </div>
            );
          })}

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
        </div>
      </div>
    </div>
  );
}

export default Konten;
