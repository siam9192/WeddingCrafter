import React from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
const SignUp = () => {
    const [alert,setAlert] = useState('');
    const handleSignUp = (e) =>{
e.preventDefault();
setAlert('')
const form = new FormData(e.currentTarget);
const email = form.get('email');
const password = form.get('password');
console.log(email,password)
if(password.length < 6){
    setAlert('Password must be 6 charecters');
    return;
}
if(!/[A-z]/.test(password)){
setAlert('Password must have one Capital letter');
return;
}
    }
    return (
        <>
        <div className='flex justify-center items-center mt-2 md:mx-0 mx-2'>
        
            <form className='border-[2px] border-gray-300 md:w-1/3 w-full py-4 px-6 mt-14' onSubmit={handleSignUp}>
<h1 className='text-3xl text-black  text-center font-medium'>Sign up</h1>
<div className='py-5 space-y-8'>
<div className=''>
<h3 className='text-black font-medium pb-2 '>You name :</h3>
<input type="text" placeholder='Harry' className=' py-2 border-gray-700 px-1 border-[2px] w-full  placeholder:font-semibold  text-black' name='name' required/>
</div>
<div className=''>
<h3 className='text-black font-medium pb-2 '>Photo URL (optional) :</h3>
<input type="text" placeholder='URL' className='py-2 border-gray-700 px-1 border-[2px] w-full  placeholder:font-semibold text-black' name='photoUrl'/>
</div>
<div className=''>
<h3 className='text-black font-medium pb-2 '>Email:</h3>
<input type="text" placeholder='jack@gmail.com' className='py-2 border-gray-700 px-1 border-[2px] w-full  placeholder:font-semibold text-black' name='email' required/>
</div>
<div className=''>
<h3 className='text-black font-medium pb-2 '>Password :</h3>
<input type="text" name='password' placeholder='Password' className=' py-2 border-gray-700 px-1 border-[2px] w-full placeholder:font-semibold text-black' required/>
</div>

</div>
<div><button type="submit" className='w-full py-3  font-medium bg-blue-600 text-white'>Sign up</button></div>
{
    alert && <p className='text-red-500 my-2'>{alert}</p>
}
<p className="tex-black text-center py-3 font-medium">Already have an account ? <Link className='text-[#F9A51A]' to='/login'>Login</Link></p>

            </form>
            
        </div>
        <div className='flex flex-col items-center gap-3 justify-center py-2'>
          
        <h1 className="text-center font-semibold text-xl text-black">Sign up with</h1>
    </div>
        </>
    );
}

export default SignUp;
