// Component: Sidebar
import barIcon from "../../assets/icon/bar.svg";
import homeIcon from "../../assets/icon/home.svg";
import settingIcon from "../../assets/icon/setting.svg";
import mycontentIcon from "../../assets/icon/mycontent.svg";
import contentsettingIcon from "../../assets/icon/contentsetting.svg";
import categoryIcon from "../../assets/icon/category.svg";
import tambahIcon from "../../assets/icon/tambah.svg";

// Router
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function useOutsideAlerter(ref, handler) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (window.innerWidth < 640) {
          handler(event);
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
      <div className="flex flex-col  sm:w-[270px] w-screen  sm:z-30 z-50 items-start fixed">
        {/*Sidebar*/}
        <div className="top-sidebar bg-white flex items-center sm:w-full w-[290px] pl-3.5 p-3 py-2 h-[68px] border-b">
          <button className="btn btn-circle btn-outline border-none hover:bg-base-300 mr-2.5 ">
            <img className="w-4" src={barIcon} alt="" />
          </button>

          <Link className="" to="/beranda">
            Knowledge Management
          </Link>
        </div>
        <div
          ref={wrapperRef}
          id="sidebar"
          className=" sm:w-full  w-[280px] p-3 h-screen shadow-lg  overflow-y-auto "
        >
          <nav>
            <ul className="overflow-hidden">
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
                  <img className="w-5  ml-1" src={contentsettingIcon} alt="" />
                  <span className="ml-6   overflow-hidden  max-h-[24px] ">
                    Approval Konten
                  </span>
                </NavLink>
              </li>

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
                  <Link
                    // onClick={handleClick}
                    className="p-2 my-0.5 pl-14 py-3 hover:bg-base-200 hover:bg-opacity-40 w-full rounded  duration-100"
                    to="pengaturan/pengguna"
                  >
                    <span className="block max-h-[24px] ml-1 overflow-hidden">
                      Pengguna
                    </span>
                  </Link>
                  <Link
                    // onClick={handleClick}
                    className="p-2 my-0.5 pl-14 py-3 hover:bg-base-200 hover:bg-opacity-40 w-full rounded  duration-100"
                    to="/"
                  >
                    <span className="block max-h-[24px] ml-1 overflow-hidden">
                      Menu Akses
                    </span>
                  </Link>
                  <Link
                    onClick={handleClick}
                    className="p-2 my-0.5 pl-14 py-3 hover:bg-base-200 hover:bg-opacity-40 w-full rounded  duration-100"
                    to="/"
                  >
                    <span className="block max-h-[24px] ml-1 overflow-hidden">
                      Grup Akses
                    </span>
                  </Link>
                  <Link
                    onClick={handleClick}
                    className="p-2 my-0.5 pl-14 py-3 hover:bg-base-200 hover:bg-opacity-40 w-full rounded  duration-100"
                    to="/"
                  >
                    <span className="block max-h-[24px] ml-1 overflow-hidden">
                      Kategori
                    </span>
                  </Link>
                  <Link
                    onClick={handleClick}
                    className="p-2 my-0.5 pl-14 py-3 hover:bg-base-200 hover:bg-opacity-40 w-full rounded  duration-100"
                    to="/"
                  >
                    <span className="block max-h-[24px] ml-1 overflow-hidden">
                      Unit Kerja
                    </span>
                  </Link>
                </ul>
              </li>
              <li className="my-2  min-h-[30px]"></li>
            </ul>
          </nav>
        </div>
      </div>
    );
    //    Mini Sidebar
  } else {
    return (
      <div className="flex flex-col z-50  fixed ">
        <div className="top-sidebar bg-white flex items-center sm:w-full w-[290px] pl-3.5 p-3 py-2 h-[68px] border-b-[.1em] border-b ">
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
          className="md:w-[76px] w-0 h-screen md:p-3 p-0 shadow-lg "
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
                  <img className="w-5 ml-4" src={contentsettingIcon} alt="" />
                  <span className="txtsidebar">Approval Konten</span>
                  <span className="tooltiptext z-50">Approval Konten</span>
                </NavLink>
              </li>
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
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
