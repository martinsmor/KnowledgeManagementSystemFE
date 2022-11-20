//Component Top Navbar

import searchIcon from "../../assets/icon/search.svg";
import omsIcon from "../../assets/icon/grid.svg";
import notifIcon from "../../assets/icon/notif.svg";
import profilePic from "../../assets/profile/profile.png";
import { Link } from "react-router-dom";
import kmsIcon from "../../assets/oms/kms.png";
import onedriveIcon from "../../assets/oms/onedrive.png";
import onlinetrainingIcon from "../../assets/oms/onlinetraining.png";
import outlookIcon from "../../assets/oms/outlook.png";
import projectmanagementIcon from "../../assets/oms/projectmanagement.png";
import offIcon from "../../assets/icon/off.svg";
import userIcon from "../../assets/icon/user.svg";
import barIcon from "../../assets/icon/bar.svg";
import { useRef } from "react";

// Profile
function Profile() {
  return (
    <div className="dropdown dropdown-end ml-2 ">
      <label tabIndex={0} className="btn btn-ghost p-0 btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.pravatar.cc/300" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-1 p-2 drop-shadow-md shadow-lg border-1 rounded-md border-2 border-opacity-2   bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="py-3" href="https://community.bps.go.id/">
            <img className="w-4" src={userIcon} alt="" />
            Profile
          </a>
        </li>
        <li>
          <Link className="py-3" to="/signin">
            <img className="w-4" src={offIcon} alt="" />
            Keluar
          </Link>
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
          <img className="w-5" src={notifIcon} alt="" />
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
      <button tabIndex={0} className="btn btn-ghost btn-circle">
        <img className="w-6" src={omsIcon} alt="" />
      </button>
      <ul
        tabIndex={0}
        className="menu w-64 menu-compact dropdown-content mt-1 p-2 drop-shadow-md border rounded-md border-2 border-opacity-2 bg-base-100"
      >
        <li className="">
          <Link to={"/beranda"} href="#">
            <img className="w-8" src={kmsIcon} alt="" />
            Knowledge Management
          </Link>
        </li>
        <li className="">
          <a href="#">
            <img className="w-8" src={projectmanagementIcon} alt="" />
            Project Management
          </a>
        </li>
        <li className="">
          <a href="#">
            <img className="w-8" src={onlinetrainingIcon} alt="" />
            Online Training
          </a>
        </li>
        <li className="">
          <a href="#">
            <img className="w-8" src={onedriveIcon} alt="" />
            OneDrive
          </a>
        </li>
        <li className="">
          <a href="#">
            <img className="w-8" src={outlookIcon} alt="" />
            Outlook
          </a>
        </li>
      </ul>
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

function Theme() {
  return (
    <label className="swap swap-rotate">
      <input type="checkbox" />

      <svg
        className="swap-on fill-current w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>

      <svg
        className="swap-off fill-current w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>
  );
}

// Top Navbar
function Navbar(props) {
  const handleClick = () => {
    props.onclick();
  };

  return (
    <div
      id="navbar"
      className="navbar sm:z-50 z-40 drop-shadow-sm fixed bg-base-100 border-b-[.1em] justify-end "
    >
      <div className="navbar-start ml-1.5">
        <div className="flex items-center absolute ">
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
      </div>
      <div className="navbar-end sm:pr-4 pr-2">
        <Theme />
        <MenuOms />
        <Notification />
        <Profile />
      </div>
    </div>
  );
}

export default Navbar;
