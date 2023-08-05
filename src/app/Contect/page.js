"use client"


import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

 import {VscDiffRenamed}  from "react-icons/vsc"
 import {BsFillTelephoneOutboundFill,}  from "react-icons/bs"
 import  {MdMarkEmailUnread}  from "react-icons/md"

 function page() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const  [send , setSend]  = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pob7ixe', 'template_7x0c6jk', form.current, 'SsOXZdzDojuWIQR4D')
          .then((result) => {
              console.log(result.text);
              setSend(true)
          }, (error) => {
              console.log(error.text);
          });
      };
 
  
    
   return (
     <div className='max-w-5xl mx-auto p-4 mt-10
     flex flex-col-reverse md:flex-row justify-around items-center space-x-5'>



        {/* main */}
        <div className='flex flex-col  justify-center items-center'>

            {/* left */}
            <div className='w-full max-w-md space-y-3' >

                <div className=' mt-10 '>
                      <h1 className='font-DM font-bold text-2xl md:text-4xl'>Contect us</h1>
                </div>
                <div className='flex flex-col space-y-4 mt-10'>
                    {/* one */}
                    <div className='flex space-x-3'>
                        <VscDiffRenamed className='text-xl'/>
                        <h1 className='font-DM text-sm font-semibold'>Sam-wade Digita Serves</h1>

                    </div>
                    {/* two */}
                    <div className='flex space-x-3'>
                        <BsFillTelephoneOutboundFill className='text-xl'/>
                        <h1 className='font-DM text-sm font-semibold'>0634991174</h1>

                    </div>
                    <div className='flex space-x-3'>
                        <MdMarkEmailUnread className='text-xl'/>
                        <h1 className='font-DM text-sm font-semibold'>Abdiladiifsaalx988@gmail.com</h1>

                    </div>
                </div>
            </div>
          
        </div>
          {/* right */}
          <div>

            <form className= "w-full   max-w-md space-y-2" onSubmit={sendEmail} ref={form}>

                

                    <input type= "text" name='name' className='w-full rounded-md p-3 border-2 border-gray-500
                    focus:outline-none focus:ring-indigo-500  focus:border-indigo-600'  placeholder='Enter the name'/>
            
         
                    <input type= "text" name='emal' className='w-full rounded-md p-3 border-2 border-gray-500
                    focus:outline-none focus:ring-indigo-500  focus:border-indigo-600'  placeholder='Enter the email'/>
                    <textarea type= "text" name='message' className='w-full rounded-md p-3 border-2 border-gray-500
                    focus:outline-none focus:ring-indigo-500  focus:border-indigo-600'  placeholder='Message '/>
                 
                 <button className='w-full max-w-md p-2 bg-blue-700 text-white font-DM font-bold rounded-sm' type='submit'>send email</button>
               

               <div>

                 {

                    send && <div className='text-green-700 bg-green-100  rounded-lg ' role='alert'>

                        <span className='font-semibold font-DM'>Thanks you for reaction</span>  i will contect you as soon as possible
                    </div>
                 }
               </div>


            </form>



          </div>

        





     </div>
   )
 }
 
 export default page