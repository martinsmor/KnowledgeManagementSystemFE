// Component: Sidebar
// Terbagi menjadi 2 code, yaitu sidebar full dan sidebar mini.
// saat di mobile sidebar  mini akan hilang
// Agak kacau, mungkin bisa di refactor lagi
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext, UserContext, RoleContext } from "../../App.jsx";
import barIcon from "../../assets/icon/bar.svg";
import homeIcon from "../../assets/icon/home.svg";
import settingIcon from "../../assets/icon/setting.svg";
import mycontentIcon from "../../assets/icon/mycontent.svg";
import contentsettingIcon from "../../assets/icon/contentsetting.svg";
import tambahIcon from "../../assets/icon/tambah.svg";
import Cookies from "js-cookie";

const handleTheme = () => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    Cookies.set("theme", "light");
  } else {
    html.classList.add("dark");
    Cookies.set("theme", "dark");
  }
};

//Fungsi Untuk Mendeteksi Click Luar Komponen
function useOutsideAlerter(ref, handler) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (window.innerWidth < 640) {
          handler(event);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}

function Sidebar(props) {
  const [theme, setTheme] = useState(Cookies.get("theme") || "light");
  const user = useContext(UserContext);
  const isLogin = useContext(AuthContext);
  const role = user ? user.role : null;
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => props.onclick());
  const handleClick = () => {
    if (window.innerWidth < 768) {
      props.onclick();
    }
  };

  // Full Sidebar
  if (props.isfull) {
    return (
      <div className="flex flex-col sm:w-[270px] w-screen  sm:z-30 z-50 items-start fixed">
        {/*Sidebar*/}
        <div className="top-sidebar dark:bg-[#171717] dark:text-white dark:border-none bg-white flex items-center sm:w-full w-[290px] pl-3.5 p-3 py-2 h-[67px] border-b">
          <button
            disabled
            className="btn btn-circle btn-outline border-none hover:bg-base-300 mr-2.5 "
          >
            <svg
              className={"w-4 dark:fill-white"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>

          <Link className="" to="/beranda">
            KMS
          </Link>
        </div>
        <div
          ref={wrapperRef}
          id="sidebar"
          className=" sm:w-full bg-[#3e65e6] text-green  dark:bg-[#070707]   w-[280px] p-3 h-screen shadow-lg  overflow-y-auto "
        >
          <nav className={"flex flex-col justify-between h-[85%]"}>
            <ul className="overflow-hidden   ">
              <li onClick={handleClick} className="my-2 ">
                <NavLink
                  to="/beranda"
                  style={({ isActive }) =>
                    isActive
                      ? {
                        color: "#fff",
                        background: "#418afd",
                      }
                      : null
                  }
                  className={
                    "flex  min-h-[48px] overflow-hidden active:bg-blue-300 flex-column hover:bg-blue-200 hover:bg-opacity-40 p-3 items-center rounded ease-in-out transition duration-100"
                  }
                  href=""
                >
                  <img className="w-5  ml-1" src={homeIcon} alt="" />
                  <span className="ml-6  overflow-hidden  max-h-[24px] transition ">
                    Beranda
                  </span>
                </NavLink>
              </li>
              {role === "Content Creator" || role === "Approval" || role === "Administrator" ? (
                <li onClick={handleClick} className="my-2">
                  <NavLink
                    to="buatkonten"
                    style={({ isActive }) =>
                      isActive
                        ? {
                          color: "#fff",
                          background: "#418afd",
                        }
                        : null
                    }
                    className="flex  min-h-[48px] overflow-hidden active:bg-blue-300 flex-column hover:bg-base-200 hover:bg-opacity-40 p-3 items-center rounded ease-in-out transition  duration-100"
                  >
                    <img className="w-5  ml-1" src={tambahIcon} alt="" />
                    <span className="ml-6  overflow-hidden  max-h-[24px] transition ">
                      Buat Konten
                    </span>
                  </NavLink>
                </li>
              ) : null
              }
              {role === "Content Creator" || role === "Approval" || role === "Administrator" ? (
                <li onClick={handleClick} className="my-2">
                  <NavLink
                    to="kontensaya"
                    style={({ isActive }) =>
                      isActive
                        ? {
                          color: "#fff",
                          background: "#418afd",
                        }
                        : null
                    }
                    className="flex min-h-[48px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-200 hover:bg-opacity-40 p-3 items-center rounded ease-in-out transition  duration-100"
                    href=""
                  >
                    <img className="w-4  ml-1.5" src={mycontentIcon} alt="" />
                    <span className="ml-6 pl-0.5  overflow-hidden  max-h-[24px] ">
                      Konten Saya
                    </span>
                  </NavLink>
                </li>
              ) : null
              }
              {role === "Administrator" || role === "Approval" ? (
                <li onClick={handleClick} className="my-2">
                  <NavLink
                    to={"/pengaturan/approval"}
                    style={({ isActive }) =>
                      isActive
                        ? {
                          color: "#fff",
                          background: "#418afd",
                        }
                        : null
                    }
                    className="flex min-h-[48px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-200 hover:bg-opacity-40 p-3 items-center rounded ease-in-out transition  duration-100"
                  >
                    <img
                      className="w-5  ml-1"
                      src={contentsettingIcon}
                      alt=""
                    />
                    <span className="ml-6   overflow-hidden  max-h-[24px] ">
                      Approval Konten
                    </span>
                  </NavLink>
                </li>
              ) : null
              }
              {role === "Administrator" ? (
                <li className="collapse collapse-arrow ">
                  <input type="checkbox" className="peer" id="collapse" />
                  <div
                    id="collapse-head"
                    className="flex collapse-title  h-[20px] peer-hover:bg-base-300   overflow-hidden active:bg-blue-300  peer-hover:bg-opacity-40 flex-column p-3 py-1 items-center rounded ease-in-out transition  duration-100"
                    href=""
                  >
                    <img className="w-5  ml-1" src={settingIcon} alt="" />
                    <span className="ml-6 overflow-hidden  max-h-[24px] ">
                      Pengaturan
                    </span>
                  </div>
                  <ul className="collapse-content flex flex-col p-0 pb-0 transition-all duration-100 ease-linear ">
                    <NavLink
                      onClick={handleClick}
                      className="p-2 my-0.5 pl-14 py-3 hover:bg-base-200 hover:bg-opacity-40 w-full rounded  duration-100"
                      style={({ isActive }) =>
                        isActive
                          ? {
                            color: "#fff",
                            background: "#418afd",
                          }
                          : null
                      }
                      to="pengaturan/pengguna"
                    >
                      <span className="block max-h-[24px] ml-1 overflow-hidden">
                        Pengguna
                      </span>
                    </NavLink>
                    <NavLink
                      onClick={handleClick}
                      className="p-2 my-0.5 pl-14 py-3 hover:bg-base-200 hover:bg-opacity-40 w-full rounded  duration-100"
                      style={({ isActive }) =>
                        isActive
                          ? {
                            color: "#fff",
                            background: "#418afd",
                          }
                          : null
                      }
                      to="/pengaturan/kategori"
                    >
                      <span className="block max-h-[24px] ml-1 overflow-hidden">
                        Kategori
                      </span>
                    </NavLink>
                    <NavLink
                      onClick={handleClick}
                      className="p-2 my-0.5 pl-14 py-3 hover:bg-base-200 hover:bg-opacity-40 w-full rounded  duration-100"
                      style={({ isActive }) =>
                        isActive
                          ? {
                            color: "#fff",
                            background: "#418afd",
                          }
                          : null
                      }
                      to="/pengaturan/unitkerja"
                    >
                      <span className="block max-h-[24px] ml-1 overflow-hidden">
                        UnitKerja
                      </span>
                    </NavLink>
                  </ul>
                </li>
              ) : null}

              <li className="my-2  min-h-[30px]"></li>
            </ul>
            <label className="btn sm:hidden ml-2  btn-circle dark:hover:bg-gray-700  btn-ghost swap swap-rotate">
              <input type="checkbox" onClick={handleTheme} />
              {theme !== "light" ? (
                <>
                  <svg
                    className="swap-on fill-current  dark:fill-white  w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                  <svg
                    className="swap-off fill-current dark:fill-white w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    className="swap-off fill-current  dark:fill-white  w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                  <svg
                    className="swap-on fill-current dark:fill-white w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                </>
              )}
            </label>
          </nav>
        </div>
      </div >
    );
    //    Mini Sidebar
  } else {
    return (
      <div className="flex w-0 sm:w-fit  flex-col z-20  fixed ">
        <div className="top-sidebar  dark:bg-[#1c1c1c]  bg-white flex dark:border-b-zinc-800  items-center sm:w-0 w-[290px] pl-3.5 p-3 py-2 h-[68px] border-b-[.1em] border-b ">
          <button
            onClick={handleClick}
            className="btn btn-circle btn-outline border-none hover:bg-base-300 mr-2.5 "
          >
            <img className="w-4" src={barIcon} alt="" />
          </button>

          <Link className="" to="/beranda">
            KMS
          </Link>
        </div>
        <div
          id="sidebar"
          className="md:w-[76px]  bg-[#1D4ED8]  dark:bg-[#1c1c1c]   text-white   w-0 h-screen md:p-3 p-0 shadow-lg "
        >
          <nav>
            <ul>
              <li className="my-2 tooltip1">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                        color: "#fff",
                        background: "#418afd",
                      }
                      : null
                  }
                  to="/beranda"
                  className="flex hovhov overflow-hidden hover:bg-opacity-40  active:bg-blue-200 flex-column hover:bg-base-300 py-3 items-center rounded ease-in-out transition  duration-100"
                  href=""
                >
                  <img className="w-5 ml-4" src={homeIcon} alt="" />
                  <span className="txtsidebar">Beranda</span>
                  <span className="tooltiptext">Beranda</span>
                </NavLink>
              </li>
              <li className="my-2 tooltip1">
                <NavLink
                  to="buatkonten"
                  style={({ isActive }) =>
                    isActive
                      ? {
                        color: "#fff",
                        background: "#418afd",
                      }
                      : null
                  }
                  className="flex  overflow-hidden hover:bg-opacity-40  active:bg-blue-200 flex-column hover:bg-base-300 py-3 items-center rounded ease-in-out transition  duration-100"
                >
                  <img className="w-5 ml-4" src={tambahIcon} alt="" />
                  <span className="txtsidebar">Buat Konten</span>
                  <span className="tooltiptext z-50">Buat Konten</span>
                </NavLink>
              </li>
              {isLogin ? (
                <>
                  <li className="my-2 tooltip1">
                    <NavLink
                      style={({ isActive }) =>
                        isActive
                          ? {
                            color: "#fff",
                            background: "#418afd",
                          }
                          : null
                      }
                      to="kontensaya"
                      className="flex overflow-hidden hover:bg-opacity-40  active:bg-blue-200 flex-column hover:bg-base-300 py-3  items-center rounded ease-in-out transition  duration-100"
                      href=""
                    >
                      <img
                        className="w-4 ml-[1.125rem]"
                        src={mycontentIcon}
                        alt=""
                      />
                      <span className="txtsidebar pl-0.5">Konten Saya</span>
                      <span className="tooltiptext z-50">Konten Saya</span>
                    </NavLink>
                  </li>
                  {role === "Administrator" || role === "Approval" ? (
                    <li className="my-2 tooltip1">
                      <NavLink
                        style={({ isActive }) =>
                          isActive
                            ? {
                              color: "#fff",
                              background: "#418afd",
                            }
                            : null
                        }
                        to={"/pengaturan/approval"}
                        className="hover:bg-opacity-40  flex  overflow-hidden  active:bg-blue-200 flex-column hover:bg-base-300 py-3 items-center rounded ease-in-out transition  duration-100"
                      >
                        <img
                          className="w-5 ml-4"
                          src={contentsettingIcon}
                          alt=""
                        />
                        <span className="txtsidebar">Approval Konten</span>
                        <span className="tooltiptext z-50">
                          Approval Konten
                        </span>
                      </NavLink>
                    </li>
                  ) : null}

                  {role === "Administrator" ? (
                    <li className="collapse collapse-close overflow-hidden cursor-pointer">
                      <input
                        onClick={props.onclick}
                        type="checkbox"
                        className="peer  cursor-pointer"
                        id="collapse"
                      />
                      <div
                        id="collapse-head"
                        className="flex collapse-title  h-[20px] peer-hover:bg-base-200 peer-hover:bg-opacity-40   overflow-hidden active:bg-blue-300 flex-column hover:bg-base-300 p-3 py-1 items-center rounded ease-in-out transition  duration-100"
                        href=""
                      >
                        <img className="w-5  ml-1" src={settingIcon} alt="" />
                        <span className="ml-6 overflow-hidden  max-h-[24px] ">
                          Pengaturan
                        </span>
                      </div>
                    </li>
                  ) : null}
                </>
              ) : null}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
