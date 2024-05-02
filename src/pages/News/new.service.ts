import { createQueryKeys } from "@lukemorales/query-key-factory";
import { UseMutationOptions, UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Axios, { AxiosError } from "axios";


export const newsKeys = createQueryKeys('news', {
    list: ["list"],
    get: (id: number) => [ { id }],
  });


  type NewsType = {
    id: number;
    title: string;
    content: string;
    visibility: boolean;
    createdAt?: string;
    updatedAt?: string;
  }
  type CreatNewsType = {
    title: string;
    content: string;
    visibility: boolean;
  }
type NewsQueryOptions = UseQueryOptions<NewsType[]>;
type GetNewsQueryOptions = UseQueryOptions<NewsType>;

type NewsMutationOptions = UseMutationOptions<any, AxiosError,CreatNewsType>;

  export const useListNews = (queryOptions: NewsQueryOptions = {}) => {
    const query = useQuery({
      queryKey: newsKeys.list.queryKey,
      queryFn: async () => {
        const response = await Axios.get('/news');
        return response?.data;
      },
      ...queryOptions,
    });
    return { ...query, news:query.data||[] };
 };

 export const useCreateNews = (mutationOptions: NewsMutationOptions= {}) => {
  const queryClient = useQueryClient();
return useMutation(
    async ({
      title,
      content,
      visibility,
    }) => {
      return Axios.post('/news',{title,content,visibility});
    },
    {
      ...mutationOptions,
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(newsKeys.list.queryKey);
        mutationOptions?.onSuccess?.(data, variables, context);
      }
    }
  )

}

export const useNews =  (id:number,queryOptions: GetNewsQueryOptions = {}) => {
  const query = useQuery({
    queryKey: newsKeys.get(id).queryKey,
    queryFn: async () => {
      const response = await Axios.get('/news/'+id);
      return response?.data;
    },
    ...queryOptions,
  });
  return { ...query, news:query.data };
};