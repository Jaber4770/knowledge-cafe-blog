import './App.css'
import Blogs from './component/Blogs/Blogs'
import Navbar from './component/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex container mx-auto gap-10">
        <div className="left-condatiner w-[70%]">
          <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <div className='border-2 p-4 rounded-sm border-purple-500'>
            <h1 className='text-purple-500 text-2xl font-semibold'>Total Bookmark: 0</h1>
          </div>
          <div className='py-5 px-3 bg-gray-300 mt-5 rounded-sm text-black'>
            <h1 className='text-2xl font-semibold'>Reading Time: 0</h1>
            <div id=''>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
