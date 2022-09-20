import searchIcon from "../../assets/icon/search.svg";
import omsIcon from "../../assets/icon/grid.svg";
import notifIcon from "../../assets/icon/notif.svg";
import profilePic from "../../assets/profile/profile.png";
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <div className="navbar z-10 fixed bg-base-100 border-b-[.1em] border-b h-[56px] justify-end">
            <div className="navbar-end pr-4">
                <button className="btn btn-ghost btn-circle">
                    <img className="w-5 " src={searchIcon} alt=""/>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <img className="w-6" src={omsIcon} alt=""/>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <img className="w-5" src={notifIcon} alt=""/>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <div className="dropdown dropdown-end ml-2">
                    <label tabIndex={0} className="btn btn-ghost p-0 btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={profilePic} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-1 p-2 drop-shadow-md shadow-lg border-1 rounded-md border-2 border-opacity-2   bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="justify-between" to="profile">
                                Profile
                            </Link>
                        </li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;