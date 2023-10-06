import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from './Service.jsx'
const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('/events.json')
        .then(res => res.json() )
        .then(data =>setServices(data))
    },[])
    
    return (
        <div className='py-6'>
            <h1 className="text-black text-4xl text-center font-semibold">Our <span className='text-blue-600'>Services</span></h1>

            <div className='py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:mx-0 mx-2'>
                {
                   services.map(item => <Service service = {item} key={item.id}></Service>)
                }
            </div>
        </div>
    );
}

export default Services;
