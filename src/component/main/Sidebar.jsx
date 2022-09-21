// Burger Bar Icon
import barIcon from "../../assets/icon/bar.svg";
// Home Icon
import homeIcon from "../../assets/icon/home.svg";
import settingIcon from "../../assets/icon/setting.svg";
import mycontentIcon from "../../assets/icon/mycontent.svg";
import contentsettingIcon from "../../assets/icon/contentsetting.svg";
import categoryIcon from "../../assets/icon/category.svg";
import tambahIcon from "../../assets/icon/tambah.svg";

// Router
import {Link} from "react-router-dom";

function Sidebar(props) {
    // Full Sidebar
    if (props.isfull) {
        return (
            <div className="flex flex-col w-[270px] z-50 items-start fixed">
                {/*Sidebar*/}
                <div className="flex items-center w-full p-3 py-2 h-[64px] border-b-[.1em] border-b  ">
                    {/*Header Sidebar*/}
                    <div className="flex py-2 px-0.5 items-center z-40 ">
                        <button onClick={props.onclick}
                                className="btn btn-circle btn-outline border-none hover:bg-base-300 mr-2.5 ">
                            <img className="w-4 " src={barIcon} alt=""/>
                        </button>
                        <Link className="hidden sm:block"  to="/">Knowledge Management</Link>
                    </div>
                </div>
                <div id="sidebar" className=" w-full p-3 h-screen shadow-lg z-20 overflow-y-auto">
                    <div>
                        <ul className="overflow-hidden">
                            <li className="my-2"><a
                                className="flex  min-h-[48px] overflow-hidden active:bg-blue-300 flex-column hover:bg-base-300 p-3 items-center rounded-md ease-in-out transition "
                                href="">
                                <img className="w-5  ml-1" src={homeIcon} alt=""/>
                                <span className="ml-6  overflow-hidden  max-h-[24px] transition ">Beranda</span>
                            </a></li>
                            <li className="my-2"><a
                                className="flex  min-h-[48px] overflow-hidden active:bg-blue-300 flex-column hover:bg-base-300 p-3 items-center rounded-md ease-in-out transition "
                                href="">
                                <img className="w-5  ml-1" src={tambahIcon} alt=""/>
                                <span className="ml-6  overflow-hidden  max-h-[24px] transition ">Buat Konten</span>
                            </a></li>
                            <li className="my-2"><a
                                className="flex min-h-[48px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-300 p-3 items-center rounded-md ease-in-out transition "
                                href="">
                                <img className="w-4  ml-1.5" src={mycontentIcon} alt=""/>
                                <span className="ml-6   overflow-hidden  max-h-[24px] ">Konten Saya</span>
                            </a></li>
                            <li className="my-2"><a
                                className="flex min-h-[48px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-300 p-3 items-center rounded-md ease-in-out transition "
                                href="">
                                <img className="w-5  ml-1" src={contentsettingIcon} alt=""/>
                                <span className="ml-6   overflow-hidden  max-h-[24px] ">Pengaturan Konten</span>
                            </a></li>
                            <li className="my-2"><a
                                className="flex  min-h-[48px] overflow-hidden active:bg-blue-300 flex-column hover:bg-base-300 p-3 items-center rounded-md ease-in-out transition "
                                href="">
                                <img className="w-5  ml-1" src={categoryIcon} alt=""/>
                                <span className="ml-6  overflow-hidden  max-h-[24px] transition ">Kategori Subdit</span>
                            </a></li>
                                <li className="collapse collapse-arrow ">
                                <input type="checkbox" className="peer" id="collapse"/>
                                    <div id="collapse-head"
                                        className="flex collapse-title  h-[20px] peer-hover:bg-base-300   overflow-hidden active:bg-blue-300 flex-column hover:bg-base-300 p-3 py-1 items-center rounded-md ease-in-out transition "
                                        href="">
                                        <img className="w-5  ml-1" src={settingIcon} alt=""/>
                                        <span className="ml-6 overflow-hidden  max-h-[24px] ">Pengaturan</span>
                                    </div>
                                <div className="collapse-content flex flex-col p-0 pb-0 ">
                                    <Link className="p-2 my-0.5 pl-16 hover:bg-base-300 w-full rounded-lg" to="/"><span >Pengguna</span></Link>
                                    <Link className="p-2 my-0.5 pl-16 hover:bg-base-300 w-full rounded-lg" to="/"><span >Menu Akses</span></Link>
                                    <Link className="p-2 my-0.5 pl-16 hover:bg-base-300 w-full rounded-lg" to="/"><span >Grup Akses</span></Link>
                                    <Link className="p-2 my-0.5 pl-16 hover:bg-base-300 w-full rounded-lg" to="/"><span >Kategori</span></Link>
                                    <Link className="p-2 my-0.5 pl-16 hover:bg-base-300 w-full rounded-lg" to="/"><span >Unit Kerja</span></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    //    Mini Sidebar
    } else {
        return(
            <div className="flex flex-col z-50 w-[270px] items-start fixed">
                <div className="flex items-center w-full p-3 py-2 h-[64px] border-b-[.1em] border-b  ">
                    <div className="flex py-2 px-0.5 items-center ">
                        <button onClick={props.onclick} className="btn  btn-circle btn-outline border-none hover:bg-base-300 mr-2.5">
                            <img className="w-4" src={barIcon} alt=""/>
                        </button>
                        <Link to="/" className="hidden sm:block" href="#">Knowledge Management</Link>
                    </div>
                </div>

                <div id="sidebar" className="hidden sm:block w-[76px] z-50  p-3 h-screen shadow-lg  z-20 ">
                    <div>
                        <ul >
                            <li className="my-2"><a className="flex  overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-300 py-3 items-center rounded-md ease-in-out transition " href="">
                                <img className="w-5 ml-4" src={homeIcon} alt=""/>
                                <span className="txtsidebar">Beranda</span>
                            </a></li>
                            <li className="my-2"><a className="flex  overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-300 py-3 items-center rounded-md ease-in-out transition " href="">
                                <img className="w-5 ml-4" src={tambahIcon} alt=""/>
                                <span className="txtsidebar">Buat Konten</span>
                            </a></li>
                            <li className="my-2"><a className="flex overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-300 py-3  items-center rounded-md ease-in-out transition " href="">
                                <img className="w-4 ml-[1.125rem]" src={mycontentIcon} alt=""/>
                                <span className="txtsidebar">Konten Saya</span>
                            </a></li>
                            <li className="my-2"><a className="flex  overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-300 py-3 items-center rounded-md ease-in-out transition " href="">
                                <img className="w-5 ml-4" src={contentsettingIcon} alt=""/>
                                <span className="txtsidebar">Pengaturan Konten</span>
                            </a></li>
                            <li className="my-2"><a className="flex  overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-300 py-3 items-center rounded-md ease-in-out transition " href="">
                                <img className="w-5 ml-4" src={categoryIcon} alt=""/>
                                <span className="txtsidebar">Kategori Subdit</span>
                            </a></li>
                            <li className="collapse collapse-close overflow-hidden cursor-pointer">
                                <input type="checkbox" className="peer cursor-pointer" id="collapse"/>
                                <div id="collapse-head"
                                     className="flex collapse-title  h-[20px] peer-hover:bg-base-300   overflow-hidden active:bg-blue-300 flex-column hover:bg-base-300 p-3 py-1 items-center rounded-md ease-in-out transition "
                                     href="">
                                    <img className="w-5  ml-1" src={settingIcon} alt=""/>
                                    <span className="ml-6 overflow-hidden  max-h-[24px] ">Pengaturan</span>
                                </div>
                                <div className="collapse-content flex flex-col p-0 overflow-hidden  ">
                                    <Link className="p-3  pl-16 hover:bg-base-300 w-full rounded-lg" to="/"><span className="">Option 1</span> </Link>
                                    <Link className="p-3  pl-16 hover:bg-base-300 w-full rounded-lg" to="/">Option 2</Link>
                                    <Link className="p-3  pl-16 hover:bg-base-300 w-full rounded-lg" to="/">Option 3</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>



            </div>
        )
    }
}
export default Sidebar;