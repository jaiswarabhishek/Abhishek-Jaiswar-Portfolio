import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import LinkIcon from '@mui/icons-material/Link';
import { Link, animateScroll as scroll } from 'react-scroll'


function Navbar() {
const [menu,setMenu] = React.useState(true);
const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    setState({[anchor]: open });
    
    setMenu(!menu);
  };

  const list = (anchor) => (
    <Box
      sx={{ width:250,background:'#e2e1fe',height:'100vh',paddingTop:'2em'}}
      role="presentation" >
      <List >
       
          <ListItem  disablePadding>
            <ListItemButton  >
              <ListItemIcon>
           <PersonIcon sx={{color:'black'}}/>
              </ListItemIcon>
          <Link className='w-[100%] text-xl'  onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)} activeClass="active" to="AboutMe" spy={true} smooth={true} offset={50} duration={500} > About Me</Link>
            </ListItemButton>
          </ListItem>
          
          
          <ListItem  disablePadding>
            <ListItemButton>
              
               <ListItemIcon>
           <TipsAndUpdatesIcon sx={{color:'black'}} />
              </ListItemIcon>
             <Link className='w-[100%] text-xl' onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)} activeClass="active" to="Skills" spy={true} smooth={true} offset={50} duration={500} >Skills</Link>
            </ListItemButton>
          </ListItem>
          
          
           <ListItem  disablePadding>
            <ListItemButton>
               <ListItemIcon>
           <AddTaskIcon sx={{color:'black'}}/>
              </ListItemIcon>
             <Link className='w-[100%] text-xl' onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)} activeClass="active" to="Projects" spy={true} smooth={true} offset={50} duration={500} >Projects</Link>
            </ListItemButton>
          </ListItem>
          
          
          <ListItem  disablePadding>
            <ListItemButton>
               <ListItemIcon>
           <EmojiEventsIcon sx={{color:'black'}}/>
              </ListItemIcon>

             <Link className='w-[100%] text-xl' onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)} activeClass="active" to="Certifications" spy={true} smooth={true} offset={50} duration={500} >Certifications</Link>
            </ListItemButton>
          </ListItem> 
          
          <ListItem  disablePadding>
            <ListItemButton>
               <ListItemIcon sx={{color:'black'}}>
           <LinkIcon/>
              </ListItemIcon>
         <Link className='w-[100%] text-xl' onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)} activeClass="active" to="ContactMe" spy={true} smooth={true} offset={50} duration={500} >Contact Me</Link>
            </ListItemButton>
          </ListItem>
      
      </List>
    </Box>
  );


   
   return (
    <div  className='md:p-5 p-3 bg-[#a29dff]'>

        <div className='flex justify-between items-center'>

            <h1 className='font-caramel text-3xl  cursor-pointer text-black md:text-5xl'> Abhishek Jaiswar </h1>

            <div>
                <ul className='hidden  md:flex gap-10    md:text-xl cursor-pointer'>
                    <li className='hover:text-white ease-in-out duration-300' >
                      <Link activeClass="active" to="AboutMe" spy={true} smooth={true} offset={50} duration={500} > About Me</Link></li>
                    <li className='hover:text-white ease-in-out duration-300' >

                      <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={50} duration={500} >Skills</Link> </li>
                    <li className='hover:text-white ease-in-out duration-300' >

                      <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={50} duration={500} >Projects</Link> </li>
                    <li className='hover:text-white ease-in-out duration-300' >

                      <Link activeClass="active" to="Certifications" spy={true} smooth={true} offset={50} duration={500} >Certifications</Link> </li>
                    <li className='hover:text-white ease-in-out duration-300' >

                      <Link activeClass="active" to="ContactMe" spy={true} smooth={true} offset={50} duration={500} >Contact Me</Link> </li>
                </ul>

      <div className='md:hidden bg-[#a29dff]  ' >

      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{color:'black'}} onClick={toggleDrawer(anchor, true)}>
            {menu?<MenuIcon />:<CloseIcon/>}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

    </div>
            </div>
            

        </div>

    </div>
  )
}

export default Navbar
