import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import AppsIcon from '@mui/icons-material/Apps';
import FaceIcon from '@mui/icons-material/Face';




function Header() {
  return (

<div className='flex flex-row space-x-5 mt-3 justify-end mr-8 items-center'> 
    <div>
    <a href='https://mail.google.com' className='text-sm sm:text-base '> 
    <EmailIcon className='text-red-500 text-sm sm:text-base ' /> Gamil
    </a></div>
    <div >
        <a href="https://www.google.co.in/imghp" className='text-sm sm:text-base'>
            <ImageSearchIcon className='text-blue-500 text-sm sm:text-base '/>
         Image
        </a>
    </div>
    <div>
    <AppsIcon  className='text-md'/>
    </div>
    <div>
    <FaceIcon  />
    </div>

</div>

  )
}

export default Header