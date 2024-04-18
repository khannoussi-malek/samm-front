import { createQueryKeys } from '@lukemorales/query-key-factory';
import {
  UseQueryOptions,
  useQuery
} from '@tanstack/react-query';
import { Axios } from 'axios';


export const accountKeys = createQueryKeys('accountService', {
  account: null,
  accountForm: null,
});

type User = any
type UseAccountQueryOptions = UseQueryOptions<User>;
export const useAccount = (queryOptions: UseAccountQueryOptions = {}) => {
  return { nope: true, isLoading: false, isAdmin: false, data: {} };
   const query = useQuery({
     queryKey: accountKeys.account.queryKey,
     queryFn: async () => {
       const response = await Axios.get('/account');
       const data = zUser().parse(response.data);
       return data;
     },
     ...queryOptions,
   });
   const isAdmin = !!query.data?.authorities?.includes('ROLE_ADMIN');
   return { isAdmin, ...query };
};

