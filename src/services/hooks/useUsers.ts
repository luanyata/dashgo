import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string,
  name: string,
  email: string,
  createdAt: string
}

export function useUser() {
  return useQuery('users', async (): Promise<User[]> => {
    const {data} = await api.get('users')

    return data.users;
  }, {
    staleTime: 1000 * 5
  })
}
