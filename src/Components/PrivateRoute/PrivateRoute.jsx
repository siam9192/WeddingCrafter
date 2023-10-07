import React from 'react';
import { useContext } from 'react';
import { GlobalAuthContext } from '../Provider/AuthProvider';
import { Navigate,useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(GlobalAuthContext);
    const {pathName} = useLocation();
    if(loading){
        return <div className='min-h-[90vh] flex justify-center items-center '>
<span class="loading loading-spinner text-7xl text-primary loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
   else{
  return  <Navigate to = '/login' state={pathName}></Navigate>
   }
}

export default PrivateRoute;
