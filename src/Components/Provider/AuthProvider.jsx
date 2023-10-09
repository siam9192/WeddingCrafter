import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { createContext } from 'react';
import auth from '../../Firebase/Firebase.config';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
    const handleUser = (currentUser)=>{
        setUser(currentUser)
    }
    useEffect(()=>{
        const inspector = onAuthStateChanged(auth,presentUser =>{
            console.log(presentUser)
            setUser(presentUser)
            setLoading(false);
        })
        return () => {
            inspector()
        }
    },[])
    return (
        <div>
            <GlobalAuthContext.Provider value={{user,handleUser,loading,createUser,userLogin}} >
            {children}
            </GlobalAuthContext.Provider>
        </div>
    );
}

export default AuthProvider;
