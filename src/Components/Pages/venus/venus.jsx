import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Marquee from "react-fast-marquee";
const Venus = () => {
    const [venus,setVenus] = useState([]);
    useEffect(()=>{
        fetch('/venus.json')
        .then(res => res.json())
        .then(data => setVenus(data))
    },[])
    console.log(venus)
    return (
        <div>
            <h1 className='text-3xl font-medium text-center text-black'>Popular Wedding Venues</h1>
            <div className='py-5'>
<Marquee>
{
    venus.map((venu,index)=> {
    
        return <div key={index} className='mx-2 relative'><img src={venu.image_url} className='w-full h-72' alt="" />
        <h1 className="text-2xl text-white font-semibold absolute bottom-2 right-1">{venu.name}</h1></div>
    })
}

</Marquee>
            </div>
        </div>
    );
}

export default Venus;
