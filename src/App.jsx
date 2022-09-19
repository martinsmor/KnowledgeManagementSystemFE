import {useEffect, useState} from 'react'
import './App.css'
import barIcon from "./assets/icon/bar.svg"
import homeIcon from "./assets/icon/home.svg"
import profilePic from "./assets/profile/profile.png"
import searchIcon from "./assets/icon/search.svg"
import notifIcon from "./assets/icon/notif.svg"
import omsIcon from "./assets/icon/grid.svg"

function App() {

  const [fullSidebar, setFullSidebar] = useState(true)

  useEffect(() => {
    console.log(fullSidebar)
  }, [fullSidebar])

  if(fullSidebar) {
  return (
    <div className="App">
      <div className="flex  flex-row">
        <div className="flex flex-col w-[280px] z-50 items-start fixed">
            <div className="flex items-center w-full p-4 py-2 h-[64px] border-b-[.1em] border-b  ">
              <div className="flex py-2 px-0.5 items-center z-40 ">
                <button onClick={()=>setFullSidebar(!fullSidebar)} className="btn  ml-1 btn-circle btn-outline border-none hover:bg-red-200 mr-2.5 ">
                  <img className="w-4 " src={barIcon} alt=""/>
                </button>
                <a href="#">Knowledge Management</a>
              </div>
            </div>
          <div id="sidebar" className=" w-full p-4 h-screen shadow-lg z-20 overflow-y-auto">
            <div>
              <ul className="overflow-hidden">
                <li className="my-2"><a className="flex min-h-[56px]  overflow-hidden active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                  <img className="w-5  ml-1" src={homeIcon} alt=""/>
                  <span className="ml-6  overflow-hidden  max-h-[24px] transition ">Beranda</span>
                </a></li>
                <li className="my-2"><a className="flex min-h-[56px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                  <img className="w-5  ml-1" src={homeIcon} alt=""/>
                  <span className="ml-6   overflow-hidden  max-h-[24px] ">Konten Saya</span>
                </a></li>
                <li className="my-2"><a className="flex min-h-[56px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                  <img className="w-5  ml-1" src={homeIcon} alt=""/>
                  <span className="ml-6   overflow-hidden  max-h-[24px] ">Pengaturan</span>
                </a></li>
                <li className="my-2"><a className="flex min-h-[56px] overflow-hidden active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                  <img className="w-5  ml-1" src={homeIcon} alt=""/>
                  <span className="ml-6 overflow-hidden  max-h-[24px] ">Pengaturan Konten</span>
                </a></li>

              </ul>
            </div>
          </div>



        </div>
        <div className="flex-grow ">
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
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 drop-shadow-md shadow-lg border-1 rounded-md border-2 border-opacity-2   bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute content  left-[280px] top-[64px] p-8">
            aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
            aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
            aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
            aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
            aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
            aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
            aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
            aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
            aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
            aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
          </div>


        </div>

      </div>


    </div>
  )}
  else {
    return (
        <div className="App">
          <div className="flex  flex-row">
            <div className="flex flex-col z-50 w-[280px] items-start fixed">
              <div className="flex items-center w-full p-4 py-2 h-[64px] border-b-[.1em] border-b  ">
                <div className="flex py-2 px-0.5 items-center ">
                  <button onClick={()=>setFullSidebar(!fullSidebar)} className="btn  ml-1 btn-circle btn-outline border-none hover:bg-red-200 mr-2.5">
                    <img className="w-4" src={barIcon} alt=""/>
                  </button>
                  <a href="#">Knowledge Management</a>
                </div>
              </div>

              <div id="sidebar" className="hidden sm:block w-[93px] z-50  p-4 h-screen shadow-lg  z-20 ">
                <div>
                  <ul >
                    <li className="my-2"><a className="flex min-h-[56px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                      <img className="w-5 ml-1" src={homeIcon} alt=""/>
                      <span className="txtsidebar">Beranda</span>
                    </a></li>
                    <li className="my-2"><a className="flex min-h-[56px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                      <img className="w-5 h-5  ml-1" src={homeIcon} alt=""/>
                      <span className="txtsidebar">Konten Saya</span>
                    </a></li>
                    <li className="my-2"><a className="flex min-h-[56px]  overflow-hidden active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                      <img className="w-5 h-5  ml-1" src={homeIcon} alt=""/>
                      <span className=" txtsidebar">Pengaturan</span>
                    </a></li>
                    <li className="my-2"><a className="flex min-h-[56px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                      <img className="w-5 h-5  ml-1" src={homeIcon} alt=""/>
                      <span className=" txtsidebar">Pengaturan Konten</span>
                    </a></li>
                  </ul>
                </div>
              </div>



            </div>
            <div className="flex-grow ">
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
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 drop-shadow-md shadow-lg border-1 rounded-md border-2 border-opacity-2   bg-base-100 rounded-box w-52">
                      <li>
                        <a className="justify-between">
                          Profile
                        </a>
                      </li>
                      <li><a>Settings</a></li>
                      <li><a>Logout</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute content left-[85px] top-[64px] p-8">
                aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
                aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
                aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
                aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
                aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
                aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
                aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
                aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
                aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
                aaLorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem eaque earum error laboriosam minima mollitia nesciunt reprehenderit vero. Aliquam architecto, ducimus ipsam laboriosam totam voluptatem voluptatum. Aliquid, repellat.
              </div>
            </div>

          </div>
        </div>
    )
  }
}

export default App
