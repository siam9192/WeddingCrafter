import React from 'react';
import Banner from '../Banner/Banner';
import {Outlet} from 'react-router-dom'
import Services from '../Services/Services';
import Venus from '../venus/venus';
import Advantage from '../Advantage/Advantage';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div >
            <Banner></Banner>
       <div className='mx-auto max-w-7xl overflow-hidden'>
       <Services></Services>
       <Venus></Venus>
       <Advantage></Advantage>
       </div>
       <Footer></Footer>
        </div>
    );
}

export default Home;
