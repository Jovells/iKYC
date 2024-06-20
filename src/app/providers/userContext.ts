import { User } from "@/lib/types";
import React, { Dispatch, SetStateAction, createContext } from "react";

// Define the shape of the user object

// Create a new context for the user
const UserContext = createContext<User | null>(null);

export default UserContext;
