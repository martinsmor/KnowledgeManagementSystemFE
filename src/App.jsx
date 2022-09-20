import {useEffect, useState} from 'react'
import './App.css'
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Beranda from "./component/routes/Beranda";
import Profile from "./component/routes/Profile";
import Main from "./component/main/Main";

function App() {



    return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />}>
                <Route index element={<Beranda />} />
                <Route path="profile" element={<Profile />} />
              </Route>
            </Routes>
          </BrowserRouter>
    )
}

export default App
