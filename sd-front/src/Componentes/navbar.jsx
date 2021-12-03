import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
//import { minHeight } from "@mui/system";
import Button from '@mui/material/Button';
import Menu from './Menu'

const Navbar = () => {

  return (

    <div>
      <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton>
            <HomeIcon sx={{
              fontSize: 45,
              flexGrow: 1
            }}
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography>
          <Menu></Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;