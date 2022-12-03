//Component Utama dari setiap route selain login
//Component ini berisi Sidebar + Navbar

import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";

function Main(props) {
  return (
    <>
      <div className="flex  flex-row">
        <Sidebar onclick={props.onclick} isfull={props.isfull} />
        <div className="flex-grow ">
          <Navbar onclick={props.onclick} isfull={props.isfull} />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Main;
