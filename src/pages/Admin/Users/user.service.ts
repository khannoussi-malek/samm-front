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
export const useCreateUser = (config: UseMutationOptions<User, AxiosError<any>, User> = {}) => {
  return useMutation(async (payload) => await Axios.post("/users", payload), config);
};


export const useUserUpdate = (
  config: UseMutationOptions<User, AxiosError, User> = {}
) => {
  const queryClient = useQueryClient();
  return useMutation((payload) => Axios.patch("/users/"+payload.id, payload), {
    ...config,
    onSuccess: (data, payload, ...rest) => {
      queryClient.invalidateQueries();
      if (config.onSuccess) {
        config.onSuccess(data, payload, ...rest);
      }
    },
  });
};

export const useDeleteUser = ( config: UseMutationOptions<void, AxiosError, number> = {}) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id) => await Axios.delete(`/users/${id}`), 
    {...config,
    onSuccess: (data, payload, ...rest) => {
      queryClient.invalidateQueries();
      if (config.onSuccess) {
        config.onSuccess(data, payload, ...rest);
      }
    },
  })
};
