import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookMark }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    
    return (
        <div>
            <h1 className='text-2xl font-semibold'>Total blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark}></Blog>)
            }
        </div>
    );
};

export default Blogs;