import { createQueryKeys } from "@lukemorales/query-key-factory";
import { Mutation, UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import Axios, { AxiosError }  from "axios";


export const newsKeys = createQueryKeys('news', {
    list: ["list"],
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
    }
  )

}