import React from 'react'
import Marquee from "react-fast-marquee";
import Fade from 'react-reveal/Fade';
import { frontend } from './SkillsData';
import { backend } from './SkillsData';
import { languages } from './SkillsData';

const image= 'https://img.icons8.com/color/512/html-5.png';


function Skills() {



  return (
    <div className='mt-16 ' name="Skills">
       
      <div className='mb-10' >
        <h1 className='md:pl-10 text-3xl font-bold text-center md:text-left md:text-4xl text-[#161351] '>Skills</h1>
      </div>

      <div className='mt-5 md:flex md:justify-evenly gap-10 md:w-[90%] w-[80%] mx-auto '>
    <Fade right>
      <div className='border-0 rounded-md shadow-xl mb-10 hover:scale-105 ease-in-out duration-300 cursor-pointer'>
       
       <h1 className='text-center md:text-2xl text-[1.3em] text-[#161351] mb-5'>Frontend</h1>
       <div className='border-b mb-2' />
       <div className='grid grid-cols-2 gap-5 '>
        {
       
       frontend.map((skill)=>{

       return  <div className='md:p-3 md:mb-3 ml-5 mb-5 mb:mr-0 mr-2 ' >
         
         <div className='flex items-center' key={skill.id} >
          <img src={skill.image} className='block w-[25%] ' alt="" />
          <h2 className='md:text-[1em] ml-2'>{skill.name}</h2>
         </div>

        </div>
       })

         }

       </div>
       
      </div>


      <div className='border-0 rounded-md shadow-xl mb-10 hover:scale-105 ease-in-out duration-300 cursor-pointer'>
    <h1 className='text-center md:text-2xl text-[1.3em] text-[#161351] mb-5'>Backend</h1>
    <div className='border-b mb-2' />
     <div className='grid grid-cols-2 gap-5 '>
        {
       
       backend.map((skill)=>{

       return  <div className='md:p-3 md:mb-3 ml-5 mb-5 mb:mr-0 mr-2 ' >
         
         <div className='flex items-center ' key={skill.id} >
          <img src={skill.image} className='block w-[25%] ' alt="" />
          <h2 className='md:text-[1em] ml-2'>{skill.name}</h2>
         </div>

        </div>
       })

         }

       </div>

      </div>

      <div className='border-0 rounded-md shadow-xl mb-10 hover:scale-105 ease-in-out duration-300 cursor-pointer'>
    <h1 className='text-center md:text-2xl  text-[1.3em] text-[#161351]  mb-5'>Langauges</h1>
    <div className='border-b mb-2' />

   
    <div className='grid grid-cols-2 gap-5'>
       {
       
       languages.map((skill)=>{

       return  <div className='md:p-3 md:mb-3 ml-5 mb-5 mb:mr-0 mr-2 ' >
         
         <div className='flex items-center' key={skill.id} >
          <img src={skill.image} className='block w-[25%] ' alt="" />
          <h2 className='md:text-[1em] ml-2'>{skill.name}</h2>
         </div>

        </div>
       })

         }
    </div>


      </div>



      </Fade>
      </div>


    </div>
  )
}

export default Skills
