import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { createContext } from 'react';
import auth from '../../Firebase/Firebase.config';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const GlobalAuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    const createUser = (email,password)=>{
        setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)
    }
    const userLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const inspector = onAuthStateChanged(auth,presentUser =>{
            setUser(presentUser)
            setLoading(false)
        })
        return () => {
            inspector()
        }
    },[])
    return (
        <div>
            <GlobalAuthContext.Provider value={{user,loading,createUser,userLogin}} >
            {children}
            </GlobalAuthContext.Provider>
        </div>
    );
}

export default AuthProvider;
