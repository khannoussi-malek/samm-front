import { createQueryKeys } from "@lukemorales/query-key-factory";
import { UseMutationOptions, UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Axios, { AxiosError }  from "axios";

export type Major=  {
    id: number;
    name: string;
    plan: string;
  }

  export const majorKeys = createQueryKeys('majors', {
    list: (name: string) => [name || "all"],
  });

    export type ListMajorsQueryOptions = UseQueryOptions<Major[]>;

export const useListMajors = (name?: string, queryOptions: ListMajorsQueryOptions = {}) => {
    const query = useQuery({
        queryKey: majorKeys.list(name).queryKey,
        queryFn: async () => {
            const params = name ? { name } : {};
            const response = await Axios.get("/majors", {
                params
            });
            return response?.data;
        },
        ...queryOptions,
    });

    return { ...query, majors: query.data || [] };
}
// create useCreateMajor

export const useCreateMajor = (config: UseMutationOptions<Major,AxiosError,Major>) => {
    return useMutation(async (payload) => await Axios.post("/majors", payload), {
        ...config,
    });
}
// create useMajorUpdate

export const useMajorUpdate = (config: UseMutationOptions<Major,AxiosError,Major>) => {
    
    const queryClient = useQueryClient();
    
    return useMutation((payload) => Axios.patch("/majors/" + payload.id, payload), {
        ...config,
        onSuccess: (data, payload, ...rest) => {
            queryClient.invalidateQueries();
            if (config.onSuccess) {
                config.onSuccess(data, payload, ...rest);
            }
        }

    });
}