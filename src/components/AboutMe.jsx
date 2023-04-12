import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, animateScroll as scroll } from 'react-scroll'
import Fade from 'react-reveal/Fade';


// background-image: linear-gradient(90deg,#dbdbde30 1px,transparent 0),linear-gradient(180deg,#dbdbde30 1px,transparent 0);

function AboutMe() {
     const img ="https://img.freepik.com/premium-vector/programmer-engineering-development-coding-web-development-website-design-developer-vector_199064-126.jpg?w=740" ;
     
     const greet ="https://media.tenor.com/yWSRmymbuBkAAAAM/waving-hi.gif";

 


  return (
     <div name="AboutMe" >
         <Fade bottom>

        <div className='flex  flex-col-reverse  justify-between md:flex-row md:items-center'>

        <div className=' mx-auto  md:mt-0 md:ml-2'>
       

       <div className=' flex justify-center items-center md:mt-0 mt-7'>
    
         <h1  className='md:text-4xl text-xl  font-normal text-black  ' >Hello folks! , I'm Abhishek</h1> 
        <img src={greet} className='block max-w-[7%]  mx-2' alt="/" />

       </div>

       <h3 className='md:pl-10 md:pr-10 mt-2 text-[1em] mx-auto md:mx-0 md:text-left text-left  max-w-[94%]' >
          I'm a passionate full-stack web developer with 1 years of project building experience. I have spent the last 2 years developing my skills as a software developer.I am a good problem solver. 3-star coder on Hackerrank , Solved more than 100 problems on Leetcode. I am also interested in open source. last year, I participated in Hacktoberfest as a contributor and completed it successfully.
       </h3>


       <div className='md:pl-10 mt-8 flex md:justify-start mx-auto justify-center  '>
        <a href="https://github.com/AbhishekTesla"   target="_blank" rel="noreferrer"   >
           <GitHubIcon sx={{width:35,height:35,marginRight:3,color:'black' }}/>
        </a>
        
         <a href="https://www.linkedin.com/in/abhishek-jaiswar-59865b21a/"  target="_blank" rel="noreferrer" >
           <LinkedInIcon sx={{width:35,height:35,marginRight:3,color:'#0A66C2' }} />
        </a>
        
        <a href="https://twitter.com/abhishek_659"  target="_blank" rel="noreferrer" >
           <TwitterIcon sx={{ width:35,height:35,marginRight:3,color:'#00acee' }} />
        </a>
        
        
        <a href="https://www.instagram.com/_abhishek.js/"  target="_blank"  rel="noreferrer" >
            <InstagramIcon sx={{ width:35,height:35,marginRight:3,color:'#E4405F' }} />
        </a>
       </div>

       <div className='flex md:flex-row flex-col  md:pl-10 mt-5  gap-4'>
        <button  className='border-0 rounded-md text-white md:w-auto md:mx-0 w-[70%] mx-auto  p-3 text-[1.1em]'>
         <a href="https://drive.google.com/file/d/1DJQeZSinT9yRwmUjIrBpn1R0frcokLLc/view?usp=sharing"  target="_blank"  rel="noreferrer" >
         Resume
         </a>
         </button>
          
        <Link activeClass="active" to="ContactMe" className='text-center' spy={true} smooth={true} offset={50} duration={500} >
          <button className='border-0 rounded-md text-white md:w-auto w-[70%] md:mx-0 mx-auto   p-3 text-[1.1em]'>
          Contact Me
         </button>
         </Link>
       
       </div>



          </div>
     
    
       <img src={img} className="block max-w-[70%] mt-5 md:mt-0 md:max-w-[40%] mx-auto md:mr-2 object-cover" alt="/" />

       </div>
       </Fade>
    </div>
  )
}

export default AboutMe
