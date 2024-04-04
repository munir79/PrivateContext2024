import { createContext } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext=createContext(null);
 const AuthProvider = ({children}) => {
  const CreateUSer=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }
   const   AuthInfo={CreateUSer,signInUser};
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
