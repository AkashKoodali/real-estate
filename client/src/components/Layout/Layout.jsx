import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useMutation } from "react-query";
import { signUp } from "../../utils/api";
import useFavourites from "../../hooks/useFavourites";
import useBookings from "../../hooks/useBookings";

const Layout = () => {
  useFavourites();
  useBookings();

  // const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  // const { setUserDetails } = useContext(UserDetailContext);

  // const { mutate } = useMutation({
  //   mutationKey: [user?.email],
  //   mutationFn: (token) => createUser(user?.email, token),
  // });

  const { mutate } = useMutation({
    mutationFn: ({ email, password, name }) => signUp(email, password, name),
    onSuccess: (data) => {},
    onError: (error) => {
      console.log(error);
    },
  });

  // useEffect(() => {
  //   const getTokenAndRegsiter = async () => {
  //     const res = await getAccessTokenSilently({
  //       authorizationParams: {
  //         audience: "http://localhost:8000",
  //         scope: "openid profile email",
  //       },
  //     });
  //     localStorage.setItem("access_token", res);
  //     setUserDetails((prev) => ({ ...prev, token: res }));
  //     console.log(res, "RES");
  //     // mutate(res);
  //   };

  //   isAuthenticated && getTokenAndRegsiter();
  // }, [isAuthenticated]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
