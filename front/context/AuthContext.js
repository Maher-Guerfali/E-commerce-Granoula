import { createContext, useState, useEffect } from "react";
import { Magic } from "magic-sdk";
import { MAGIC_PUBLIC_KEY } from "../utils/urls";
import { useRouter } from "next/router";
import { OAuthExtension } from '@magic-ext/oauth';

const AuthContext = createContext();


let magic

export const AuthProvider = () => {
  const router = useRouter();






  /**
   * Log the user out
   */
  const logoutUser = async () => {
    try {
      await magic.user.logout();
      setUser(null);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  
  /**
   * If user is logged in, get data and display it
   */
 

  /**
   * Retrieve Magic Issued Bearer Token
   * This allows User to make authenticated requests
   */
  const getToken = async () => {
    try{
      const token = await magic.user.getIdToken()
      return token
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * Reload user login on app refresh
   */
  useEffect(() => {
       // magic = new Magic(MAGIC_PUBLIC_KEY)
       /*

       Delet down back top ! to fix errrosss

       !!!
       !!


       */
        const magic = new Magic(MAGIC_PUBLIC_KEY, {
          extensions: [new OAuthExtension()],
        });
        
        checkUserLoggedIn()
  }, []);

  return (
    <AuthContext.Provider value={{ user, logoutUser, loginUser, getToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};


export default AuthContext