import React from 'react'
import Pagenav from './pagenav'

function Searchresult({result}) {
  return (
    <div className='mt-3 p-3 justify-start w-fit md:w-8/12 md:ml-24'>
        <div>
            <p className ="text-sm text-gray-500 font-semibold">About {result.total}  result ({result.ts})</p>
        </div>

        {result.results?.map((results)=>(
            <div key={results.link} className='group-hover:underline mt-5'>
                <div>
                    <a href={results.link} className='text-sm '>{results.cite.domain}</a>
                    <a href={results.link} className='text-xl text-indigo-800'><h2>{results.title}</h2></a>
                </div>  
                   <p className='text-sm text-gray-700 line-clamp-2'>{results.description}</p>
            </div>
        ))}
        <Pagenav />
    </div>
  )
}

export default Searchresult

// items[0].