import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() {
const [menu,setMenu] = React.useState(true);
const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    setMenu(!menu);
  };

  const list = (anchor) => (
    <Box
      sx={{ width:250,background:'#e2e1fe',height:'100vh' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['About Me', 'Skills', 'Projects', 'Certifications',"Contact Me"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemText   primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


   
   return (
    <div className='md:p-5 p-3 bg-[#a29dff]'>

        <div className='flex justify-between items-center'>

            <h1 className='font-caramel text-xl  cursor-pointer text-black md:text-5xl'> Abhishek Jaiswar </h1>

            <div>
                <ul className='hidden  md:flex gap-10    md:text-xl cursor-pointer'>
                    <li className='hover:text-white ease-in-out duration-300' >About Me</li>
                    <li className='hover:text-white ease-in-out duration-300' >Skills</li>
                    <li className='hover:text-white ease-in-out duration-300' >Projects</li>
                    <li className='hover:text-white ease-in-out duration-300' >Certifications</li>
                    <li className='hover:text-white ease-in-out duration-300' >Contact Me</li>
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
