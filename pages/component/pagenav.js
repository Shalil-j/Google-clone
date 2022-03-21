import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link'
import { useRouter } from 'next/router'

function Pagenav() {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;
  return (
    <div>
    <div className='flex flex-row justify-center items-center space-x-40 md:ml-24 md:justify-start md:space-x-60 mt-5'>
        {startIndex >= 10 &&(
             <Link href={`/search?term=${router.query.term}&start=${startIndex - 10 }`}>
             <div className='text-gray-700 items-center cursor-pointer hover:text-blue-700 font-semibold'>
             <ChevronLeftIcon />
            <p>Previous</p>
            </div>
             </Link>
        )}
        <Link href={`/search?term=${router.query.term}&start=${startIndex + 10 }`}>
        <div className='text-gray-700 items-center cursor-pointer hover:text-blue-700 font-semibold'>
            <ChevronRightIcon/>
            <p>Next</p>
        </div>
        </Link>
    </div>
    <p className='text-xs text-center text-slate-500 mb-1'>
©2022 Google - <a href="https://policies.google.com/privacy?hl=en">Privacy Policy</a> - <a href="https://policies.google.com/terms">Terms of Service 

</a> </p>
    </div>
  )
}

export default Pagenav