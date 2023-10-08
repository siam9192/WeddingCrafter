import React, { useState } from 'react';
import { useContext } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import GoogleLogo from '/google.png'
import { GlobalAuthContext } from '../../../Provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../../../Firebase/Firebase.config';
import { Helmet } from 'react-helmet';
const Login = () => {
    const {userLogin} = useContext(GlobalAuthContext);
    const [alert,setAlert] = useState('');
    const {state} = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) =>{
e.preventDefault()
setAlert('')
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
.catch((err) => {
    
    setAlert(err.message)
  
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
          <Helmet>
            <title>WeddingCrafter || Login</title>
          </Helmet> 
             <div className='flex justify-center items-center mt-2 md:mx-0 mx-2 font-poppins'>
        <div className=' lg:w-1/3 md:w-1/2 w-full py-4 px-6 md:mt-16 mt-6'>
        <form className=' py-4  ' onSubmit={handleLogin}>
            <h1 className='text-3xl my-4 text-black  text-center font-semibold'>Hey! Welcome back again</h1>
<h1 className='text-2xl text-black  text-center font-semibold'>Login</h1>
<div className='py-5 space-y-9'>

<div className=''>
<input type="email" placeholder='Email' className='py-2 border-gray-700 px-1 border-[2px] w-full placeholder:text-black placeholder:font-semibold text-black' name='email' required/>
</div>
<div className=''>
<input type="text" name='password' placeholder='Password' className=' py-2 border-gray-700 px-1 border-[2px] w-full placeholder:text-black placeholder:font-semibold text-black' required/>
</div>

</div>
<div><button type="submit" className='w-full py-3  font-medium bg-black text-white'>Login</button></div>
{
  alert && <p className="text-red-700 my-2">{alert}</p>
}
<p className="tex-black text-center py-3 font-medium">Don't have an account ? <Link className='text-[#F9A51A]' to='/sign-up'>Sign up</Link></p>

<p className="text-center text-black font-medium text-2xl py-2">Log in with</p>
<div className=' flex justify-center' onClick={googleLogin}>
  <div className='w-8 h-8 rounded-full bg-gray-200'>
  <img src={GoogleLogo} alt="" className='' />
  </div>
</div>
        </form>
      
        </div>
    </div>
 
  </div>
        
        
    );
}

export default Login;
