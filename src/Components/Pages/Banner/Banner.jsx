import './Banner.css'
import BannerNavbar from './BannerNavbar';
const Banner = () => {
    return (
        <div className="banner min-h-[90vh]">
<div className='max-w-7xl mx-auto lg:px-0 px-2'>
<BannerNavbar></BannerNavbar>
<div className='grid lg:grid-cols-2 grid-cols-1 font-poppins'>
   <div className='space-y-4 my-10'> <h1 className="lg:text-7xl md:text-5xl text-4xl text-white">
   Unlocking Love Stories: Your Dream Wedding Awaits!
    </h1>
    <p className='text-white font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit, consequuntur neque omnis necessitatibus modi assumenda tempore saepe recusandae possimus.</p>
    <button className='px-5 text-2xl  py-3  text-white bg-blue-600 hover:bg-black'>Explore Now</button>
    </div>
</div>
<div className='flex-1'></div>
</div>
        </div>
    );
}

export default Banner;
