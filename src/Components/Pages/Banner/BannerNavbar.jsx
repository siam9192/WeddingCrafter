import React from 'react';
import {Link} from 'react-router-dom'
const BannerNavbar = () => {
    return (
        <div className='py-8 flex justify-between'>
            <div>
                <h1 className='md:text-4xl text-2xl text-white  font-poppins'>CeremonyCrafters</h1>
            </div>
            <ul className='flex justify-between text-xl text-white gap-4'>
<Link to='/'>Home</Link>
<Link to='/Event'>Events</Link>
<Link to = '/login'>Login</Link>
<Link to='/sign-up'>Sign up</Link>
            </ul>
        </div>
    );
}

export default BannerNavbar;
