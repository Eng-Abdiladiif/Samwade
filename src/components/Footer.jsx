import React from 'react'
import {GrNetwork}  from "react-icons/gr"
import {MdMarkEmailRead} from "react-icons/md"
import {AiOutlineNumber,AiOutlineHome, AiOutlineArrowRight} from "react-icons/ai"
import {BsCodeSlash,BsFileEarmarkEasel} from "react-icons/bs"
import {FaChartArea} from "react-icons/fa"
import {SiAntdesign} from "react-icons/si"
function Footer() {
  return (
    <div
    className='max-w-3xl mx-auto pl-10 mt-10 mb-2'>



        {/* main */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>


    

          <div>

            {/* one */}
            <div className='flex space-x-3'>
                <GrNetwork className='text-xl text-blue-800'/>
                <h1 className='text-md font-DM font-semibold'>sam-wade Digital marketing</h1>
            </div>
            <div className='flex space-x-3'>
                <MdMarkEmailRead className='text-xl text-blue-800'/>
                <h1 className='text-md font-DM font-semibold'>Abdiladiifsaalax<br>
                </br>@gmail.com</h1>
            </div>
            <div className='flex space-x-3'>
                <AiOutlineNumber className='text-xl text-blue-800'/>
                <h1 className='text-md font-DM font-semibold'>0634991174</h1>
            </div>

            


          </div>

          {/* two */}
          <div>


            {/* one */}
            <div className='flex space-x-3'>
                <BsCodeSlash className='text-xl text-blue-800'/>
                <h1 className='text-md font-DM font-semibold'>web building</h1>

            </div>
            <div className='flex space-x-3'>
                <SiAntdesign className='text-xl text-blue-800'/>
                <h1 className='text-md font-DM font-semibold'>Graphic design</h1>
            </div>
            <div className='flex space-x-3'>
                <BsFileEarmarkEasel className='text-xl text-blue-800'/>
                <h1 className='text-md font-DM font-semibold'>Marketing</h1>
            </div>



          </div>

          {/* three */}

          <div>


            <div className='flex space-x-3 '>
                <AiOutlineHome className='text-xl text-blue-800'/>
                <h1 className='text-md font-DM font-semibold'>Erigavo/city</h1>
            </div>
            <div className='flex space-x-3'>
                <FaChartArea className='text-xl text-blue-800'/>
                <h1 className='text-md font-DM font-semibold'>Manhal</h1>
            </div>
            <div className='flex space-x-3'>
                <FaChartArea className='text-xl text-blue-800'/>
                <h1 className='text-md font-DM font-semibold'>Manhal</h1>
            </div>
          


          </div>





        </div>




    </div>
  )
}

export default Footer