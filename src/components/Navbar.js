"use client"


import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import  logo   from "../../public/1.png"
import {FiMenu}  from  "react-icons/fi"
import {IoMdClose}  from "react-icons/io"
import   Aos   from "aos"
import  "aos/dist/aos.css"

function Navbar() {

    const [open , setOpen]  = useState(false)

    useEffect(() => {

        Aos.init({duration: 3000})
    })
  return (
    <div className='max-w-4xl mx-auto p-4 stick'>


        {/* main */}
        <div className='flex  justify-between items-center'
        >
            {/* left  */}
            <div>

                {/* logo */}
                <Image src={logo} className='rounded-full w-20 h-20' width={0} height={0} alt='image'/>

            </div>

            <div className='z-50 cursor-pointer md:hidden'
            onClick={() => setOpen(!open)}
            >

                {

                    open ? <IoMdClose/> :  <FiMenu/>
                }




            </div>


        {/* right */}

        <div className='space-x-4 hidden md:flex'>

            <Link className='font-DM text-md font-bold hover:text-gray-600' href= '/'>Home</Link>
            <Link className='font-DM text-md font-bold hover:text-gray-600' href= '/products'>Products</Link>
            <Link className='font-DM text-md font-bold hover:text-gray-600' href= '/Traning'>Traning</Link>
            <Link className='font-DM text-md font-bold hover:text-gray-600' href= '/About'>About</Link>
            <Link className='font-DM text-md font-bold hover:text-gray-600' href= '/Contect'>contect</Link>
            
        </div>
        {/* mobile  appers */}

        <div className={`flex flex-col md:hidden absolute top-0 right-0
        h-screen w-40 justify-center opacity-60 items-center space-y-10 bg-white shadow-2xl shadow-gray-800
        ${open ? "flex" : "hidden"}`}
        data-aos = "fade-left" >

            <Link className='font-DM text-sm font-bold hover:text-gray-600' href= '/'>Home</Link>
            <Link className='font-DM text-sm font-bold hover:text-gray-600' href= '/products'>Products</Link>
            <Link className='font-DM text-sm font-bold hover:text-gray-600' href= '/Traning'>Traning</Link>
            <Link className='font-DM text-sm font-bold hover:text-gray-600' href= '/About'>About</Link>
            <Link className='font-DM text-sm font-bold hover:text-gray-600' href= '/Contect'>contect</Link>

            
        </div>



        </div>
        



    </div>
  )
}

export default Navbar