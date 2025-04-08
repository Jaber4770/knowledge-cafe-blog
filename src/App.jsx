import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Navbar from './component/Navbar'
import BookMark from './component/BookMark/BookMark';

function App() {

  const [bookMark, setBookMark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMark = (blog) => {
    setBookMark([...bookMark, blog]);
    const times = blog.reading_time[0];
    const time = parseInt(times);
    setReadingTime(readingTime + time);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex container mx-auto gap-10">
        <div className="left-condatiner w-[70%]">
          <Blogs handleBookMark={handleBookMark} ></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <div className='border-2 p-4 rounded-sm border-purple-500'>
            <h1 className='text-purple-500 text-2xl font-semibold'>Total Bookmark: {bookMark.length}</h1>
          </div>
          <div className='py-5 px-3 bg-gray-300 mt-5 rounded-sm text-black'>
            <h1 className='text-2xl font-semibold mb-5'>Reading Time: {readingTime}</h1>
            {
              bookMark.map(book=> <BookMark book={book}></BookMark>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
