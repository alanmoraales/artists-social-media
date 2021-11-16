import { useContext } from "react";
import UserContext from "./UserContext";

const useUserContext = () => {
  const userContextValue = useContext(UserContext);

  if (userContextValue === undefined) {
    throw new Error("You must use useUserContext within a UserProvider");
  }

  return userContextValue;
};

export default useUserContext;
