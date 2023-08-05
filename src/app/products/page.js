"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import productImage from "../../../public/onep.png"
import Link from 'next/link'
import one  from "../../../public/one.png"
import Two  from "../../../public/two.png"
import  {BsArrowReturnLeft}  from "react-icons/bs"
import  Aos   from "aos"
import   "aos/dist/aos.css"
import Clients from '@/components/Clients'

function page() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {


        Aos.init({duration: 3000})
    })
  return (

    <>
    <div className='max-w-4xl mx-auto p-4 mt-5'
    >



        {/* left */}
        <div className='flex flex-col md:flex-row justify-between items-center'
        data-aos = "fade-up">
            {/* top */}
            <div>
                <Image src={productImage} className='md:max-w-sm ' width={0} height={0}  alt='image'/>
            </div>
            {/* down */}
            <div className='md:w-1/2 px-4 md:px-0 space-y-3'>

                <h1 className='text-xl font-Lilita font-bold text-blue-600'>Products Anu Dhisnay</h1>
                <p className='text-sm font-DM text-gray-700 leading-7'>waxaa halakn kugu diyaar ah inaad Dhehato 
                    projects kala duwan Ee shirkada <span>samwade Digita services</span>
                    projects yadan hoos ku xusan
                </p>
            </div>


        </div>

        {/*  right*/}

        <div  className='grid grid-cols-1 md:grid-cols-1 gap-5 '>


            {/* one */}

            <div className='flex flex-col md:flex-row justify-around items-center space-x-16 space-y-5'
            data-aos = "fade-right">

                {/* left */}
                <div className='shadow-2xl shadow-pink-600 border-2 border-pink-700 rounded-md'>
                    
                    <Link className='' href="https://ai-madiina-bny95fl9f-eng-abdiladiif.vercel.app/">

                        <Image src={one} className='md:max-w-sm '  width={0} height={0} alt='image'/>
                    </Link>
                </div>
                {/* right */}

                <div className='md:w-1/2 px-4'>
                    <p className='font-DM leading-7'><span className='bg-blue-400 text-white'>Al madiina</span>  E-commerce waa small project 
                        kaso  ku shaqaynaya Qab onlien ah weli Dhamaytrikiisa lagu
                        Gudo jiraa waxan laga helay Dhaman dharka kala duwan
                       Ee <span>[raga & dumarka]</span>
                    </p>
                    <div className='flex space-x-3  items-center'>

                        <BsArrowReturnLeft className='text-xl mt-2 text-blue-700 '/>
                        <h1 className='font-bold font-Lilita text-blue-700'>Visit</h1>


                    </div>
                </div>



            </div>

            {/* two */}
            <div className='flex flex-col md:flex-row justify-around items-center space-x-16 space-y-5'
            data-aos = "fade-left">

                {/* left */}
                <div className='shadow-2xl shadow-pink-600 border-2 border-pink-700 rounded-md'>
                    
                    <Link className='' href="https://ai-madiina-bny95fl9f-eng-abdiladiif.vercel.app/">

                        <Image src={Two} className='md:max-w-sm '  width={0} height={0} alt='image'/>
                    </Link>
                </div>
                {/* right */}

                <div className='md:w-1/2 px-4'>
                    <p className='font-DM leading-7 '> <span className='bg-blue-500 text-white'> Al-baraka  </span> E-commerce waa small project 
                        kaso  ku shaqaynaya Qab onlien ah weli Dhamaytrikiisa lagu
                        Gudo jiraa waxan laga helay Dhaman dharka kala duwan
                       Ee <span>[raga & dumarka]</span>
                    </p>
                    <div className='flex space-x-3  items-center'>

                        <BsArrowReturnLeft className='text-xl mt-2 text-blue-700 '/>
                        <h1 className='font-bold font-Lilita text-blue-700'>Visit</h1>


                    </div>
                </div>



            </div>


        </div>

        



    </div>

    <Clients/>
    </>
  )
}

export default page