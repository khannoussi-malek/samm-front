'use client';

import { ReactNode } from 'react';
import { Loader } from './Loader';
import { ErrorPage } from '../../components/ErrorPage';
import { useAccount } from './service';


export const GuardStudent = ({ children }: { children: ReactNode }) => {
  const account = useAccount();
  
  if (account.isLoading) {
    return <Loader />;
  }
  
  if (!account.isStudent) {
    return <ErrorPage errorCode={403} />;
  }
  return <>{children}</>;
  
};
