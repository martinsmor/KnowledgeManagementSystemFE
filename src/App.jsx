import "./App.css";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Beranda from "./component/routes/Beranda/Beranda.jsx";
import Profile from "./component/routes/Profile";
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
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { SnackbarProvider } from "notistack";

export const UserContext = React.createContext();

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

  useEffect(() => {
    if (window.innerWidth > 768) {
      setFullSidebar(true);
    }
  }, []);

  const handleSidebar = () => {
    setFullSidebar(!fullSidebar);
  };
  const queryClient = new QueryClient();

  //Router
  return (
    <UserContext.Provider value="Reed">
      <SnackbarProvider maxSnack={3}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ScrollToTop />

            <Routes>
              <Route
                path="/"
                element={<Main onclick={handleSidebar} isfull={fullSidebar} />}
              >
                <Route index element={<Navigate to="beranda" />} />
                <Route
                  path="beranda"
                  element={<Beranda isfull={fullSidebar} />}
                ></Route>
                <Route path="profile" element={<Profile />} />
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
              <Route path="signin" element={<SignIn />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </SnackbarProvider>
    </UserContext.Provider>
  );
}

export default App;
