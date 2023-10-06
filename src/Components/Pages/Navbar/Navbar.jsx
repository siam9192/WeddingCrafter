import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
const Navbar = () => {
    const [toggle,setToggle] = useState(false)
    return (
        <div className='md:py-8 py-4 flex justify-between md:bg-transparent bg-white  md:static sticky top-0'>
        <div>
            <h1 className='md:text-4xl text-3xl text-black font-semibold  font-poppins'>WeddingCrafters</h1>
        </div>
        <ul className={`flex md:justify-between text-xl text-black md:space-x-2 md:block  md:static fixed md:bg-transparent bg-white md:flex-row flex-col md:px-0 md:py-0 px-20  py-5 h-full md:spacey-0 space-y-3 top-14 md:duration-0 duration-500 ${!toggle ? 'left-[200%]' : 'right-2'}`}>
<Link to='/'>Home</Link>
<Link to='/favourites'>Favourites</Link>
<Link to = '/login'>Login</Link>
<Link to='/sign-up'>Sign up</Link>
<Link to='/about'>About</Link>
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
