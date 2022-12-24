import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <div className='mt-[6em] bg-[#a29dff]  ' name="ContactMe">
       
       <div className='bg-[#a29dff] flex flex-col justify-center items-center pt-2'>
           
           <i className='md:text-xl text-center text-[0.9em] mb-3 font-[400] text-black'>"I am born with wings
            So, I am not meant for crawling
            I have wings, I will fly..."
           </i>
         <h1>―<i> Jalaluddin Rumi</i></h1>
       </div>
       <div className='flex items-center justify-between mt-2 flex-row  '>
       <h1 className='text-left ml-2 pb-2'>| © 2022-2023 Abhishek Jaiswar</h1>
         
         
       <div className='md:pl-10 mb-4 flex md:justify-start justify-center ml-5 mt-3  '>
        <Link href="https://github.com/AbhishekTesla"   target="_blank"   >
           <GitHubIcon sx={{width:30,height:30,marginRight:1,color:'black' }}/>
        </Link>
        
         <Link href="https://www.linkedin.com/in/abhishek-jaiswar-59865b21a/"  target="_blank" >
           <LinkedInIcon sx={{width:30,height:30,marginRight:1,color:'#0A66C2' }} />
        </Link>
        
        <Link href="https://twitter.com/abhishek_659"  target="_blank" >
           <TwitterIcon sx={{ width:30,height:30,marginRight:1,color:'#00acee' }} />
        </Link>
        
        
        <Link href="https://www.instagram.com/_abhishek.js/"  target="_blank" >
            <InstagramIcon sx={{ width:30,height:30,marginRight:1,color:'#E4405F' }} />
        </Link>
       </div>
       </div>


    </div>
  )
}

export default Footer

