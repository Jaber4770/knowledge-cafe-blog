import React from 'react';

const Blog = ({ blog, handleBookMark }) => {
    const { title, author_name, author_img, coverPhoto, hashtags, posted_date, reading_time } = blog;
    return (
        <div className='border-2 p-2 m-2 rounded-sm'>
            <img src={coverPhoto} alt="" />
            <div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-5  flex-1 mb-5'>
                        <img className='w-[10%] mt-2 rounded-full' src={author_img} alt="" />
                        <div>
                            <h2 className='font-bold'>{author_name}</h2>
                            <p className='text-gray-400'>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex-1 flex gap-2 justify-end'>
                        <p className=''>{reading_time}</p>
                        <svg onClick={() => handleBookMark(blog)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <div>
                    {hashtags.map((hash, index) => <span key={index} className='text-gray-400 pe-2'>{hash}</span>)}
                </div>
                <div>
                    <a className='underline text-purple-500' href='#'>Mark as read</a>
                </div>
            </div>
        </div>
    );
};

export default Blog;