import Image from 'next/image'
import React from 'react'
import  image   from "../../../public/traning.png"
import sw  from "../../../public/sw.png"
import sg from "../../../public/sg.png"
import sm from "../../../public/sm.png"



function page() {
  return (
    <div className='max-w-4xl mx-auto px-6 mt-10'>



          

         {/* main */}
         <div>


          {/* left */}
          <div className='flex flex-col md:flex-row justify-between items-center'>

            {/* one */}
            <div>

              <Image src={image} className='md:max-w-md  px-10'  width={0}  height={0}  alt='img'/>


            </div>
            {/* two */}

           <div className='md:w-1/2 px-5'>

           <h1 className='font-DM text-sm leading-7'>Company <span className='text-blue-500 font-bold'>Samwade</span> waxa kalo ka mid ah 
            adeegyad  uu qabto tababarda ganacsiga iyago loo maray 
            Online  waxa kalo qabtaa tababar lagu talo galay in lagu
            Dhiira geliyo dhalinyardu inay ku so biirto
            dhinaa iyo technlogy</h1>
           </div>
          



          </div>
          <div className='my-10 text-center'>
            <h1 className='font-DM font-bold text-md text-blue-700'>Bootcamps</h1>
           </div>

          {/* right */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pl-20 justify-center items-center 
          '>

                {/* 1 */}
                <div className='shadow-2xl shadow-gray-800 w-[250px] h-[250px]
                flex flex-col justify-center items-center space-y-5 rounded-md
                border-2 border-blue-700 hover:-translate-y-2 transition-all duration-500'
                data-aos = "fade-left">

                    <div className='mr-10'>
                        <Image src={sw} className='w-20 h-20 '  width={0}  height={0} alt='iamge'/>

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
                        <Image src={sg} className='w-20 h-20'  width={0}  height={0} alt='iamge'/>

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
                        <Image src={sm} className='w-20 h-20'  width={0}  height={0} alt='image'/>

                    </div>
                    <div className='text-center px-3 '>

                        <h1 className='font-DM text-md  font-bold'>Suuqa gaynta business iyado la isticmaly Technology kala duwan </h1>
                    </div>

                </div>

                {/* 4 */}
                



              </div>


         </div>




    </div>
  )
}

export default page