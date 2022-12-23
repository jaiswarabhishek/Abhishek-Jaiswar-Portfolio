import React from 'react'
import Marquee from "react-fast-marquee";
import { skillData } from './SkillsData';


function Skills() {



  return (
    <div className='mt-16 '>
       
      <div>
        <h1 className='md:pl-10 text-3xl font-bold text-center md:text-left md:text-4xl text-[#161351] '>Skills</h1>
      </div>

      <div className='mt-5  '>

<Marquee

       gradient={true}
       gradientColor={['#161351','#161351']}
       speed={80} 
      pauseOnHover={true}
      pauseOnClick={true} 
      delay={0}
      play={true} 
      
      direction="right"
>
 

{  skillData.map((skill)=>{
     const {id,name,image} = skill;
     return <>
     <div key={id} className='mx-5  rounded-md p-10 shadow-lg bg-white my-10 w-[13em] md:w-[15em] hover:scale-110 ease-in-out duration-300 cursor-pointer'  >
         
          <img src={image} className='mx-auto max-w-[60%] ' alt="/" />
        
          <h1 className='text-center text-[#161351]    text-xl' >{name}</h1>
        </div>
     </>
}) 
}

</Marquee>



      </div>


    </div>
  )
}

export default Skills
