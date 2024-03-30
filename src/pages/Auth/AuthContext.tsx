import { createContext } from "react";

export type AuthContextType = {
    isAuthenticated : boolean ;
    updateToken(token ?: string) : void ;
} 

const AUTH_TOKEN_KEY= "token";

const AuthContext = createContext<AuthContextType|null>(null);


const  updateToken = (newToke?:string | null )=>{
    if (!newToken) {
        localStorage.removeItem(AUTH_TOKEN_KEY);
      } else {
        localStorage.setItem(AUTH_TOKEN_KEY, newToken);
      }

}