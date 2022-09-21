import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

function Main(props) {

    // const [fullSidebar, setFullSidebar] = useState(true)


    return(
        <>
            <div className="flex  flex-row">
                <Sidebar
                    onclick={props.onclick}
                    isfull={props.isfull}
                />
                <div className="flex-grow ">
                    <Navbar/>
                </div>
            </div>
            <Outlet />
        </>

    )
}
export default Main;