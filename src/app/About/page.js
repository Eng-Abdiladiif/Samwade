"use client"


import Image from 'next/image'
import React, { useEffect } from 'react'
import  images  from "../../../public/info.png"
import {GiReturnArrow}  from "react-icons/gi"
import Aos  from "aos"
import  "aos/dist/aos.css"

function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        Aos.init({duration: 3000})
    })
  return (
    <div className='max-w-3xl mx-auto p-4 mt-10'  >

    {/* main */}
    <div className='flex space-x-5 justify-center items-center my-5'
    data-aos = "fade-up">
        <h1 className='font-DM font-bold text-md text-blue-700 '>Info company</h1>
        <GiReturnArrow className='text-2xl text-blue-700'/>
    </div>

    <div className='flex flex-col md:flex-row justify-between space-x-10 items-center over-flow-hidden'
    data-aos = "fade-up">



        {/* left */}
        <div className='w-1/2'>

            <Image src={images} className='max-w-sm' width={0} height={0} alt='image'/>


        </div>
        {/* right */}
        <div className='space-y-4 ' >

            <h1 className='text-2xl font-DM text-blue-700 tracking-normal pl-4 font-semibold  '>About Sam-wade company</h1>

        <h1 className='px-3 font-DM text-sm leading-7'>waa shirkada ku shaqsya  online  taso adeegedu
                yahay  dhisida qabaysta softwarda  iyo Qurxitooda iyadoo shaqada lagugu qabanayo hab hufan oo deg-degsiimo 
                waxan jira oo ka shaqeeya xirfoodlay  xirfada u leh shaqaday qabanayaan  hab hufan kugu qabanayaan
                waxan shirkada u shaqaysa hab digita ah  Online iyo offline adeegayad ay qabto wax ka mid ah:- 
                <span className='text-blue-800 font-bold'>[web-dev, web-design, graphic-design, digital-marketing, traning, Bootcamp]</span>
            </h1>


        </div>


    </div>


</div>
  )
}

export default page