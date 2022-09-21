import './App.css'
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Beranda from "./component/routes/Beranda";
import Profile from "./component/routes/Profile";
import Main from "./component/main/Main";
import {useState} from "react";

function App() {
    const [fullSidebar, setFullSidebar] = useState(true)

    return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main onclick={() => setFullSidebar(!fullSidebar)}
                                             isfull={fullSidebar} />}>
                <Route index element={<Beranda isfull={fullSidebar} />} />
                <Route path="profile" element={<Profile />} />
              </Route>
            </Routes>
          </BrowserRouter>
    )
}

export default App
