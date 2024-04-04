import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext=createContext(null);
 const AuthProvider = ({children}) => {
 const [user,SetUser]=useState('');


  const CreateUSer=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
       SetUser(currentUser);
    });
    return ()=>{
        unsubscribe();
    }
  } ,[])
   const   AuthInfo={CreateUSer,signInUser,user};
    return (
        <AuthContext.Provider value={AuthInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes={
    children:PropTypes.node
}
