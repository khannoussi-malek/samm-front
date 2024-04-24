import { createQueryKeys } from "@lukemorales/query-key-factory";
import { UseMutationOptions, UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { User } from "../../Auth/service";
import Axios, { AxiosError } from "axios";

export const userKeys = createQueryKeys('users', {
  list: (role: string) => [role || "all"],
});

type ListUsersQueryOptions = UseQueryOptions<User[]>;

export const useListUsers = (role?: string, queryOptions: ListUsersQueryOptions = {}) => {

  const query = useQuery({
    queryKey: userKeys.list(role).queryKey,
    queryFn: async () => {
      const params = role ? { role } : {};
      const response = await Axios.get("/users", {
        params
      });
      return response?.data;
    },
    ...queryOptions,
  });

  return { ...query, users: query.data || [] };
};
export const useCreateUser = (config: UseMutationOptions<void, AxiosError<any>, Partial<User>> = {}) => {
  return useMutation(async (payload) => await Axios.post("/users", payload), config);
};


export const useDeleteUser = ( config: UseMutationOptions<void, AxiosError<any>, Partial<User>> = {}) => {
  const queryClient = useQueryClient();

  return useMutation(async ({id}:{id:number}) => await Axios.delete(`/users/${id}`), {...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries();
      config?.onSuccess?.(...args);
    },
  })
};
