import { FC, PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type AuthContextType = {
    isAuthenticated : boolean ;
    updateToken(token ?: string) : void ;
} 

export const AUTH_TOKEN_KEY= "token";

const AuthContext = createContext<AuthContextType|null>(null);


const  updateToken = (newToken?:string | null )=>{
    if (!newToken) {
        localStorage.removeItem(AUTH_TOKEN_KEY);
      } else {
        localStorage.setItem(AUTH_TOKEN_KEY, newToken);
      }
}

export const AuthProvider : FC<PropsWithChildren<unknown>> = ({children})=>{
  const [token,setToken] = useState(localStorage.getItem(AUTH_TOKEN_KEY) || null);

  const hundleUpdateToken =useCallback( (newToken :string) => {
    setToken(newToken);
    updateToken(newToken);
  },[setToken]);

  const value = useMemo(() => ({
    isAuthenticated: !!token,
    updateToken: hundleUpdateToken,
  }),[token,hundleUpdateToken]);

return(
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
);
};
export const useAuthContext = ()=>{
const [isLoading,setIsLoading] = useState(true);
useEffect(()=>{setIsLoading(false)},[]);
const context = useContext(AuthContext);
if(!context){
    throw new Error("useAuthContext must be used within AuthProvider");
};
const {isAuthenticated,updateToken} = context;
return {isAuthenticated,updateToken,isLoading};
}