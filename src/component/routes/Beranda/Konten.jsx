// All Konten Card Component
import { Link } from "react-router-dom";
import LikeIcon from "../../../assets/icon/Like.jsx";
import CommentICon from "../../../assets/icon/Comment.jsx";

function AllKonten(props) {
  return (
    <div className={"flex flex-row sm:gap-4 gap-2 z-10 flex-wrap"}>
      <Link
        to={"/konten"}
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
              <div className={"sm:text-normal text-sm"}>Arya Stark</div>
              <span className={"sm:hidden "}>&#183;</span>
              <div className="text-sm">30 Februari 2020</div>
            </div>
          </div>
          <div className={""}>
            <h2 className="card-title text-2xl py-1">
              Pencatatan kehamilan mantan ART
            </h2>
            <p className={"line-clamp-2 "}>
              Kehamilan yang dialami mantan ART yang sudah pindah apakah
              tercatat? Pertanyaan ditujukan untuk rumah tangga ini, tidak
              ditanya terkait ART yang telah pindah (bukan ART lagi). Jadi,
              ketika PPL datang ke rumah tangga yang dahulu ada mantan ART
              (karena pindah) yang hamil 2017-2022, maka kehamilan tersebut
              tidak dicakup
            </p>
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
                <span className={"ml-2 text-sm"}> 2 Reactions</span>
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
              <div
                className={
                  props.isGrid
                    ? "hidden"
                    : "md:flex hidden flex-row justify-center items-center"
                }
              >
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #SP2020
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Kehamilan
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Asisten
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to={"/konten"}
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
              <div className={"sm:text-normal text-sm"}>Arya Stark</div>
              <span className={"sm:hidden "}>&#183;</span>
              <div className="text-sm">30 Februari 2020</div>
            </div>
          </div>
          <div className={""}>
            <h2 className="card-title text-2xl py-1">
              Pencatatan kehamilan mantan ART
            </h2>
            <p className={"line-clamp-2 "}>
              Kehamilan yang dialami mantan ART yang sudah pindah apakah
              tercatat? Pertanyaan ditujukan untuk rumah tangga ini, tidak
              ditanya terkait ART yang telah pindah (bukan ART lagi). Jadi,
              ketika PPL datang ke rumah tangga yang dahulu ada mantan ART
              (karena pindah) yang hamil 2017-2022, maka kehamilan tersebut
              tidak dicakup
            </p>
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
                <span className={"ml-2 text-sm"}> 2 Reactions</span>
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
              <div
                className={
                  props.isGrid
                    ? "hidden"
                    : "md:flex hidden flex-row justify-center items-center"
                }
              >
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #SP2020
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Kehamilan
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Asisten
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to={"/konten"}
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
              <div className={"sm:text-normal text-sm"}>Arya Stark</div>
              <span className={"sm:hidden "}>&#183;</span>
              <div className="text-sm">30 Februari 2020</div>
            </div>
          </div>
          <div className={""}>
            <h2 className="card-title text-2xl py-1">
              Pencatatan kehamilan mantan ART
            </h2>
            <p className={"line-clamp-2 "}>
              Kehamilan yang dialami mantan ART yang sudah pindah apakah
              tercatat? Pertanyaan ditujukan untuk rumah tangga ini, tidak
              ditanya terkait ART yang telah pindah (bukan ART lagi). Jadi,
              ketika PPL datang ke rumah tangga yang dahulu ada mantan ART
              (karena pindah) yang hamil 2017-2022, maka kehamilan tersebut
              tidak dicakup
            </p>
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
                <span className={"ml-2 text-sm"}> 2 Reactions</span>
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
              <div
                className={
                  props.isGrid
                    ? "hidden"
                    : "md:flex hidden flex-row justify-center items-center"
                }
              >
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #SP2020
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Kehamilan
                </span>
                <span
                  className={
                    "text-sm hover:border-blue-100 hover:bg-blue-50 transition border border-white py-1.5 px-3 rounded-md "
                  }
                >
                  {" "}
                  #Asisten
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default AllKonten;
