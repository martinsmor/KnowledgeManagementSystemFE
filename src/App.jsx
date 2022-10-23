import "./App.css";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Beranda from "./component/routes/Beranda";
import Profile from "./component/routes/Profile";
import Pengguna from "./component/routes/pengaturan/Pengguna";
import Main from "./component/main/Main";
import { useEffect, useState } from "react";
import Konten from "./component/routes/Konten";
import Kontensaya from "./component/routes/Kontensaya.jsx";
import BuatKonten from "./component/routes/BuatKonten";
import SignIn from "./component/Auth/SignIn.jsx";

function App() {
  //state untuk menentukan apakah sidebar full atau tidak
  const [fullSidebar, setFullSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setFullSidebar(true);
    }
  }, []);

  //Router
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              onclick={() => setFullSidebar(!fullSidebar)}
              isfull={fullSidebar}
            />
          }
        >
          <Route index element={<Beranda isfull={fullSidebar} />} />
          <Route path="beranda" element={<Beranda isfull={fullSidebar} />} />
          <Route path="profile" element={<Profile />} />
          <Route path="pengguna" element={<Pengguna />} />
          <Route path="content" element={<Konten />} />
          <Route path="kontensaya" element={<Kontensaya />} />
          <Route
            path="buatkonten"
            element={<BuatKonten isfull={fullSidebar} />}
          />
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
