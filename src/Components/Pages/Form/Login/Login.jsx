import React from 'react';
import {Link} from 'react-router-dom'
const Login = () => {
    return (
        <div>
             <div className='flex justify-center items-center mt-2 md:mx-0 mx-2'>
        
        <form className='border-[2px] border-gray-200 md:max-w-[500px] w-full py-4 px-6 mt-32'>
            <h1 className='text-2xl text-black  text-center font-medium'>Welcome back again</h1>
<h1 className='text-2xl text-black  text-center font-medium'>Login</h1>
<div className='py-5 space-y-14'>

<div className=''>
<input type="text" placeholder='UserName or Email' className='py-2 border-gray-700 px-1 border-[2px] w-full placeholder:text-black placeholder:font-semibold text-black' name='email' required/>
</div>
<div className=''>
<input type="text" name='password' placeholder='Password' className=' py-2 border-gray-700 px-1 border-[2px] w-full placeholder:text-black placeholder:font-semibold text-black' required/>
</div>

</div>
<div><button type="submit" className='w-full py-3  font-medium bg-blue-600 text-white'>Login</button></div>
<p className="tex-black text-center py-3 font-medium">Don't have an account ? <Link className='text-[#F9A51A]' to='/sign-up'>Sign up</Link></p>

        </form>
        
    </div>
    <div className='flex flex-col items-center gap-3 justify-center py-2'>
        <div className='flex  items-center gap-3 md:w-1/3 px-4'>
    <div className='border-t-[2px] w-full border-gray-300'></div>
    <h1 className='text-black font-semibold'>Or</h1>
    <div className='border-t-[2px] w-full border-gray-300'></div>
    </div>
   
</div>
        </div>
    );
}

export default Login;
