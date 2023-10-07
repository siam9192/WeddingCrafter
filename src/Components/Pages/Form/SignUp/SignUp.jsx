import React from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useContext } from 'react';
import GoogleLogo from '/google.png'
import { GlobalAuthContext } from '../../../Provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import auth from '../../../../Firebase/Firebase.config';
const SignUp = () => {
    const [alert,setAlert] = useState('');
    const {createUser} = useContext(GlobalAuthContext);
    
    const handleSignUp = (e) =>{
e.preventDefault();
setAlert('')
const form = new FormData(e.currentTarget);
const email = form.get('email');
const password = form.get('password');
const name = form.get('name');
let photoUrl = form.get('photoUrl');

if(!photoUrl){
    photoUrl = null;
}
if(password.length < 6){
    setAlert('Password must be 6 characters');
    return;
}
else if(!/[A-z]/.test(password)){
setAlert('Password must have one Capital letter');
return;
}
else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)){
    setAlert('Password must have one special characters')
}
createUser(email,password)
.then (res =>{
    updateProfile(auth.currentUser,{
        displayName:name,
        photoURL: photoUrl
    })
})
.catch(err=> console.log(err))

    }

    const googleSignUp = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider);

    }
    
    return (
        <>
        <div className='flex justify-center items-center mt-2 md:mx-0 mx-2 font-poppins'>
        <div className='md:w-1/3 w-full py-4 px-6 mt-14'>
            <form className='border-[2px] border-gray-300 px-4' onSubmit={handleSignUp}>
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
<div><button type="submit" className='w-full py-3  font-medium bg-black text-white'>Sign up</button></div>
{
    alert && <p className='text-red-500 my-2'>{alert}</p>
}
<p className="tex-black text-center py-3 font-medium">Already have an account ? <Link className='text-[#F9A51A]' to='/login'>Login</Link></p>

            </form>
            <div className='space-y-3'>
          
          <h1 className="text-center font-semibold text-xl text-black my-2">Sign up with</h1>
          <div className='w-full py-2 border-gray-600 border-[2px] flex justify-between md:pr-10 pl-2 hover:bg-gray-300' onClick={googleSignUp}><img src={GoogleLogo} alt="" className='w-6' />
          <h3 className="text-black font-semibold text-xl">Sig up with google</h3></div>
      </div>
        </div>
       
     </div>
            </>
    );
}

export default SignUp;
