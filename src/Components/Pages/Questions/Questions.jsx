import React from 'react';

const Questions = () => {
    return (
        <div>
            <h1 className="text-center font-semibold text-black">Frequently asked questions</h1>
            <div className="md:grid-grid-cols-2 my-8">
            <div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div class="collapse-title text-xl font-medium">
  What services do you offer for wedding events?
  </div>
  <div class="collapse-content"> 
    <p>We offer a comprehensive range of services, including wedding planning, coordination, venue selection, décor and design, vendor management, and more. We tailor our services to meet your specific needs.</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
            </div>
        </div>
    );
}

export default Questions;
