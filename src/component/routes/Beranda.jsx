//import state from main

import { useState, createContext, useContext } from "react";

function Beranda(props) {

    if (props.isfull) {
        return(
            <div id="maincontent" className="absolute content flex flex-row left-[280px] top-[64px] p-8">
                Ini adalah halaman beranda
            </div>
        )
    }
    else{
        return(
            <div id="maincontent" className="absolute content flex flex-row left-[80px] top-[64px] p-8">
                Ini adalah halaman beranda
            </div>
        )
    }

}
export default Beranda;