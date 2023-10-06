import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Advantage = () => {
    const [advantage,setAdvantage] = useState([])

    useEffect(()=>{
        fetch("/advantage.json")
        .then(res => res.json())
        .then(data => setAdvantage(data))
        Aos.init()
    },[]) 
    return (
        <div className='font-poppins'>
        <h1 className="text-3xl font-semibold text-black text-center">Why you should hire us</h1>
<div className='grid lg:grid-cols-3 md:grid-cols-2 py-7 gap-5 md:mx-0 mx-6'>
{
advantage.map((ele,index) => {

return <div className='p-7 space-y-3 bg-black hover:scale-[0.9] duration-200 hover:bg-blue-700' data-aos = 'fade-left'>
    <h1 className="text-white text-3xl">
        {ele.title}
    </h1>
    <p className="text-white">{ele.description}</p>
</div>
})
}
</div>
    </div>

    );
}

export default Advantage;
