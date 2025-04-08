import React from 'react';

const BookMark = ({ book }) => {
    const { title} = book;
    return (
        <div className='p-2 bg-gray-200 mb-2 rounded-sm'>
            <h2 className='text-xl font-semibold'>{title}</h2>
        </div>
    );
};

export default BookMark;