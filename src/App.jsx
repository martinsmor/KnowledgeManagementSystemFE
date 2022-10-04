import './App.css'
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Beranda from "./component/routes/Beranda";
import Profile from "./component/routes/Profile";
import Pengguna from "./component/routes/pengaturan/Pengguna";
import Main from "./component/main/Main";
import {useEffect, useState} from "react";
import Konten from "./component/routes/Konten";
import Kontensaya from "./component/routes/Kontensaya.jsx";



function App() {

    useEffect(() => {
        fetch('http://localhost:8080/product')
            .then((response) => response.json())
            .then((data) => console.log(data));

    }, [])

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
                  <Route path="kontensaya" element={<Kontensaya />} />
              </Route>
            </Routes>
          </BrowserRouter>
    )
}

export default App
