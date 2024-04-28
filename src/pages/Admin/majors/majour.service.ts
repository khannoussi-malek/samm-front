import { createQueryKeys } from "@lukemorales/query-key-factory";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import Axios  from "axios";

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