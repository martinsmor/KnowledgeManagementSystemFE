import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

function Main() {

    const [fullSidebar, setFullSidebar] = useState(true)

    useEffect(() => {
        console.log(fullSidebar)
    }, [fullSidebar])

    return(
        <>
            <div className="flex  flex-row">
                <Sidebar
                    onclick={() => setFullSidebar(!fullSidebar)}
                    isfull={fullSidebar}
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