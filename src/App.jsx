import "./App.css";
import jwtDecode from "jwt-decode";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Beranda from "./component/routes/Beranda/Beranda.jsx";
import Pengguna from "./component/routes/pengaturan/Pengguna";
import Main from "./component/Frame/Main";
import React, { createContext, useEffect, useState } from "react";
import Konten from "./component/routes/Konten";
import Kontensaya from "./component/routes/Kontensaya.jsx";
import BuatKonten from "./component/routes/BuatKonten";
import SignIn from "./component/Auth/SignIn.jsx";
import Approval from "./component/routes/Approval.jsx";
import UnitKerja from "./component/routes/pengaturan/UnitKerja";
import Kategori from "./component/routes/pengaturan/Kategori.jsx";
import EditKonten from "./component/routes/EditKonten.jsx";
import { SnackbarProvider } from "notistack";
import httpClient from "./httpClient.js";
import Cookies from "js-cookie";
import { setRef } from "@mui/material";

export const UserContext = React.createContext();
export const AuthContext = React.createContext();
export const RoleContext = React.createContext();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  //state untuk menentukan apakah sidebar full atau tidak
  const [fullSidebar, setFullSidebar] = useState(false);
  const [user, setUser] = useState(httpClient.getCurrentUser());
  const [isLogin, setIsLogin] = useState(!!httpClient.getCurrentUser());

  useEffect(() => {
    if (window.innerWidth > 768) {
      setFullSidebar(true);
    }

    let sidebarCookie = Cookies.get("sidebar");
    if (sidebarCookie === "full") {
      setFullSidebar(false);
    } else {
      setFullSidebar(true);
    }
  }, []);

  const handleSidebar = () => {
    setFullSidebar(!fullSidebar);
    if (fullSidebar) {
      Cookies.set("sidebar", "full");
    } else {
      Cookies.set("sidebar", "notfull");
    }
  };

  return (
    <UserContext.Provider value={user}>
      <AuthContext.Provider value={isLogin}>
        <SnackbarProvider maxSnack={3}>
          <BrowserRouter>
            <ScrollToTop />
            {isLogin ? (
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main onclick={handleSidebar} isfull={fullSidebar} />
                  }
                >
                  <Route index element={<Navigate to="beranda" />} />
                  <Route
                    path="beranda"
                    element={<Beranda isfull={fullSidebar} isLogin={isLogin} />}
                  ></Route>
                  <Route
                    path="pengaturan/pengguna"
                    element={<Pengguna isfull={fullSidebar} />}
                  />
                  <Route
                    path="/konten/:id"
                    element={<Konten isfull={fullSidebar} />}
                  />
                  <Route
                    path="kontensaya"
                    element={<Kontensaya isfull={fullSidebar} />}
                  />
                  <Route
                    path="buatkonten"
                    element={<BuatKonten isfull={fullSidebar} />}
                  />
                  <Route
                    path="editkonten"
                    element={<EditKonten isfull={fullSidebar} />}
                  />
                  <Route
                    path="pengaturan/approval"
                    element={<Approval isfull={fullSidebar} />}
                  />
                  <Route
                    path="pengaturan/unitkerja"
                    element={<UnitKerja isfull={fullSidebar} />}
                  />
                  <Route
                    path="pengaturan/kategori"
                    element={<Kategori isfull={fullSidebar} />}
                  />
                  <Route
                    path="/editkonten/:id"
                    element={<EditKonten isfull={fullSidebar} />}
                  />
                </Route>
                <Route path="auth" element={<SignIn />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            ) : (
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main onclick={handleSidebar} isfull={fullSidebar} />
                  }
                >
                  <Route
                    path="buatkonten"
                    element={<BuatKonten isfull={fullSidebar} />}
                  />
                  <Route index element={<Navigate to="beranda" />} />
                  <Route
                    path="beranda"
                    element={<Beranda isfull={fullSidebar} />}
                  ></Route>
                  <Route
                    path="/konten/:id"
                    element={<Konten isfull={fullSidebar} />}
                  />
                </Route>
                <Route path="auth" element={<SignIn />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            )}
          </BrowserRouter>
        </SnackbarProvider>
      </AuthContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
