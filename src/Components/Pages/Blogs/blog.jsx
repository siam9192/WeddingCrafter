
import { useState } from 'react';
import {AiOutlineArrowRight,AiOutlineArrowUp} from 'react-icons/ai'
const Blog = ({blog}) => {
    const [toggle,setToggle] = useState(false);
    return (
        <div>
            <div>
                <img src={blog.image} alt="" className='w-full md:h-72' />
            </div>
            <div className='p-5'>
                <h1 className="text-2xl font-poppins font-semibold">
                    {blog.title}
                </h1>
<p>{!toggle ?  blog.description.slice(0,150) : blog.description}</p>
<div className='flex justify-center items-center text-blue-600 font-bold' >
    <div className='flex items-center' onClick={()=>{
    setToggle(!toggle)
}}>
    {!toggle ?
        <><h3>Read more</h3>
<AiOutlineArrowRight></AiOutlineArrowRight>
</>
:
<><h3>Read less</h3>
<AiOutlineArrowUp></AiOutlineArrowUp>
</>
}
</div>
</div>

            </div>
            
        </div>
    );
}

export default Blog;
