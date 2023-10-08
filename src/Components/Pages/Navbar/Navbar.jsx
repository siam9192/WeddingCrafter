import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaUserCircle} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
import { useContext } from 'react';
import { GlobalAuthContext } from '../../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.config';
const Navbar = () => {
    const {user} = useContext(GlobalAuthContext)
    const [toggle,setToggle] = useState(false);
    const handleLogOut = ()=>{
        signOut(auth);
    }
    return (
        <div className='md:py-8 py-4 flex justify-between md:bg-transparent bg-white  md:static sticky top-0'>
        <div>
            <h1 className='md:text-4xl text-3xl text-black font-semibold  font-poppins'>WeddingCrafter</h1>
        </div>
        <ul className={`flex md:justify-between z-10 text-xl text-black md:space-x-2 md:block  md:static fixed md:bg-transparent bg-white md:flex-row flex-col md:px-0 md:py-0 px-20  py-5 h-full md:spacey-0 space-y-3 top-14 md:duration-0 duration-500 ${!toggle ? 'left-[200%]' : 'right-2'}`}>
      
        <NavLink to="/"
  className={({isActive}) =>
    isActive ? "text-blue-600" : "text-black" 
  }
>Home</NavLink>
<NavLink to="/planner"
  className={({isActive}) =>
    isActive ? "text-blue-600" : "text-black" 
  }
>Planner</NavLink>

<NavLink to="/blogs"
  className={({isActive}) =>
    isActive ? "text-blue-600" : "text-black" 
  }
>Blogs</NavLink>
{
!user ? <>
<Link to = '/login'>Login</Link>
<Link to='/sign-up'>Sign up</Link>
</>
: 
<>

<div className='md:inline-flex  items-center gap-2'>
<h1 className="text-xl font-semibold">{user.displayName}</h1>
{
    user.photoURL ? <img src={user.photoURL} alt="" className='w-10 h-10 rounded-full'/> : <div><FaUserCircle className='text-2xl'></FaUserCircle></div>
}
<button className='px-4 py-2 md:my-0 my-2 bg-blue-600 text-white rounded-md' onClick={handleLogOut}>Log out</button>
</div>
</>


}

        </ul>
       <div className='md:hidden' onClick={()=>{
        setToggle(!toggle)
       }}>
       {
            toggle ? <RxCross2 className = 'text-3xl text-black'></RxCross2>
            :
            <GiHamburgerMenu className = "text-black text-3xl"></GiHamburgerMenu>
        }
       </div>
    </div>
    );
}

export default Navbar;
