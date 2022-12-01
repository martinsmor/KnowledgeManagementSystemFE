//Component Top Navbar
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import httpClient from "../../httpClient.js";
import { AuthContext, UserContext } from "../../App.jsx";
import searchIcon from "../../assets/icon/search.svg";
import kmsIcon from "../../assets/oms/kms.png";
import onedriveIcon from "../../assets/oms/onedrive.png";
import onlinetrainingIcon from "../../assets/oms/onlinetraining.png";
import outlookIcon from "../../assets/oms/outlook.png";
import projectmanagementIcon from "../../assets/oms/projectmanagement.png";
import profilePicture from "../../assets/default.jpg";

const HOME_LINK = import.meta.env.VITE_HOME;

// Profile
function Profile() {
  const user = useContext(UserContext);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    // Add Profile Picture to User
    httpClient.getProfile().then((res) => {
      setProfile(res.data);
      user.profile_photo = res.data.profile_photo;
    });
  }, []);

  const handleLogOut = () => {
    httpClient.logOut();
    window.location.href = "/";
  };
  return (
    <div className="dropdown dropdown-end ml-2 ">
      <label
        tabIndex={0}
        className="btn  btn-ghost dark:border dark:border-gray-400 p-0 btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt={profile.nama}
            src={
              profile.profile_photo === ""
                ? profilePicture
                : HOME_LINK + "/profile/" + profile.profile_photo
            }
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu   dark:bg-[#171717] dark:border-zinc-800 dark:text-white menu-compact dropdown-content mt-1 p-2 drop-shadow-md shadow-lg border-1 rounded-md border-2 border-opacity-2   bg-base-100 rounded-box w-52"
      >
        <li className={""}>
          <a
            className="py-3 dark:hover:bg-gray-700"
            href="https://community.bps.go.id/"
          >
            <svg
              className={"w-4 dark:fill-white"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
            </svg>
            Profile
          </a>
        </li>
        <li>
          <button
            onClick={handleLogOut}
            className="py-3  dark:hover:bg-gray-700"
            to="/"
          >
            <svg
              className={"w-4 dark:fill-white"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
            </svg>
            Keluar
          </button>
        </li>
      </ul>
    </div>
  );
}

// Notification
function Notification() {
  return (
    <div
      className="dropdown dropdown-end tooltip tooltip-bottom hidden md:block"
      data-tip="Notification"
    >
      <button tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            className={"w-5 dark:fill-white"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z" />
          </svg>
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
      <ul
        tabIndex={0}
        className="menu w-72 menu-compact dropdown-content mt-1 p-2 drop-shadow-md border rounded-md border-2 border-opacity-2 bg-base-100"
      >
        <li className="h-8 "></li>
        <li className="h-8"></li>
        <li className="h-8"></li>
        <li className="h-8"></li>
        <li className="h-8"></li>
      </ul>
    </div>
  );
}

// Menu OMS
function MenuOms() {
  return (
    <div
      className="dropdown dropdown-end z-50 tooltip tooltip-bottom md:block hidden"
      data-tip="OMS Apps"
    >
      <button
        tabIndex={0}
        className="btn btn-ghost btn-circle dark:hover:bg-gray-700"
      >
        <svg
          className={"w-6 dark:fill-white"}
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 12 12"
        >
          <g>
            <rect width="2" height="2" x="2" y="2" rx=".5" ry=".5" />
            <rect width="2" height="2" x="5" y="2" rx=".5" ry=".5" />
            <rect width="2" height="2" x="8" y="2" rx=".5" ry=".5" />
            <rect width="2" height="2" x="8" y="5" rx=".5" ry=".5" />
            <rect width="2" height="2" x="5" y="5" rx=".5" ry=".5" />
            <rect width="2" height="2" x="2" y="5" rx=".5" ry=".5" />
            <rect width="2" height="2" x="2" y="8" rx=".5" ry=".5" />
            <rect width="2" height="2" x="5" y="8" rx=".5" ry=".5" />
            <rect width="2" height="2" x="8" y="8" rx=".5" ry=".5" />
          </g>
        </svg>
      </button>
      <ul
        tabIndex={0}
        className="menu  dark:bg-[#171717] dark:text-white dark:border-zinc-800 w-64 menu-compact dropdown-content mt-1 p-2 drop-shadow-md border rounded-md border-2 border-opacity-2 bg-base-100"
      >
        <li className="">
          <Link className={" dark:hover:bg-gray-700"} to={"/beranda"} href="#">
            <img className="w-8" src={kmsIcon} alt="" />
            Knowledge Management
          </Link>
        </li>
        <li className="">
          <a className={" dark:hover:bg-gray-700"} href="#">
            <img className="w-8" src={projectmanagementIcon} alt="" />
            Project Management
          </a>
        </li>
        <li className="">
          <a className={" dark:hover:bg-gray-700"} href="#">
            <img className="w-8" src={onlinetrainingIcon} alt="" />
            Online Training
          </a>
        </li>
        <li className="">
          <a className={" dark:hover:bg-gray-700"} href="#">
            <img className="w-8" src={onedriveIcon} alt="" />
            OneDrive
          </a>
        </li>
        <li className="">
          <a className={" dark:hover:bg-gray-700"} href="#">
            <img className="w-8" src={outlookIcon} alt="" />
            Outlook
          </a>
        </li>
      </ul>
    </div>
  );
}

function Theme() {
  const handleTheme = () => {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      Cookies.set("theme", "light");
      document.querySelector(".ql-editor").classList.remove("dark");
      document.querySelector(".ql-toolbar").classList.remove("dark");
    } else {
      html.classList.add("dark");
      Cookies.set("theme", "dark");
      document.querySelector(".ql-editor").classList.add("dark");
      document.querySelector(".ql-toolbar").classList.add("dark");
    }
  };
  return (
    <div
      className={
        "dropdown dropdown-end z-50 tooltip tooltip-bottom md:block hidden"
      }
      data-tip="Theme"
    >
      <label className="btn btn-circle dark:hover:bg-gray-700  btn-ghost swap swap-rotate">
        <input type="checkbox" onClick={handleTheme} />
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
      </label>
    </div>
  );
}

// Search Bar
function SearchBar() {
  return (
    <button className="btn btn-ghost btn-circle md:block hidden">
      <img className="w-5 " src={searchIcon} alt="" />
    </button>
  );
}

// Top Navbar
function Navbar(props) {
  const user = useContext(UserContext);
  const isLogin = useContext(AuthContext);

  const handleClick = () => {
    props.onclick();
  };

  return (
    <div
      id="navbar"
      className="navbar sm:z-50 z-40 drop-shadow-sm fixed bg-base-100 dark:bg-[#171717] border-b justify-end dark:border-b-zinc-800 "
    >
      <div className="navbar-start ml-1.5">
        <div className="flex items-center absolute ">
          <button
            onClick={handleClick}
            className="btn btn-circle btn-outline border-none dark:hover:bg-gray-700 hover:bg-base-300 mr-2.5 "
          >
            <svg
              className={"w-4 dark:fill-white"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>

          <Link className="dark:text-white" to="/beranda">
            Knowledge Management
          </Link>
        </div>
      </div>
      <div className="navbar-end sm:pr-4 pr-2">
        {/*<Theme />*/}

        {isLogin ? (
          <>
            <Theme />
            <MenuOms />
            {/*<Notification />*/}
            <Profile />
          </>
        ) : (
          <Link
            to={"/auth"}
            className="z-50 btn btn-primary rounded h-[40px] my-[5px] w-fit btn-sm  capitalize w-[90px] hover:underline transition"
          >
            Masuk
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
