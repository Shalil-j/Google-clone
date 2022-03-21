import React, { useEffect } from 'react'
import lottie from 'lottie-web';
import AppsIcon from '@mui/icons-material/Apps';
import FaceIcon from '@mui/icons-material/Face';
import { useRef } from "react"
import { useRouter } from 'next/router'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImageIcon from '@mui/icons-material/Image';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SchoolIcon from '@mui/icons-material/School';



function Shead() {

  // const all=()=>{
  //   router.push('./searchresult')
  // }

  const container=useRef(null)
  useEffect(()=>{
    lottie.loadAnimation({
      container:container.current,
      renderer:'svg',
      loop:true,
      autoplay:true,
      animationData:require("./keys/75752-google-icon.json")
    })
  },[])

  const router = useRouter();
  const searchinputref = useRef(null)
  const clear = () => {
    searchinputref.current.value = ""
  }

  const search = (event) => {
    // event.preventDefault();
    const term = searchinputref.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  }
  return (
    <div className='sticky top-0 bg-white'>
      <div className='flex flex-row p-1 items-center'>


        <div className='ml-3 mt-2 h-20 cursor-pointer' ref={container} onClick={()=>router.push('/')}></div>
        <div className='space-x-2'>
          <input
          onKeyPress={(e) =>{
            if(e.key==="Enter"){
              search();
            }}}
          type="text" ref={searchinputref} id="search" className='  focus:outline-none pl-5 flex-grow 
        focus:shadow-lg px-1 py-1 hover:shadow-xl focus-within:shadow-lg  rounded-full  border border-gray-200 m-2 sm:w-56 md:w-96 '/>
          <CloseIcon onClick={clear} className='h-10 cursor-pointer text-stone-400' />
          <SearchIcon onClick={search} className='  border-l-current  cursor-pointer h-10 text-stone-400 mr-3 ' />
        </div>
        <div className=' flex-grow'></div>
        <div className='space-x-5 p-3 hidden md:flex md:flex-row md:item-center  '>
          <AppsIcon />
          <FaceIcon />
        </div>


      </div>
      <div className='space-x-5 mt-0 item-center justify-center p-2 flex flex-row flex-grow md:justify-start md:ml-24'>
        <a  className='text-zinc-700 hover:text-blue-600 text-sm cursor-pointer' ><SearchIcon className='srcicon' />All</a>
        <a  className='text-zinc-700 hover:text-red-600 text-sm cursor-pointer'><ImageIcon className='srcicon' />Image</a>
        <a className='text-zinc-700 hover:text-green-600 text-sm cursor-pointer'><NewspaperIcon className='srcicon' />News</a>   
        <a href="https://scholar.google.com" className='text-zinc-700 hover:text-blue-600 text-sm cursor-pointer'><SchoolIcon className='srcicon' />Scholar</a>       
        <a className='text-zinc-700 hover:text-yellow-500 text-sm cursor-pointer'><MoreVertIcon className='srcicon' />More</a>
      </div>
    </div>
  )
}

export default Shead