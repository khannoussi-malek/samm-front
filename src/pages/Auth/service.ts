import { createQueryKeys } from '@lukemorales/query-key-factory';
import {
  UseQueryOptions,
  useQuery
} from '@tanstack/react-query';
import Axios  from 'axios';


export const accountKeys = createQueryKeys('accountService', {
  account: ["account"],
});

type role = 'teacher' | 'Student'|'Admin'
export type User = {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  phone: string;
  photo: string;
  CIN: string;
  passport: string;
  role: role;
}
type UseAccountQueryOptions = UseQueryOptions<User>;

export const useAccount = (queryOptions: UseAccountQueryOptions = {}) => {
   const query = useQuery({
     queryKey: accountKeys.account.queryKey,
     queryFn: async () => {
       const response = await Axios.get('/auth/info');
       return response?.data;
     },
     ...queryOptions,
   });
   const isAdmin = query.data?.role === 'Admin';
   return { isAdmin, ...query };
};

