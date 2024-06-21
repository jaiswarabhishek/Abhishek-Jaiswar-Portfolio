import React from 'react'
import { projectData } from './ProjectsData';
import Fade from 'react-reveal/Fade';
import { LazyLoadImage } from "react-lazy-load-image-component";


function Projects() {
  return (
    <div className='md:mt-[4em] mt-[2em] ' name="Projects">
    <h1 className='md:pl-10 text-3xl font-bold text-center md:text-left md:text-4xl text-[#161351]'>Projects</h1>
    <div>
        <div
        className='sm:flex sm:flex-col grid lg:grid-cols-3 md:grid-cols-2 animate-delay-300 animate-fade-left  justify-center  md:mx-0 mx-4  md:gap-16 gap-10 md:pl-10 md:pr-10 mt-10 '>
          

          {
            projectData.map((project)=>{
              const {id,name,image,tech, description,github,live} = project;          
              
              return <>
              <div key={id} className='rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] border border-solid  bg-white   p-8 cursor-pointer'>
              {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[98%] rounded-[2rem] bg-black'  /> */}
                
                <div>
                  {/* <img className='rounded-md mb-6 w-[100%]'  src={image} alt="" /> */}
                  <LazyLoadImage src={image}
         className='rounded-md mb-6 w-[100%]'
        alt="Image Alt"
      />
                </div>

                <div>
                  <h1 className='text-xl font-bold text-[#282566]'>{name}</h1>
                  <p className='md:text-[1em] text-[0.8em] my-2 font-[500]'>{description}</p>
                  <h3 className='my-3 font-bold '>{tech}</h3>
                </div>

                <div className='flex'  >
                  <button  className='border-none font-[400] w-full bg-black hover:bg-black text-white' > <a href={github} target='_blank' rel="noreferrer">Github</a> </button>
                  <button className=' border-none font-[400] w-full bg-[#E4405F] text-white ' ><a href={live} target='_blank' rel="noreferrer">Live</a></button>
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

export default Projects
