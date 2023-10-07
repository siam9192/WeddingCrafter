import React from 'react';
import { useContext } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import GoogleLogo from '/google.png'
import { GlobalAuthContext } from '../../../Provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../../../Firebase/Firebase.config';
const Login = () => {
    const {userLogin} = useContext(GlobalAuthContext);
    const {state} = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) =>{
e.preventDefault()
const form = new FormData(e.currentTarget);
const email = form.get('email');
const password = form.get('password');
userLogin(email,password)
.then(res => {
  if(state){
    navigate(`${state}`)
  }
  else{
    navigate('/')
  }
}
)
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });

    }
    const googleLogin = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then(res => {
          if(state){
            navigate(`${state}`)
          }
          else{
            navigate('/')
          }
        })
    }
    return (

        <div>
             <div className='flex justify-center items-center mt-2 md:mx-0 mx-2'>
        <div className=' lg:w-1/3 md:w-1/2 w-full py-4 px-6 mt-16'>
        <form className='border-[2px] border-gray-200  py-4 px-6 ' onSubmit={handleLogin}>
            <h1 className='text-2xl text-black  text-center font-medium'>Welcome back again</h1>
<h1 className='text-2xl text-black  text-center font-medium'>Login</h1>
<div className='py-5 space-y-5'>

<div className=''>
<input type="text" placeholder='UserName or Email' className='py-2 border-gray-700 px-1 border-[2px] w-full placeholder:text-black placeholder:font-semibold text-black' name='email' required/>
</div>
<div className=''>
<input type="text" name='password' placeholder='Password' className=' py-2 border-gray-700 px-1 border-[2px] w-full placeholder:text-black placeholder:font-semibold text-black' required/>
</div>

</div>
<div><button type="submit" className='w-full py-3  font-medium bg-black text-white'>Login</button></div>
<p className="tex-black text-center py-3 font-medium">Don't have an account ? <Link className='text-[#F9A51A]' to='/sign-up'>Sign up</Link></p>

        </form>
        <div className='space-y-3'>
          
          <h1 className="text-center font-semibold text-xl text-black my-2">Sign up with</h1>
          <div className='w-full py-2 border-gray-600 border-[2px] flex justify-between md:pr-10 pl-2 hover:bg-gray-300' onClick={googleLogin}><img src={GoogleLogo} alt="" className='w-6' />
          <h3 className="text-black font-semibold text-xl">Sig up with google</h3></div>
      </div>
        </div>
    </div>
 
  </div>
        
        
    );
}

export default Login;
