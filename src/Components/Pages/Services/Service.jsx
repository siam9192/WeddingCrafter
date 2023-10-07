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
        <div className='p-5 border-[2px] border-gray-200 ' data-aos = 'fade-right'>
<img src={service.image} className='md:h-60 w-full rounded-lg'  alt="" />
<div className='py-2'>
    <p className="text-blue-600 text-xl font-medium">{service.price}$</p>
    <h2 className="text-black text-2xl font-medium">{service.name}</h2>
    {
        service.description.length > 140 ? <p className=''>{service.description.slice(0,140)}...</p>

        :
        <p className=''>{service.description}</p>
    }
    <div className='text-center pt-5'><Link to = {`/service/details/${service.id}`}><button className='px-4 py-2 text-white bg-black'>Show details</button></Link></div>
</div>
        </div>
    );
}

export default Service;
