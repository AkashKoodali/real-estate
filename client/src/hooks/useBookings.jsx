import React, { useContext, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllBookings, getAllFav } from "../utils/api";
import { useSelector } from "../redux/store";
import UserDetailContext from "../context/UserDetailsContext";

const useBookings = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const queryRef = useRef();
  // const { user } = useAuth0();
  const { currentUser } = useSelector((state) => state.user);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allBookings",
    queryFn: () => getAllBookings(currentUser?.email, currentUser?.token),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, bookings: data })),
    enabled: currentUser !== undefined,
    staleTime: 30000,
  });

  queryRef.current = refetch;

  useEffect(() => {
    queryRef.current && queryRef.current();
  }, [currentUser?.token]);

  return { data, isError, isLoading, refetch };
};

export default useBookings;
