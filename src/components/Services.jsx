"use client"

import React, { useEffect } from 'react'
import web  from "../../public/web.png"
import graphic from "../../public/graphic.png"
import marketing from "../../public/marketing.png"
import bootcamp from "../../public/bootcamp.png"
import Image from 'next/image'
import  Aos  from "aos"
import "aos/dist/aos.css"
import   {BsTools}  from "react-icons/bs"

function Services() {

    useEffect(() => {

        Aos.init({duration:1000})
    })
  return (
    <div className='max-w-2xl mx-auto pl-20 mt-10'>


           {/* main */}

           <div className='my-10 text-center flex  space-x-5  mx-auto pl-20'>

            <h1 className='font-DM font-semibold text-md text-blue-600'> Services</h1>
            <BsTools className='text-md text-blue-500'/>
           </div>
           <div>


              {/* one */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center '>

                {/* 1 */}
                <div className='shadow-2xl shadow-gray-800 w-[250px] h-[250px]
                flex flex-col justify-center items-center space-y-5 rounded-md
                border-2 border-blue-700 hover:-translate-y-2 transition-all duration-500'
                data-aos = "fade-left">

                    <div className='mr-10'>
                        <Image src={web} className='w-20 h-20 '  width={0}  height={0} alt='web'/>

                    </div>
                    <div className='text-center px-3 '>

                        <h1 className='font-DM text-md font-bold'>Dhisida , Qurxinta website kale duwan </h1>
                    </div>

                </div>
                {/* 2 */}
                <div className='shadow-2xl shadow-gray-800 w-[250px] h-[250px]
                flex flex-col justify-center items-center space-y-5 rounded-md
                border-2 border-blue-700 hover:-translate-y-2 transition-all duration-500'
                data-aos = "fade-right">

                    <div>
                        <Image src={graphic} className='w-20 h-20'  width={0}  height={0} alt='web'/>

                    </div>
                    <div className='text-center px-3 '>

                        <h1 className='font-DM text-md  font-bold'>nashqadaynta , Qurxinta logon boodhaka kale duwan </h1>
                    </div>

                </div>
                {/* 3 */}
                <div className='shadow-2xl shadow-gray-800 w-[250px] h-[250px]
                flex flex-col justify-center items-center space-y-5 rounded-md
                border-2 border-blue-700 hover:-translate-y-2 transition-all duration-500'
                data-aos = "fade-left">

                    <div>
                        <Image src={marketing} className='w-20 h-20'  width={0}  height={0} alt='web'/>

                    </div>
                    <div className='text-center px-3 '>

                        <h1 className='font-DM text-md  font-bold'>Suuqa gaynta business iyado la isticmaly Technology kala duwan </h1>
                    </div>

                </div>

                {/* 4 */}
                <div className='shadow-2xl shadow-gray-800 w-[250px] h-[250px]
                flex flex-col justify-center items-center space-y-5 rounded-md
                border-2 border-blue-700 hover:-translate-y-2 transition-all duration-500'
                data-aos = "fade-right">

                    <div>
                        <Image src={bootcamp} className='w-20 h-20'  width={0}  height={0} alt='web'/>

                    </div>
                    <div className='text-center px-3 '>

                        <h1 className='font-DM text-md  font-bold'> Tababarada dhinaca technology iyado lagu dhiirgelinayo inanu la talabsan 
                        waqacan iyo ilbaxnmada technology </h1>
                    </div>

                </div>



              </div>
            


           </div>



    </div>
  )
}

export default Services