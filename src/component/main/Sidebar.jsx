// Burger Bar Icon
import barIcon from "../../assets/icon/bar.svg";
// Home Icon
import homeIcon from "../../assets/icon/home.svg";
import settingIcon from "../../assets/icon/setting.svg";
import mycontentIcon from "../../assets/icon/mycontent.svg";
import contentsettingIcon from "../../assets/icon/contentsetting.svg";
import categoryIcon from "../../assets/icon/category.svg";
import tambahIcon from "../../assets/icon/tambah.svg";
import pengguna from "../routes/pengaturan/pengguna";

// Router
import {Link} from "react-router-dom";

function Sidebar(props) {
    // Full Sidebar
    if (props.isfull) {
        return (
            <div className="flex flex-col w-[270px] z-40 items-start fixed">
                {/*Sidebar*/}
                <div className="flex items-center w-full p-3 py-2 h-[64px] border-b-[.1em] border-b  ">


                </div>
                <div id="sidebar" className=" w-full p-3 h-screen shadow-lg z-20 overflow-y-auto  border-r-2 border-r-base-200">
                    <div>
                        <ul className="overflow-hidden">
                            <li className="my-2 "><a
                                className="flex  min-h-[48px] overflow-hidden active:bg-blue-300 flex-column hover:bg-base-300 p-3 items-center rounded-md ease-in-out transition "
                                href="">
                                <img className="w-5  ml-1" src={homeIcon} alt=""/>
                                <span className="ml-6  overflow-hidden  max-h-[24px] transition ">Beranda</span>
                            </a></li>
                            <li className="my-2"><Link to="content"
                                className="flex  min-h-[48px] overflow-hidden active:bg-blue-300 flex-column hover:bg-base-300 p-3 items-center rounded-md ease-in-out transition "
                                >
                                <img className="w-5  ml-1" src={tambahIcon} alt=""/>
                                <span className="ml-6  overflow-hidden  max-h-[24px] transition ">Buat Konten</span>
                            </Link></li>
                            <li className="my-2"><a
                                className="flex min-h-[48px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-300 p-3 items-center rounded-md ease-in-out transition "
                                href="">
                                <img className="w-4  ml-1.5" src={mycontentIcon} alt=""/>
                                <span className="ml-6 pl-0.5  overflow-hidden  max-h-[24px] ">Konten Saya</span>
                            </a></li>
                            <li className="my-2"><a
                                className="flex min-h-[48px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-300 p-3 items-center rounded-md ease-in-out transition "
                                href="">
                                <img className="w-5  ml-1" src={contentsettingIcon} alt=""/>
                                <span className="ml-6   overflow-hidden  max-h-[24px] ">Pengaturan Konten</span>
                            </a></li>

                                <li className="collapse collapse-arrow ">
                                <input type="checkbox" className="peer" id="collapse"/>
                                    <div id="collapse-head"
                                        className="flex collapse-title  h-[20px] peer-hover:bg-base-300   overflow-hidden active:bg-blue-300 flex-column hover:bg-base-300 p-3 py-1 items-center rounded-md ease-in-out transition "
                                        href="">
                                        <img className="w-5  ml-1" src={settingIcon} alt=""/>
                                        <span className="ml-6 overflow-hidden  max-h-[24px] ">Pengaturan</span>
                                    </div>
                                <ul className="collapse-content flex flex-col p-0 pb-0 transition-all duration-100 ease-linear ">
                                    <Link className="p-2 my-0.5 pl-14 py-3 hover:bg-base-300 w-full rounded-lg " to="Pengguna"><span  className="block max-h-[24px] ml-1 overflow-hidden">Pengguna</span></Link>
                                    <Link className="p-2 my-0.5 pl-14 py-3 hover:bg-base-300 w-full rounded-lg" to="/"><span className="block max-h-[24px] ml-1 overflow-hidden" >Menu Akses</span></Link>
                                    <Link className="p-2 my-0.5 pl-14 py-3 hover:bg-base-300 w-full rounded-lg" to="/"><span  className="block max-h-[24px] ml-1 overflow-hidden">Grup Akses</span></Link>
                                    <Link className="p-2 my-0.5 pl-14 py-3 hover:bg-base-300 w-full rounded-lg" to="/"><span  className="block max-h-[24px] ml-1 overflow-hidden">Kategori</span></Link>
                                    <Link className="p-2 my-0.5 pl-14 py-3 hover:bg-base-300 w-full rounded-lg" to="/"><span  className="block max-h-[24px] ml-1 overflow-hidden">Unit Kerja</span></Link>
                                </ul>
                            </li>
                            <li className="my-2  min-h-[30px]"></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    //    Mini Sidebar
    } else {
        return(
            <div className="flex flex-col z-30 w-[270px] items-start fixed">
                <div className="flex items-center w-full p-3 py-2 h-[64px] border-b-[.1em] border-b  ">

                </div>

                <div id="sidebar" className="hidden sm:block w-[76px] z-20  p-3 h-screen shadow-lg  z-20  border-r-2 border-r-base-200">
                    <div>
                        <ul >
                            <li className="my-2"><a className="flex  overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-300 py-3 items-center rounded-md ease-in-out transition " href="">
                                <img className="w-5 ml-4" src={homeIcon} alt=""/>
                                <span className="txtsidebar">Beranda</span>
                            </a></li>
                            <li className="my-2"><Link to="content" className="flex  overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-300 py-3 items-center rounded-md ease-in-out transition ">
                                <img className="w-5 ml-4" src={tambahIcon} alt=""/>
                                <span className="txtsidebar">Buat Konten</span>
                            </Link></li>
                            <li className="my-2"><a className="flex overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-300 py-3  items-center rounded-md ease-in-out transition " href="">
                                <img className="w-4 ml-[1.125rem]" src={mycontentIcon} alt=""/>
                                <span className="txtsidebar pl-0.5">Konten Saya</span>
                            </a></li>
                            <li className="my-2"><a className="flex  overflow-hidden  active:bg-blue-300 flex-column hover:bg-base-300 py-3 items-center rounded-md ease-in-out transition " href="">
                                <img className="w-5 ml-4" src={contentsettingIcon} alt=""/>
                                <span className="txtsidebar">Pengaturan Konten</span>
                            </a></li>
                            <li className="collapse collapse-close overflow-hidden cursor-pointer">
                                <input disabled type="checkbox" className="peer cursor-pointer" id="collapse"/>
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