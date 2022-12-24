import React from 'react'
import { certificateData } from './CertificateData'

function Certifications() {
  return (
    <div className='mt-[4em]' name="Certifications" >
    <h1 className='md:pl-10 text-3xl font-bold text-center md:text-left md:text-4xl text-[#161351]'>Certifications</h1>


    <div className='pl-2 md:pl-10'>

      <div className='md:grid md:grid-cols-3 flex flex-col mx-auto  gap-5 mt-10 md:w-[100%] w-[90%]' >
        {
          certificateData.map((certificate)=>{
            const {id,name,image,link} =certificate;
            return<>
          <div key={id} className='max-w-[80%] shadow-lg border-0 border-black p-5 rounded-md mx-auto hover:scale-105 ease-in-out duration-300 cursor-pointer' >
             <div >
               <a href={link} className='mx-auto'  target='_blank' >
                <img src={image}  alt="" />
               </a>
             </div>

             <div>
              <h1 className='text-center mt-4 text-xl font-[500] text-[#161351]'>{name}</h1>
             </div>

          </div>
            </>
          })
        }


      </div>

    </div>


    </div>
  )
}

export default Certifications
