import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, animateScroll as scroll } from 'react-scroll'
import Fade from 'react-reveal/Fade';
import Developer from '../assets/developer.jpeg'
import dev from '../assets/_db90d931-1a1e-47fb-855d-f34ebe2c1643.svg'
import hackerank from '../assets/hackerrank.png'
import leetcode from '../assets/leetcode.png'
import geeksforgeeks from '../assets/icons8-geeksforgeeks-240.png'

// background-image: linear-gradient(90deg,#dbdbde30 1px,transparent 0),linear-gradient(180deg,#dbdbde30 1px,transparent 0);

function AboutMe() {
   //   const img ="https://img.freepik.com/premium-vector/programmer-engineering-development-coding-web-development-website-design-developer-vector_199064-126.jpg?w=740" ;
     const img = dev;
     const greet ="https://media.tenor.com/yWSRmymbuBkAAAAM/waving-hi.gif";

 


  return (
     <div name="AboutMe" >
         <div
         className='animate-fade-up animate-delay-300 animate-once'
          >

        <div className='flex  flex-col-reverse  justify-between md:flex-row md:items-center'>

        <div className=' mx-auto  md:mt-10 lg:mt-0 md:ml-2'>
       

       <div className=' flex justify-center items-center md:mt-0 mt-7'>
    
         <h1  className='md:text-3xl text-xl  font-normal text-black  ' >Hello folks! , I'm Abhishek</h1> 
        <img src={greet} className='block max-w-[7%]  mx-2' alt="/" />

       </div>

       <h3 className='md:pl-10 md:pr-10 mt-2 text-[1.102em] mx-auto md:mx-0 md:text-left text-left  max-w-[94%]' >
          I'm a passionate full-stack web developer with 1 years of project building experience. I have spent the last 2 years developing my skills as a software developer.I am a good problem solver. 5-star coder on Hackerrank , Solved more than 200 problems on Leetcode & GeeksforGeeks. I am also interested in open source. last year, I participated in Hacktoberfest as a contributor and completed it successfully.
       </h3>


       <div className='md:pl-10 mt-8 flex md:justify-start mx-auto justify-center  '>
        <a href="https://github.com/jaiswarabhishek"   target="_blank" rel="noreferrer"   >
           <GitHubIcon sx={{width:35,height:35,marginRight:2,color:'black' }}/>
        </a>
        
         <a href="https://leetcode.com/Abhishek_Jaiswar/"  target="_blank" rel="noreferrer" >
           {/* <LinkedInIcon sx={{width:35,height:35,marginRight:3,color:'#0A66C2' }} /> */}
           <img src={leetcode} 
           className='w-9 h-9 mr-4  '
           alt="" />
        </a>
        
        <a href="https://auth.geeksforgeeks.org/user/abhishek_jaiswar/practice"  target="_blank" rel="noreferrer" >
         

           {/* <TwitterIcon sx={{ width:35,height:35,marginRight:3,color:'#00acee' }} /> */}

             <img src={geeksforgeeks}
               className='w-9 h-9 mr-4 '
               alt="" />

        </a>
        
        
        <a href="https://www.hackerrank.com/abhishek_jaiswar?hr_r=1"  target="_blank"  rel="noreferrer" >
            {/* <InstagramIcon sx={{ width:35,height:35,marginRight:3,color:'#E4405F' }} /> */}
            <img src={hackerank}
               className='w-9 h-9 mr-4 '
               alt="" />
        </a>
       </div>

       <div className='flex md:flex-row flex-col  md:pl-10 mt-5  gap-4'>
         <a href="https://drive.google.com/file/d/1bdV4dBy-_36oBF_lzZueF68xhu9ypApd/view?usp=sharing" className='text-center'  target="_blank"  rel="noreferrer" >
        <button  className='border-0 rounded-md text-white md:w-auto md:mx-0 w-[70%] mx-auto  p-3 text-[1.1em]  bg-purple-500 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300'>
         Resume
         </button>
         </a>
          
        <Link activeClass="active" to="ContactMe" className='text-center' spy={true} smooth={true} offset={50} duration={500} >
          <button className='border-0 rounded-md text-white md:w-auto w-[70%] md:mx-0 mx-auto   p-3 text-[1.1em]   bg-purple-500 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300'>
          
            Contact Me 
         </button>
         </Link>
       
       </div>



          </div>
     
    
       <img src={img} className="block max-w-[70%] mt-5 md:mt-0 md:max-w-[40%] mx-auto md:mr-2 object-cover bg-transparent  " alt="/" />

       </div>
       </div>
    </div>
  )
}

export default AboutMe
