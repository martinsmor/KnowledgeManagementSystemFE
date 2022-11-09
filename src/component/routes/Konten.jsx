import profilePic from "../../assets/profile/profile.png";
import LikeIcon from "../../assets/icon/Like.jsx";
import CommentICon from "../../assets/icon/Comment.jsx";
import Like from "../../assets/icon/Like.jsx";
import ReactQuill from "react-quill";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import video from "../../assets/video.mp4";
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
  const handleHTML = (html) => {
    return { __html: html };
  };
  useEffect(() => {
    httpClient.readContent(id).then((data) => {
      console.log(data.data);
      setData(data.data);
    });
  }, []);

  return (
    <div
      id={props.isfull ? "maincontent" : "maincontent1"}
      className="absolute flex-nowrap content top-[64px] md:p-12 p-0 items-center flex flex-col justify-center"
    >
      <div
        className={
          "bg-white rounded-md min-w-full rounded-b-none border-t border-x border-gray-300"
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
            <div className={"sm:flex hidden flex-row"}>
              <div
                className={
                  "flex transition hover:bg-gray-100 py-1.5 px-3 rounded-md flex-row justify-center items-center"
                }
              >
                <span>
                  <LikeIcon />
                </span>
                <span className={"ml-2 text-sm"}> 2 Reactions</span>
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
                <span className={"ml-2 text-sm"}> 2 Comments</span>
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

            <div
              className="prose prose-lg prose-gray block m-0 max-w-none text-black"
              dangerouslySetInnerHTML={handleHTML(data.isi_konten)}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={
          "bg-white rounded-md rounded-t-none border border-gray-300 shadow-xs"
        }
      >
        <div
          id={"comment"}
          className={"flex flex-col sm:p-12 p-4 pt-4 gap-y-6 "}
        >
          <h1 className={"text-3xl font-semibold"}>Comments ( 3 ) </h1>
          {/*profile with comment*/}
          <div className="flex flex-row gap-x-2 sm:pr-14 pr-4">
            <div className={"pt-2"}>
              <div className="avatar">
                <div className="sm:w-8 w-6 rounded-full">
                  <img src={profilePic} />
                </div>
              </div>
            </div>
            <div className={"p-4 border border-gray-300 rounded-md"}>
              <h4 className={"text-lg font-semibold"}>Arya Stark</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur libero quibusdam vitae. Animi commodi dolores eius
                esse fugit magnam neque nesciunt, non quas quidem quos repellat
                sit tempore veniam voluptatibus! Lorem ipsum do l or sit amet,
                consectetur adipisicing elit. Consequatur libero quibusdam
                vitae. Animi commodi dolores eius esse fugit magnam neque
                nesciunt, non quas quidem quos repellat sit tempore veniam
                voluptatibus! Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Consequatur libero quibusdam vitae. Animi
                commodi dolores eius esse fugit magnam neque nesciunt, non quas
                quidem quos repellat sit tempore veniam voluptatibus!
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse gap-x-2 sm:pl-14 pl-4">
            <div className={"pt-2"}>
              <div className="avatar">
                <div className="sm:w-8 w-6 rounded-full">
                  <img src={profilePic} />
                </div>
              </div>
            </div>
            <div className={"p-4 border border-gray-300 rounded-md"}>
              <h4 className={"text-lg font-semibold"}>Arya Stark</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti dolore exercitationem magni odit voluptatem. Ad aliquam
                commodi dolorem doloremque et expedita, ipsa omnis, optio
                placeat quia tenetur unde velit vero?
              </p>
            </div>
          </div>

          <div className={"px-14"}>
            <ReactQuill
              placeholder={"Tambah Komentar ..."}
              modules={modules}
              value={value}
              onChange={setValue}
            />
            <button className={"btn mt-2 btn-primary rounded-md"}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Konten;
