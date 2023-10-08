import React, { useContext } from 'react';
import { GlobalAuthContext } from '../Provider/AuthProvider';
import { Navigate,useLocation } from 'react-router-dom';
const PrivateRoute2 = ({children}) => {
    const {user,loading} = useContext(GlobalAuthContext);
    const {state,pathname} = useLocation();
  
    if(user)
     {
   return <Navigate to ='/'></Navigate>;
    }
    else{
 return children ;
   }
    
}

export default PrivateRoute2;
