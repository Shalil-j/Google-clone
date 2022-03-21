import React from 'react'
import Head from "next/head"
import Shead from './component/shead'

import { useRouter } from 'next/router'
import Searchresult from './component/searchresult'
import { KEY } from './component/keys/keys'


function search({result}) {
  const router = useRouter();

    console.log(result);
  return (
    <div>
        <Head>
        <title>{router.query.term}-Google</title>
        <link rel="icon" href="/g.png" />   
        </Head>
        <Shead  className="drop-shadow-xl"/>
        <Searchresult result={result}/>
    </div>
  )
}

export default search;

export async function getServerSideProps(context){
  
  const useDummyData=true ; 
  const startindex = context.query.start || "0"  

  const data = await fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${context.query.term}&start=${startindex}`, {
    "method": "GET",
    "headers": {
      "x-user-agent": "desktop",
      "x-proxy-location": "IN",
      "x-rapidapi-host": "google-search3.p.rapidapi.com",
      "x-rapidapi-key": `${KEY}`
    }
  }).then(response => response.json()).catch(err=>{console.log(err)});
  return{
    props:{
      result : data
    }
  }
}

//     `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startindex}`
 
// https://customsearch.googleapis.com/customsearch/v1?key=
// ${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startindex}

