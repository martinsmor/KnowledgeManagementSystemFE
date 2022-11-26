// Component: Sidebar
// Terbagi menjadi 2 code, yaitu sidebar full dan sidebar mini. saat di mobile sidebar  mini akan hilang
import barIcon from "../../assets/icon/bar.svg";
import homeIcon from "../../assets/icon/home.svg";
import settingIcon from "../../assets/icon/setting.svg";
import mycontentIcon from "../../assets/icon/mycontent.svg";
import contentsettingIcon from "../../assets/icon/contentsetting.svg";
import categoryIcon from "../../assets/icon/category.svg";
import tambahIcon from "../../assets/icon/tambah.svg";

// Router
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext, UserContext, RoleContext } from "../../App.jsx";

function useOutsideAlerter(ref, handler) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (window.innerWidth < 640) {
          handler(event);
          console.log("You clicked outside of me!");
        }
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}

function Sidebar(props) {
  const user = useContext(UserContext);
  const isLogin = useContext(AuthContext);
  const role = user ? user.role : null;
  //role if user is exist
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => props.onclick());
  const handleClick = () => {
    if (window.innerWidth < 768) {
      props.onclick();
      // console.log("click");
    }
  };

  // Full Sidebar
  if (props.isfull) {
    return (
      <div className="flex flex-col sm:w-[270px] w-screen  sm:z-30 z-50 items-start fixed">
        {/*Sidebar*/}
        <div className="top-sidebar  dark:bg-[#171717] dark:text-white dark:border-none bg-white flex items-center sm:w-full w-[290px] pl-3.5 p-3 py-2 h-[68px] border-b">
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
            Knowledge Management
          </Link>
        </div>
        <div
          ref={wrapperRef}
          id="sidebar"
          className=" sm:w-full bg-[#1D4ED8] text-white  dark:bg-[#1c1c1c]   w-[280px] p-3 h-screen shadow-lg  overflow-y-auto "
        >
          <nav>
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
              {isLogin ? (
                <>
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
                  {
                    //  if role admin and approval
                    role === "Administrator" || role === "Approval" ? (
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
                          // onClick={handleClick}
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
                        {/*<NavLink*/}
                        {/*  // onClick={handleClick}*/}
                        {/*  className="p-2 my-0.5 pl-14 py-3 hover:bg-base-200 hover:bg-opacity-40 w-full rounded  duration-100"*/}
                        {/*  style={({ isActive }) =>*/}
                        {/*    isActive*/}
                        {/*      ? {*/}
                        {/*          color: "#fff",*/}
                        {/*          background: "#418afd",*/}
                        {/*        }*/}
                        {/*      : null*/}
                        {/*  }*/}
                        {/*  to="/"*/}
                        {/*>*/}
                        {/*  <span className="block max-h-[24px] ml-1 overflow-hidden">*/}
                        {/*    Menu Akses*/}
                        {/*  </span>*/}
                        {/*</NavLink>*/}
                        {/*<NavLink*/}
                        {/*  onClick={handleClick}*/}
                        {/*  className="p-2 my-0.5 pl-14 py-3 hover:bg-base-200 hover:bg-opacity-40 w-full rounded  duration-100"*/}
                        {/*  style={({ isActive }) =>*/}
                        {/*    isActive*/}
                        {/*      ? {*/}
                        {/*          color: "#fff",*/}
                        {/*          background: "#418afd",*/}
                        {/*        }*/}
                        {/*      : null*/}
                        {/*  }*/}
                        {/*  to="/"*/}
                        {/*>*/}
                        {/*  <span className="block max-h-[24px] ml-1 overflow-hidden">*/}
                        {/*    Grup Akses*/}
                        {/*  </span>*/}
                        {/*</NavLink>*/}
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
                            Unit Kerja
                          </span>
                        </NavLink>
                      </ul>
                    </li>
                  ) : null}

                  <li className="my-2  min-h-[30px]"></li>
                </>
              ) : null}
            </ul>
          </nav>
        </div>
      </div>
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
            Knowledge Management
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
