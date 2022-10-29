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

function Sidebar(props) {
  const handleClick = () => {
    if (window.innerWidth < 768) {
      props.onclick();
    }
  };

  // Full Sidebar
  if (props.isfull) {
    return (
      <div className="flex flex-col w-[270px] z-30 items-start fixed">
        {/*Sidebar*/}
        <div className="flex items-center w-full p-3 py-2 h-[64px] border-b-[.1em] border-b  "></div>
        <div
          id="sidebar"
          className=" w-full p-3 h-screen shadow-lg  overflow-y-auto  border-r-2 border-r-base-200"
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
                          background: "#7600dc",
                        }
                      : null
                  }
                  className={
                    "flex  min-h-[48px] overflow-hidden active:bg-blue-300 flex-column hover:bg-base-200 hover:bg-opacity-40 p-3 items-center rounded ease-in-out transition duration-100"
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
                          background: "#7600dc",
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
                          background: "#7600dc",
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
                <Link
                  to={"/approval"}
                  className="flex min-h-[48px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-200 hover:bg-opacity-40 p-3 items-center rounded ease-in-out transition  duration-100"
                >
                  <img className="w-5  ml-1" src={contentsettingIcon} alt="" />
                  <span className="ml-6   overflow-hidden  max-h-[24px] ">
                    Approval Konten
                  </span>
                </Link>
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
                    onClick={handleClick}
                    className="p-2 my-0.5 pl-14 py-3 hover:bg-base-200 hover:bg-opacity-40 w-full rounded  duration-100"
                    to="Pengguna"
                  >
                    <span className="block max-h-[24px] ml-1 overflow-hidden">
                      Pengguna
                    </span>
                  </Link>
                  <Link
                    onClick={handleClick}
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
        <div className="flex items-center p-3 py-2 h-[64px] border-b-[.1em]  "></div>

        <div
          id="sidebar"
          className="md:w-[76px] w-0 h-screen md:p-3 p-0 shadow-lg border-r-2 border-r-base-200"
        >
          <nav>
            <ul>
              <li className="my-2 tooltip1">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#fff",
                          background: "#7600dc",
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
                          background: "#7600dc",
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
                          background: "#7600dc",
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
                <Link
                  to={"/approval"}
                  className="hover:bg-opacity-40  flex  overflow-hidden  active:bg-blue-200 flex-column hover:bg-base-300 py-3 items-center rounded ease-in-out transition  duration-100"
                >
                  <img className="w-5 ml-4" src={contentsettingIcon} alt="" />
                  <span className="txtsidebar">Approval Konten</span>
                  <span className="tooltiptext z-50">Approval Konten</span>
                </Link>
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
