import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useUser() {
  const user = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      //   const { data } = await axios.get(`/api/user`);
      //   return data;
      return {
        id: "hjh",
        first: "John Doe",
        email: "jd@email.com",
        evmAddress: "0x0233243434343434433443433443",
      };
    },
  });
  return user.data;
}
