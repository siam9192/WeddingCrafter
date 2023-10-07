import React from 'react';

const WedVenues = ({venues}) => {

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 '>
            {
         venues.map((item,index)=>{

        return <div className='space-y-2' key={index}>
            <img src={item.image_url} alt="" className='md:h-72'/>
            <h2 className="text-black text-xl">{item.name}</h2>
            <h3 className='text-black font-bold'>Cost : ${item.cost}</h3>
            <p>{item.description}</p>
        </div>
         })
            }
        </div>
    );
}

export default WedVenues;
