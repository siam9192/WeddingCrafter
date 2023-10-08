import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer lg:px-52 lg:py-32 md:px-32 md:py-16 px-10 py-8 bg-neutral text-white font-poppins flex flex-col justify-center items-center">
      
        <h1 className='text-3xl text-white font-medium text-center'>WeddingCrafter</h1>
    <div className='text-white text-center'>
      <nav className='flex gap-5 font-medium'>
        <Link to='/'>Home</Link>
        <Link>Services</Link>
        <Link>About us</Link>
        <Link>Contact</Link>
      </nav>
      <div className='space-y-2'>
  <h2 >Our address : 
819-821 High Rd, London, N17 8ER</h2>
<h2 >Phone number : 235797587</h2>
<h2>Email : WeddingCrafter@gmail.com</h2>
</div>
    </div>

      </footer>
    );
}

export default Footer;
