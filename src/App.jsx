import './App.css'
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Beranda from "./component/routes/Beranda";
import Profile from "./component/routes/Profile";
import Pengguna from "./component/routes/pengaturan/Pengguna";
import Main from "./component/main/Main";
import {useState} from "react";
import Konten from "./component/routes/Konten";

function App() {
    const [fullSidebar, setFullSidebar] = useState(true)

    return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main onclick={() => setFullSidebar(!fullSidebar)}
                                             isfull={fullSidebar} />}>
                <Route index element={<Beranda isfull={fullSidebar} />} />
                <Route path="profile" element={<Profile />} />
                  <Route path="pengguna" element={<Pengguna />} />
                  <Route path="content" element={<Konten />} />

              </Route>
            </Routes>
          </BrowserRouter>
    )
}

export default App
