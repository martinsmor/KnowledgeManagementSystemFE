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
        className="menu menu-compact dropdown-content mt-1 p-2 drop-shadow-md shadow-lg border-1 rounded-md border-2 border-opacity-2   bg-base-100 rounded-box w-72"
      >
        <li className="h-8"></li>
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
        className="menu dd w-64 menu-compact dropdown-content mt-1 p-2 drop-shadow-md shadow-lg border-1 rounded-md border-2 border-opacity-2   bg-base-100 rounded-box"
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

// Top Navbar
function Navbar(props) {
  const handleClick = () => {
    props.onclick();
  };

  return (
    <div
      id="navbar"
      className="navbar z-50 drop-shadow-sm fixed bg-base-100 border-b-[.1em] justify-end "
    >
      <div className="navbar-start ml-1.5">
        <div className="flex items-center absolute ">
          {props.isfull && window.innerWidth < 640 ? (
            <button
              disabled
              onClick={handleClick}
              className="btn btn-circle btn-outline border-none hover:bg-base-300 mr-2.5 "
            >
              <img className="w-4" src={barIcon} alt="" />
            </button>
          ) : (
            <button
              onClick={handleClick}
              className="btn btn-circle btn-outline border-none hover:bg-base-300 mr-2.5 "
            >
              <img className="w-4" src={barIcon} alt="" />
            </button>
          )}

          <Link className="" to="/beranda">
            Knowledge Management
          </Link>
        </div>
      </div>
      <div className="navbar-end sm:pr-4 pr-2">
        <MenuOms />
        <Notification />
        <Profile />
      </div>
    </div>
  );
}

export default Navbar;
