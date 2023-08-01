import { toast } from "react-toastify";
import { useSelector } from "../redux/store";

const useAuthCheck = () => {
  const { currentUser } = useSelector((state) => state.user);

  const validateLogin = () => {
    if (!currentUser) {
      toast.error("you must be logged in", { position: "bottom-right" });
      return false;
    } else return true;
  };
  return {
    validateLogin,
  };
};

export default useAuthCheck;
