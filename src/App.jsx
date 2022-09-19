import {useEffect, useState} from 'react'
import './App.css'
import barIcon from "./assets/icon/bar.svg"
import homeIcon from "./assets/icon/home.svg"

function App() {

  const [fullSidebar, setFullSidebar] = useState(true)

  useEffect(() => {
    console.log(fullSidebar)
  }, [fullSidebar])

  if(fullSidebar) {
  return (
    <div className="App">
      <div className="flex  flex-row">
        <div className="flex flex-col w-[280px] items-start fixed">
            <div className="flex items-center w-full p-4 py-2 h-[64px] border-b-[.1em] border-b  ">
              <div className="flex py-2 px-0.5 items-center ">
                <button onClick={()=>setFullSidebar(!fullSidebar)} className="btn btn-circle btn-outline border-none hover:bg-red-200 mr-2.5 ">
                  <img className="w-4" src={barIcon} alt=""/>
                </button>
                <a href="#">Knowledge Management</a>
              </div>
            </div>

          <div id="sidebar" className=" w-full p-4 h-screen shadow-lg z-20 ">
            <div>
              <ul className="overflow-hidden">
                <li className="my-2"><a className="flex min-h-[56px]  overflow-hidden active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                  <img className="w-5 " src={homeIcon} alt=""/>
                  <span className="ml-6  overflow-hidden  max-h-[24px] transition ">Beranda</span>
                </a></li>
                <li className="my-2"><a className="flex min-h-[56px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                  <img className="w-5" src={homeIcon} alt=""/>
                  <span className="ml-6   overflow-hidden  max-h-[24px] ">Konten Saya</span>
                </a></li>
                <li className="my-2"><a className="flex min-h-[56px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                  <img className="w-5 " src={homeIcon} alt=""/>
                  <span className="ml-6   overflow-hidden  max-h-[24px] ">Pengaturan</span>
                </a></li>
                <li className="my-2"><a className="flex min-h-[56px] overflow-hidden active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                  <img className="w-5 " src={homeIcon} alt=""/>
                  <span className="ml-6 overflow-hidden  max-h-[24px] ">Pengaturan Konten</span>
                </a></li>
              </ul>
            </div>
          </div>



        </div>
        <div className="flex-grow ">
          <div className="navbar bg-base-100 border-b-[.1em] border-b h-[56px] justify-end">
            <div className="navbar-end">
              <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )}
  else {
    return (
        <div className="App">
          <div className="flex  flex-row">
            <div className="flex flex-col w-[280px] items-start fixed">
              <div className="flex items-center w-full p-4 py-2 h-[64px] border-b-[.1em] border-b  ">
                <div className="flex py-2 px-0.5 items-center ">
                  <button onClick={()=>setFullSidebar(!fullSidebar)} className="btn btn-circle btn-outline border-none hover:bg-red-200 mr-2.5">
                    <img className="w-4" src={barIcon} alt=""/>
                  </button>
                  <a href="#">Knowledge Management</a>
                </div>
              </div>

              <div id="sidebar" className="hidden sm:block w-[85px]  p-4 h-screen shadow-lg  z-20 ">
                <div>
                  <ul >
                    <li className="my-2"><a className="flex min-h-[56px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                      <img className="w-5 h-5 " src={homeIcon} alt=""/>
                      <span className="txtsidebar">Beranda</span>
                    </a></li>
                    <li className="my-2"><a className="flex min-h-[56px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                      <img className="w-5 h-5" src={homeIcon} alt=""/>
                      <span className="txtsidebar">Konten Saya</span>
                    </a></li>
                    <li className="my-2"><a className="flex min-h-[56px]  overflow-hidden active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                      <img className="w-5 h-5 " src={homeIcon} alt=""/>
                      <span className=" txtsidebar">Pengaturan</span>
                    </a></li>
                    <li className="my-2"><a className="flex min-h-[56px] overflow-hidden  active:bg-blue-300 flex-column hover:bg-[#00a2e9] p-4 items-center rounded-md ease-in-out transition " href="">
                      <img className="w-5 h-5" src={homeIcon} alt=""/>
                      <span className=" txtsidebar">Pengaturan Konten</span>
                    </a></li>
                  </ul>
                </div>
              </div>



            </div>
            <div className="flex-grow ">
              <div className="navbar bg-base-100 border-b-[.1em] border-b h-[56px] justify-end">
                <div className="navbar-end">
                  <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                  <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                      <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                  </button>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                      </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      <li>
                        <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li><a>Settings</a></li>
                      <li><a>Logout</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
    )
  }
}

export default App
