import React from 'react';
import { useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
import {FaUserCircle} from 'react-icons/fa'
import { useContext } from 'react';
import { GlobalAuthContext } from '../../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../../../Firebase/Firebase.config';

const BannerNavbar = () => {
    const [toggle,setToggle] = useState(false);
    const {user} = useContext(GlobalAuthContext);
    const handleLogOut = ()=>{
        signOut(auth);
    }
    return (
        <div className='md:py-8 py-4 flex justify-between md:bg-transparent   md:static  top-0 font-poppins '>
        <div>
            <h1 className='md:text-4xl text-3xl text-white font-semibold  font-poppins'>WeddingCrafter</h1>
        </div>
        <ul className={`flex  text-xl md:text-white md:space-x-2 md:block  md:static fixed md:bg-transparent bg-white md:flex-row flex-col md:px-0 md:py-0 px-20 text-black py-5 h-full md:spacey-0 space-y-3 top-14 md:duration-0 duration-500 ${!toggle ? 'left-[200%]' : 'right-2'}`}>

        <NavLink to="/"
  className={({isActive}) =>
    isActive ? "text-blue-600" : "" 
  }
>Home</NavLink>
<>

</>
{
!user ? <>
<Link to = '/login'>Login</Link>
<Link to='/sign-up'>Sign up</Link>
</>
: 
<>
<NavLink to="/planner"
  className={({isActive}) =>
    isActive ? "text-blue-600" : "" 
  }
>Planner</NavLink>
<NavLink to="/blogs"
  className={({isActive}) =>
    isActive ? "text-blue-600" : "" 
  }
>Blogs</NavLink>

<div className='md:inline-flex  items-center gap-2'>
<h1 className="text-xl font-semibold">{user.displayName}</h1>
{
    user.photoURL ? <img src={user.photoURL} alt="" className='w-10 h-10 rounded-full'/> : <div><FaUserCircle className='text-2xl'></FaUserCircle></div>
}
<button className='px-4 py-2 md:my-0 my-2 bg-blue-600 rounded-md' onClick={handleLogOut}>Log out</button>
</div>
</>


}

        </ul>
       <div className='md:hidden' onClick={()=>{
        setToggle(!toggle)
       }}>
       {
            toggle ? <RxCross2 className = 'text-3xl text-white'></RxCross2>
            :
            <GiHamburgerMenu className = "text-white text-3xl"></GiHamburgerMenu>
        }
       </div>
    </div>
    );
}

export default BannerNavbar;
