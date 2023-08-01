import { Suspense, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

import MainPage from "./page/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Properties from "./page/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./page/Property/Property";
import UserDetailContext from "./context/UserDetailsContext";

import SignIn from "./page/Auth/SignIn";
import { useSelector } from "./redux/store";
// import { useSelector } from "react-redux";
// import Bookings from "./pages/Bookings/Bookings";
// import Favourites from "./pages/Favourites/Favourites";

function App() {
  const queryClient = new QueryClient();

  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    // token: null,
  });

  const { currentUser } = useSelector((state) => state.user);

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />
                </Route>
                {/* <Route path="/bookings" element={<Bookings />} /> */}
                {/* <Route path="/favourites" element={<Favourites />} /> */}
              </Route>

              <Route>
                <Route
                  path="signin"
                  element={currentUser ? <MainPage /> : <SignIn />}
                />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
