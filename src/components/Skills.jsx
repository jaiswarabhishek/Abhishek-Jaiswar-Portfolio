import React from 'react'
import Marquee from "react-fast-marquee";
import Fade from 'react-reveal/Fade';
import { skills } from './SkillsData';
import { AnimatePresence,motion } from 'framer-motion';
import { useState } from 'react';



const image= 'https://img.icons8.com/color/512/html-5.png';


function Skills() {
  const [isHovered, setIsHovered] = useState(false);



  return (
    <div className='mt-16  ' name="Skills">
      <h1 className='md:pl-10 text-3xl font-bold text-center md:text-left md:text-4xl text-[#161351]'>Skills</h1>

      <motion.div
     
      className=' grid lg:grid-cols-6 md:grid-cols-4 gap-8 md:p-7 p-3 grid-cols-2'
     
      >
        {
          skills.map((skill)=>{
            const {id,name,image} = skill;
            return<>
          <AnimatePresence>

            <motion.div 
             initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (id+2) * 0.05, ease: "easeInOut" }} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-white  	  relative py-6 basis-[150px] grow flex flex-col justify-center items-center shadow-lg rounded-xl border overflow-hidden group   before:absolute before:inset-0 before:bg-gradient-to-tr before:from-primary before:to-secondary before:opacity-0 hover:before:opacity-20 duration-200  " style={{opacity: "1", transform: "none"}} >
              <img src={image} className='object-contain w-[6em] h-[6em]' alt="" />
              <h3 className=' text-center my-2 font-medium'>{name}</h3>
            </motion.div>

            </AnimatePresence>

            </>

          })
      }  
      </motion.div>
       
     


    </div>
  )
}

export default Skills




{/* <div class="relative py-6 basis-[150px] grow flex flex-col justify-center items-center shadow-lg rounded-xl border overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-tr before:from-primary before:to-secondary before:opacity-0 hover:before:opacity-20 duration-200" style="opacity: 1; transform: none;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" class="object-contain w-12 h-12" alt="VS Code"><h3 class="my-2 font-medium">VS Code</h3></div> */}