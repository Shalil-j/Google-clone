import React from 'react'
import Head from "next/head"
import Shead from './component/shead'
import { useRouter } from 'next/router'
import Searchresult from './component/searchresult'



function search({result}) {
  const router = useRouter();

    console.log(result);
  return (
    <div className="flex flex-col item-center h-screen">
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
   
  const startindex = context.query.start || "0"  

  const data = await fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${context.query.term}&num=10 ${startindex}`, {
    "method": "GET",
    headers: {
    'X-User-Agent': 'desktop',
		'X-Proxy-Location': 'IN',
		'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.KEY,
    }
  
  
  }).then(response => response.json()).catch(err=>{console.log(err)});
  return{
    props:{
      result : data
    }
  }
}

