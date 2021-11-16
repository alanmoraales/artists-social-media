import { createContext } from "react";
import type { IUser } from "@declarations/user";
import type { ILoginUser } from "@declarations/auth";

interface IUserContext {
  user?: IUser;
  isLoggedIn: boolean;
  loginUser: (loginData: ILoginUser) => Promise<void>;
  logoutUser: () => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export type { IUserContext };
export default UserContext;
