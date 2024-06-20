import { User } from "@/lib/types";
import { Session } from "next-auth";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import UserContext from "./userContext";

// Define the shape of the user object

// Create a new context for the user

// Create a UserProvider component to wrap your app with
const UserProvider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) => {
  const [user, setUser] = useState<User | null>(session?.user || null);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
