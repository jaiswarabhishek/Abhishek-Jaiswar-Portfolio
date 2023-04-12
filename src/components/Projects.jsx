import React from 'react'
import { projectData } from './ProjectsData';
import Fade from 'react-reveal/Fade';
import { LazyLoadImage } from "react-lazy-load-image-component";


function Projects() {
  return (
    <div className='md:mt-[4em] mt-[2em]' name="Projects">
    <h1 className='md:pl-10 text-3xl font-bold text-center md:text-left md:text-4xl text-[#161351]'>Projects</h1>
    <div>
        <div
        className='flex flex-col md:grid md:grid-cols-3   justify-center md:w-[100%] w-[90%] md:mx-0 mx-auto  md:gap-16 gap-10 md:pl-10 md:pr-10 mt-10  '>
          
          <Fade left>
          {
            projectData.map((project)=>{
              const {id,name,image,tech, description,github,live} = project;          

              return <>
              <div key={id} className='bg-[#e2e1fe]  rounded-md shadow-lg  pb-8 pl-5 pr-5 pt-5 hover:scale-105 ease-in-out duration-300 cursor-pointer '>
                
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
                  <h3 className='my-3 font-medium md:font-bold'>{tech}</h3>
                </div>

                <div >
                  <button  className='p-2 border-none font-[400] md:w-[25%] w-[30%] bg-black hover:bg-black text-white' > <a href={github} target='_blank' rel="noreferrer">Github</a> </button>
                  <button className='p-2 border-none font-[400] md:w-[25%] w-[30%] bg-[#E4405F] text-white ' ><a href={live} target='_blank' rel="noreferrer">Live</a></button>
                </div>
              </div>
              
              </>
            })
          }
          </Fade>

        </div>

    </div>

    </div>
  )
}

export default Projects
