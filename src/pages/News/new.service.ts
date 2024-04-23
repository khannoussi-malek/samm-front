import { createQueryKeys } from "@lukemorales/query-key-factory";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import Axios  from "axios";


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
type NewsQueryOptions = UseQueryOptions<NewsType[]>;

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