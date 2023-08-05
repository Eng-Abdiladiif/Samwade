"use client"


import React, { useEffect } from 'react'
import  Datas from "../context/ClientsData.json"
import Image from 'next/image'
import  Aos   from "aos"
import   "aos/dist/aos.css"
function Clients() {

     useEffect(() => {

        Aos.init({duration:100})
     })
  return (
    <div className='max-w-4xl mx-auto p-4 mt-10'>


        {/* left */}
        <div className='my-10 text-center '>

            <h1 className='font-DM text-pink-500 font-bold text-md'>Clients</h1>


        </div>
        {/* right */}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

            {

                Datas.map((data) => (

                    <div key={data.id} className='w-[250px] h-[200px] bg-white shadow-2xl shadow-gray-500 flex flex-col mx-auto 
                    border-2 border-pink-500  rounded-bl-3xl rounded-tr-3xl'
                    data-aos = "fade-left">

                        <div className='px-3'>

                            <h1 className='text-blue-700 font-bold  '>{data.Name}</h1>
                            <p className='text-sm text-gray-500 font-DM font-semibold'>@{data.nickname}</p>

                        </div>
                        <div className='text-center p-5 '>

                            <p className='font-DM text-sm text-gray-700'>{data.descrption}</p>
                        </div>


                    </div>
                ))



            }


        </div>




    </div>
  )
}

export default Clients