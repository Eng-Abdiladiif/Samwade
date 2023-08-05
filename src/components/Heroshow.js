import React from 'react'
import showimage  from "../../public/2.png"
import Image from 'next/image'
import Link from 'next/link'
import {AiFillFacebook}  from "react-icons/ai"
import {BsWhatsapp,BsInstagram, BsTwitter}  from "react-icons/bs"

function Heroshow() {
  return (
    <div>


        {/* main */}

        <div className='flex flex-col-reverse md:flex-row justify-center items-center space-x-5 space-y-5'>

            {/* left */}

            <div className='md:w-1/2 mb-20  space-y-3 px-4 '>

                <h1 className='text-3xl font-bold text-blue-600 font-Dan'>Samwade Digital servies</h1>
                <p className='px-3 font-DM text-sm'>waa shirkada ku shaqsya  online  taso adeegedu
                    yahay  dhisida qabaysta softwarda  iyo Qurxitooda iyadoo shaqada lagugu qabanayo hab hufan oo deg-degsiimo <br></br> leh
                </p>

                <div className='flex space-x-4 pl-3 my-2'>

                        <Link className='text-blue-700 text-xl hover:text-blue-500 transition-all duration-500' href= "">

                            <AiFillFacebook/>

                        </Link>
                        <Link className='text-green-700 text-xl hover:text-green-500 transition-all duration-500' href= "">

                            <BsWhatsapp/>

                        </Link>
                 
                        <Link className='text-pink-700 text-xl hover:text-pink-500 transition-all duration-500' href= "">

                            <BsInstagram/>

                        </Link>
                   
            
                        <Link className='text-blue-700 text-xl hover:text-blue-500 transition-all duration-500'href= "">

                            <BsTwitter/>

                        </Link>

                </div>
                <div className='my-2 pl-3'>

                    <button className='bg-blue-700 px-5 py-1 rounded-md '>

                        <Link className='text-sm text-white font-DM font-bold' href= '/products'>products</Link>
                    </button>
                </div>


            </div>
            {/* right */}

            <div className='mb-10'>
                <Image src={showimage} className='max-w-sm' width={0}  height={0} alt='image'/>
            </div>


        </div>




    </div>
  )
}

export default Heroshow