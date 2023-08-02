import React, { useContext, useEffect, useRef } from "react";
import UserDetailContext from "../context/UserDetailsContext";
import { useQuery } from "react-query";
import { getAllFav } from "../utils/api";
import { useSelector } from "../redux/store.js";

const useFavourites = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const queryRef = useRef();
  const { currentUser } = useSelector((state) => state.user);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allFavourites",
    queryFn: () => getAllFav(currentUser?.email, currentUser?.token),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, favourites: data })),
    enabled: currentUser !== undefined,
    staleTime: 30000,
  });

  queryRef.current = refetch;

  useEffect(() => {
    queryRef.current && queryRef.current();
  }, [currentUser?.token]);

  return { data, isError, isLoading, refetch };
};

export default useFavourites;
