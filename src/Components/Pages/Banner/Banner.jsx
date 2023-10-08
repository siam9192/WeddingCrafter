import { Link } from 'react-router-dom';
import './Banner.css'
import BannerNavbar from './BannerNavbar';
const Banner = () => {
 
    return (
        <div className="banner min-h-[90vh]">
<div className='max-w-7xl mx-auto lg:px-0 px-2'>
<BannerNavbar></BannerNavbar>
<div className='grid lg:grid-cols-2 grid-cols-1 font-poppins'>
   <div className='space-y-4 my-10'> <h1 className="lg:text-7xl  text-5xl text-white">
   Unlocking Love Stories: Your Dream Wedding Awaits!
    </h1>
    <p className='text-white font-poppins'>we understand that your wedding day is one of the most significant moments in your life. It's a celebration of love, commitment, and the beginning of a beautiful journey together. With that in mind, we believe that every wedding should be a reflection of your unique love story, dreams, and personal style</p>
   <Link to='/planner'>
   <button className='px-5 text-xl  md:py-5 py-3  text-white my-3 bg-blue-600 hover:bg-black hover:border-[2px] border-white'>Explore Planner</button>
   </Link>
    </div>
</div>
<div className='flex-1'></div>
</div>
        </div>
    );
}

export default Banner;
