import React from 'react'


function Footer() {


  return (
    <div>
        <div className='h-6 flex items-start' ><p className='text-gray-500 items-center justify-center flex ml-8'>India</p></div>
<div className="flex flex-col border-t pl-8 pr-8 bg-gray-200  border-slate-300 justify-center sm:flex-row sm:space-x-0 mb-3 md:flex-row md:justify-between ">
<div className=' text-gray-500 flex flex-row   space-x-5 justify-center mt-2 text-sm sm:text-base'>
<a href='https://about.google'>About</a>
<a href='https://ads.google.com'>Advertising</a>
<a href='https://www.google.com/intl/en_in/business/'>Business</a>
<a href='https://www.google.com/search/howsearchworks/?fg=1'>How Search works</a>
<a href=''></a>
</div>
<div className='text-gray-500 flex flex-row   space-x-5 justify-center mt-2 text-sm sm:text-base'>
<a href='https://policies.google.com/privacy'>Privacy</a>
<a href='https://policies.google.com/terms'>Terms</a>

</div>

</div>
<p className='text-xs text-center text-slate-500 mb-1'>
©2022 Google - <a href="https://policies.google.com/privacy?hl=en">Privacy Policy</a> - <a href="https://policies.google.com/terms">Terms of Service 

</a> </p>
    </div>
  )
}

export default Footer