import Head from "next/head";
import lottie from 'lottie-web';
import Header from "./component/header";
import Footer from "./component/footer";
// imports
import React, { useEffect } from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import CloseIcon from "@mui/icons-material/Close";
import { useRef } from "react";
import { useRouter } from "next/router";
// import  { useState } from "react";


export default function Home() {
 
  const container=useRef(null)
  useEffect(()=>{
    lottie.loadAnimation({
      container:container.current,
      renderer:'svg',
      loop:true,
      autoplay:true,
      animationData:require("../public/60238-google-cricket.json")
    })
  },[])


  const router = useRouter();
  const searchinputref = useRef(null);

  const clear = () => {
    searchinputref.current.value = "";
  };

  const search = (e) => {
    // e.preventDefault();
    const term = searchinputref.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col item-center h-screen">
      <Head>
        <title>Google</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/g.png" />
      </Head>
      <Header />
      
      <div className="flex flex-col items-center mt-20 flex-grow">
        {/* ----------------------google-------------------------- */}
        
        
        {/* <div>
          <Image src="/../public/google.png" width={320} height={105} />
        </div> */}
        <div className="absoulte top-0 z-10 h-40" ref={container}></div>

        
        {/*------------------------search box -------------------------- */}
        <div
          className="space-x-4 flex w-full mt-5 max-w-xl h-10
    focus:shadow-lg hover:shadow-xl focus-within:shadow-lg  rounded-full  border border-gray-200 m-3 
    px-5 py-3 sm:max-w-xl lg:max-w-2xl items-center"
        >
          <SearchIcon
            onClick={search}
            className="h-10  text-stone-400 ml-3 cursor-pointer hover:-translate hover:scale-110 duration-300 hover:text-slate-600"
          />
          <input
            type="text"
           
            ref={searchinputref}
            onKeyPress={(e) =>{
            if(e.key==="Enter"){
              search();
            }}}
            className="focus:outline-none flex-grow"
          />
          <p>
            <CloseIcon
              onClick={clear}
              disabled={!searchinputref?"trube":""}
              className="h-10 text-stone-400 hover:-translate hover:scale-110 duration-300 hover:text-slate-600 "
              
            />
          </p>
          <MicIcon className="h-10 text-stone-400 mr-3 hover:text-red-400" />
          <p></p>
        </div>
        {/* buttons */}
        {/*  */}
        <div className="flex flex-col space-y-3 justify-center sm:flex-row sm:mt-3  sm:space-x-3 sm:space-y-0 sm:justify-between">
          <button
            type="submit"
            onClick={search}
            className="bg-white hover:border border-gray-200 text-gray-800  rounded-md py-2 px-4  "
          >
            Google search
          </button>
          <button
            type="button"
            className="bg-white hover:border border-gray-200 text-gray-800  rounded-md py-2 px-4  "
          >
            <a href="https://www.google.com/doodles">I'm Feeling lucky</a>
          </button>
        </div>
      </div>
      <Footer />

      <></>
    </div>
  );
}
// export const keys=term
// console.log(keys)