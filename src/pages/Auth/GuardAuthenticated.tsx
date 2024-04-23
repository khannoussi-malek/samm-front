'use client';

import { ReactNode } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Loader } from './Loader';
import { useAuthContext } from './AuthContext';


export const GuardAuthenticated = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuthContext();
  const { pathname } = useLocation();
  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    const redirect =
      !pathname || ['/', '/logout'].includes(pathname)
        ? '/login'
        : `/login?redirect=${pathname}`;
    return <Navigate to={redirect} replace />;
  }

  return <>{children}</>;
};
