'use client';

import { ReactNode } from 'react';
import { Loader } from './Loader';
import { ErrorPage } from '../../components/ErrorPage';
import { useAccount } from './service';


export const GuardAdmin = ({ children }: { children: ReactNode }) => {
  const account = useAccount();
  console.log({isAdmin:account.isAdmin, isLoading:account.isLoading})
  
  if (account.isLoading) {
    return <Loader />;
  }
  
  if (!account.isAdmin) {
    return <ErrorPage errorCode={403} />;
  }
  return <>{children}</>;
  
};
