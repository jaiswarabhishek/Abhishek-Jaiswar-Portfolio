import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';
import { motion } from "framer-motion";

function AboutMe() {
     const img ="https://img.freepik.com/premium-vector/programmer-engineering-development-coding-web-development-website-design-developer-vector_199064-126.jpg?w=740" ;
     
     const greet ="https://media.tenor.com/yWSRmymbuBkAAAAM/waving-hi.gif";

    


  return (
    <motion.div name="AboutMe"

       animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.5,
                    delay: 0.3,
                }}
                initial={{ opacity: 0, scale: 0.7 }}

                
               
    >
        <div className='flex  flex-col-reverse  justify-between md:flex-row md:items-center'>

        <div className=' mx-auto  md:mt-0 md:ml-2'>

       <div className=' flex justify-center items-center md:mt-0 mt-7'>
         <h1  className='md:text-4xl text-xl font-[400] text-[#161351] ' >Hello folks! , I'm Abhishek</h1> 
        <img src={greet} className='block max-w-[6%] md:max-w-[7%] mx-2' alt="/" />
       </div>

       <h3 className='md:pl-10 md:pr-10 mt-2 text-[1em] mx-auto md:mx-0 md:text-left text-left md:text-xl max-w-[90%]' >
          I'm a passionate full-stack web developer with 1 and a half years of experience. I have spent the last 2 years developing my skills as a software developer.I am a good problem solver. 3-star coder on Hackerrank. I am also interested in open source. This year, I participated in Hacktoberfest as a contributor and completed it successfully.
       </h3>


       <div className='md:pl-10 mt-5 flex md:justify-start justify-center  '>
        <Link href="https://github.com/AbhishekTesla"   target="_blank"   >
           <GitHubIcon sx={{width:45,height:45,marginRight:3,color:'black' }}/>
        </Link>
        
         <Link href="https://www.linkedin.com/in/abhishek-jaiswar-59865b21a/"  target="_blank" >
           <LinkedInIcon sx={{width:45,height:45,marginRight:3,color:'#0A66C2' }} />
        </Link>
        
        <Link href="https://twitter.com/abhishek_659"  target="_blank" >
           <TwitterIcon sx={{ width:45,height:45,marginRight:3,color:'#00acee' }} />
        </Link>
        
        
        <Link href="https://www.instagram.com/_abhishek.js/"  target="_blank" >
            <InstagramIcon sx={{ width:45,height:45,marginRight:3,color:'#E4405F' }} />
        </Link>
       </div>

       <div className='flex md:flex-row flex-col  md:pl-10 mt-5  gap-4'>

        <button className='border-0 rounded-md text-white md:w-auto md:mx-0 w-[70%] mx-auto  p-3 text-[1.1em]'>Resume</button>
        
        <button className='border-0 rounded-md text-white md:w-auto w-[70%] md:mx-0 mx-auto   p-3 text-[1.1em]'>Contact Me</button>

       
       </div>



          </div>
    
       <img src={img} className="block max-w-[70%] mt-5 md:mt-0 md:max-w-[40%] mx-auto md:mr-2 object-cover" alt="/" />

       </div>
    </motion.div>
  )
}

export default AboutMe
