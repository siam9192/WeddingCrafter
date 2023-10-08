import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Blog from './blog';
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <>
        <Helmet>
            <title>WeddingCrafts || Blogs</title>
        </Helmet>
        <div className='max-w-7xl mx-auto font-poppins md:px-0 px-2'>
            <Navbar></Navbar>
<div className="grid lg:grid-cols-2 gap-5 pb-20">
 {
    blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
 }
</div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default Blogs;
