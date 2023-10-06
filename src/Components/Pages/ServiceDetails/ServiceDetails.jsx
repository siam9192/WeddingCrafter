import React from 'react';
import {useLoaderData, useParams} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
const ServiceDetails = () => {
    const [service,setService] = useState({});
    const {id} = useParams()
const services = useLoaderData();

useEffect(()=>{
const find = services.find(i => i.id == id);
if(find){
    setService(find)
}
window.scrollTo(0,0)
},[])
console.log(service)
    return (
        <>
        <div className='max-w-7xl mx-auto font-poppins min-h-[100vh] lg:px-0 px-2'>
<Navbar></Navbar>
<div className='space-y-2 grid lg:grid-cols-2 gap-5  md:py-20 py-10'>
<div className='space-y-2'><img src={service.image} alt=""className='w-full h-full'/>
    
  </div>
<div className='space-y-2'>
<div className='border-b-[2px] border-gray-700'><h1 className=' text-black  text-xl'><span className='text-xl font-semibold  text-black'>Event: </span>{service.name}</h1></div>
    <div className='border-b-[2px] border-gray-700'><h1 className=' text-black  text-xl'><span className='text-xl font-semibold  text-black'>Description: </span>{service.description}</h1></div>
    <div className='border-b-[2px]  border-gray-700'><h1 className=' text-black  text-xl'><span className='text-xl text-black font-semibold '>Cost: </span>${service.price}</h1></div>
    <div className='border-b-[2px]  border-gray-700'><h1 className=' text-black text-xl'><span className='text-xl text-black font-semibold '>Total Cost: </span>${service.price + ((service.price/100)*10)} (+10% VAT included)</h1></div>
    <button className='bg-black w-full py-2 text-white text-center'>Add to favourite</button>
</div>
</div>
        </div>
        <Footer></Footer>

        </>

    );
}

export default ServiceDetails;
 