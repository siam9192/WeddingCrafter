import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Questions = () => {
  const [questions,setQuestions] = useState([]);
  useEffect(()=>{
    fetch('/questions.json')
    .then(res => res.json())
    .then(data => setQuestions(data));
  },[])
    return (
        <div>
            <h1 className="text-center font-semibold text-black text-3xl ">Frequently asked questions</h1>
            <div className="grid md:grid-cols-2 py-8 gap-5">
              {
questions.map((item,index)=>{
return <div tabIndex={index} className="collapse collapse-arrow border border-base-300 bg-base-200">
<div className="collapse-title text-xl font-medium">
  {item.question}
</div>
<div className="collapse-content"> 
  <p>{item.answer}</p>
</div>
</div>
})

}
</div>

            </div>
        
    );
}

export default Questions;
