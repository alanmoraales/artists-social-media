import React, { useState, useEffect, FC } from "react";
import UserContext, { IUserContext } from "./UserContext";
import type { IUser } from "@declarations/user";
import type { ILoginUser } from "@declarations/auth";

const testUsers: (ILoginUser & IUser)[] = [
  {
    id: 1,
    username: "alanmoraales",
    password: "12345678",
  },
];

const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Boolean(user));
  }, [user]);

  const loginUser = async ({ username, password }: ILoginUser) => {
    const user = testUsers.find(
      (user) => user.password === password && user.username === username
    );
    if (!user) {
      throw new Error("Invalid username or password");
    }
    setUser(user);
  };

  const logoutUser = () => {
    setUser(undefined);
  };

  const contextValue: IUserContext = {
    user,
    isLoggedIn,
    loginUser,
    logoutUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserProvider };
