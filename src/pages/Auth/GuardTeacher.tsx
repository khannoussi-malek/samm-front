'use client';

import { ReactNode } from 'react';
import { Loader } from './Loader';
import { ErrorPage } from '../../components/ErrorPage';
import { useAccount } from './service';


export const GuardTeacher = ({ children }: { children: ReactNode }) => {
  const account = useAccount();
  
  if (account.isLoading) {
    return <Loader />;
  }
  
  if (!account.isTeacher) {
    return <ErrorPage errorCode={403} />;
  }
  return <>{children}</>;
  
};
