import { useQuery } from "react-query";
import { getAllProperties } from "../utils/api";

const useProperties = () => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: "allProperties",
    queryFn: getAllProperties,
    refetchOnWindowFocus: false,
  });
  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useProperties;
