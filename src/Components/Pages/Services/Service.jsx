import React from 'react';
import {Link} from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { useContext } from 'react';
import { GlobalAuthContext } from '../../Provider/AuthProvider';
const Service = ({service}) => {
    const {user} = useContext(GlobalAuthContext)
 useEffect(()=>{
    Aos.init()
 })
    return (
        <div className=' border-[2px] flex flex-col border-gray-200 md:h-[500px] relative' data-aos = 'fade-right'>
<img src={service.image} className='md:h-60 w-full'  alt="" />
<div className='py-2 p-5 '>
    <p className="text-blue-600 text-xl font-medium">${service.price}</p>
    <h2 className="text-black text-2xl font-medium">{service.name}</h2>
    <div className="flex-grow">
    {
        service.description.length > 140 ? <p className=''>{service.description.slice(0,140)}...</p>
        :
        <p className='my-2'>{service.description}</p>
    }
    </div>
    <div className='py-2 md:absolute bottom-0 flex justify-center items-start'><Link to = {`/service/details/${service.id}`} className=''><button className='px-4  py-2 w- text-white md:ml-[104px]  bg-black'>Show details</button></Link></div>
</div>
        </div>
    );
}

export default Service;
