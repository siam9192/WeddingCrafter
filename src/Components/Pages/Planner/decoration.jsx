import React from 'react';

const Decoration = ({decoration}) => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 '>
            {
         decoration.map((item,index)=>{

        return <div className='space-y-2' key={index}>
            <img src={item.image_url} alt="" className='md:h-72 w-full'/>
            <h2 className="text-black text-xl">{item.name}</h2>
            <h3 className='text-black font-bold'>Cost : ${item.cost}</h3>
            <p>{item.description}</p>
        </div>
         })
            }
        </div>
    );
}

export default Decoration;
