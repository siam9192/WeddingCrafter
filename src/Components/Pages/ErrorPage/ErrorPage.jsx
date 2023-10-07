import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const Error = useRouteError();
    console.log(Error)
    return (
        <div className='flex justify-center item-center min-h-[100vh] font-poppins'>
          <div className='my-32'>
          <h1 className="text-4xl text-black font-medium" >!Sorry {Error.status} {Error.statusText ? Error.statusText : "Page not Found"}</h1>
            <Link to = '/'><h2 className='text-blue-600 text-xl text-center'>Back to home</h2></Link>
          </div>
        </div>
    );
}

export default ErrorPage;
