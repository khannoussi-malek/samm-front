import { createQueryKeys } from "@lukemorales/query-key-factory";
import { UseMutationOptions, UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Axios, { AxiosError } from "axios";
import { User } from "../../Auth/service";
export type Major=  {
    id: number;
    name: string;
    plan: string;
  }
export type Department = {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    headOfDepartment: User;
    headOfDepartmentId: number;
    teatching: User[]
    majors: Major[]
}

export const departmentKeys = createQueryKeys('departments', {
    list: (name: string) => [name || "all"],
});
type ListDepartmentsQueryOptions = UseQueryOptions<Department[]>;
export const useListDepartments = (name?: string, queryOptions: ListDepartmentsQueryOptions = {}) => {

    const query = useQuery({
        queryKey: departmentKeys.list(name).queryKey,
        queryFn: async () => {
            const params = name ? { name } : {};
            const response = await Axios.get("/departements", {
                params
            });
            return response?.data;
        },
        ...queryOptions,
    });

    return { ...query, departments: query.data || [] };
};

export const useCreateDepartment = (config: UseMutationOptions<Department, AxiosError<any>, Department> = {}) => {
    const queryClient = useQueryClient();
    return useMutation(async (payload) => await Axios.post("/departements", payload), {
        ...config,
        onSuccess: (data, payload, ...rest) => {
          queryClient.invalidateQueries();
          if (config.onSuccess) {
            config.onSuccess(data, payload, ...rest);
          }
        },
      });
};

export const useDepartmentUpdate = (
    config: UseMutationOptions<Department, AxiosError, Department> = {}
) => {
    const queryClient = useQueryClient();
    return useMutation((payload) => Axios.patch("/Departements/" + payload.id, payload), {
        ...config,
        onSuccess: (data, payload, ...rest) => {
            queryClient.invalidateQueries();
            if (config.onSuccess) {
                config.onSuccess(data, payload, ...rest);
            }
        },
    });
};

export const useDeleteDepartment = (config: UseMutationOptions<void, AxiosError, number> = {}) => {
    const queryClient = useQueryClient();
    return useMutation(
        async (id) => await Axios.delete(`/departements/${id}`),
        {
            ...config,
            onSuccess: (data, payload, ...rest) => {
                queryClient.invalidateQueries();
                if (config.onSuccess) {
                    config.onSuccess(data, payload, ...rest);
                }
            },
        })
};