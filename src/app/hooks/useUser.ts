import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../providers/userContext";

export function useUser() {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }

  const user = context;

  if (user) {
    user.id = "hjh";
  }

  return { user };
}


// export function useUser() {
//   const user = useQuery({
//     queryKey: ["user"],
//     queryFn: async () => {
//       //   const { data } = await axios.get(`/api/user`);
//       //   return data;
//       return {
//         id: "hjh",
//         first: "John Doe",
//         email: "jd@email.com",
//         evmAddress: "0x0233243434343434433443433443",
//       };
//     },
//   });
//   return user.data;
// }