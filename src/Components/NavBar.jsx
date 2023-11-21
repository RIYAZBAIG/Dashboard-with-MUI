import React, { useState } from 'react';
import { Link, InputBase, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dashboard1 from './Dashboard1';
import SideBar from "../Components/SideBar";

import "./Common.css";
import { Icon } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const NavBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={`Nav ${isDrawerOpen ? 'Nav-Open' : ''}`} >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        edge="start"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>


        <div className='css-4t3x6l-MuiPaper-root-MuiDrawer-paper' style={{backgroundColor:"#fff8dc", width:"155px"}} >
          <p onClick={handleClick}>
            Dashboard: <ArrowDropDownCircleOutlinedIcon />
          </p>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >

<div className='Side'>
<MenuItem onClick={handleClose} >
  <Link to="/Dashboard1" style={{ textDecoration: 'none', color: 'inherit' }}>
  </Link>
</MenuItem>
<a href="./Dashboard1" class="nav-link active">
<i class="far fa-circle nav-icon"></i>

<p>Dashboard1</p>
</a>
<a href="./Dashboard2" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Dashboard2</p>
</a>
<a href="./Dashboard3" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Dashboard3</p>
</a>

<a href="./Widgets" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Widgets</p>
</a>



{/* dropdown */}

<div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        Layoout Options
      </button>

      {isOpen && (
        <div className="dropdown-content">
          <a href="./TopNavigation" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>TopNavigation</p>
</a>
<a href="./Boxed" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p> Boxed</p>
</a>
<a href="./FixedSideBar" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>FixedSideBar</p>
</a>
        </div>
      )}
    </div>

    <br />
    <br />
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown} >
        Charts
      </button>

      {isOpen && (
        <div className="dropdown-content">
          <a href="./Dashboard3" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Chart</p>
</a>
<a href="./Boxed" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Boxed</p>
</a>
<a href="./FixedSideBar" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>FixedSideBar</p>
</a>
<a href="./DateCalendar" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>DateCalendar</p>
</a>

<a href="./ProfilePage" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Profile</p>
</a>

<a href="./AddTodoList" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>TodoList</p>
</a>
        </div>
      )}
    </div>
    <br />

    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        General Elements
      </button>

      {isOpen && (
        <div className="dropdown-content">
          <a href="./Forms" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Forms</p>
</a>
<a href="./Boxed" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Boxed</p>
</a>
<a href="./FixedSideBar" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>FixedSideBar</p>
</a>
        </div>
      )}
    </div>


    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        UI Elements
      </button>

      {isOpen && (
        <div className="dropdown-content">
          <a href="./General" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>General</p>
</a>
<a href="./Icons" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Icons</p>
</a>
<a href="./Buttons" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Buttons</p>
</a>
<a href="./Sliders" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Sliders</p>
</a>

<a href="./Moderns" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Moderns & Alerts</p>
</a>

<a href="./TimeLine" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>TimeLine</p>
</a>
<a href="./Ribbons" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Ribbons</p>
</a>
        </div>
      )}
    </div>
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        Pages
      </button>

      {isOpen && (
        <div className="dropdown-content">
          <a href="./Invoice" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Invoice</p>
</a>

<a href="./Profile" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Profile</p>
</a>
          <a href="./Commerce" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>E-Commerce</p>
</a>

<a href="./Projects" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Projects</p>
</a>
<a href="./ProjectAdds" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Project Adds</p>
</a>

<a href="./ProjectEdit" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>ProjectEdit</p>
</a>

<a href="./ProjectDetails" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>ProjectDetails</p>
</a>
<a href="./Contacts" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Contacts</p>
</a>
        </div>
      )}
    </div>
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        MailBox
      </button>

      {isOpen && (
        <div className="dropdown-content">
          <a href="./Compose" class="nav-link active">
<i class="far fa-circle nav-icon"></i>
<p>Compose</p>
</a>


        </div>
      )}
    </div>

    </div>
    
    <SideBar/>


          </Menu>
        </div>
      </Drawer>

      <Link style={{ marginLeft: '125px' }}  >Home</Link>
      <Link style={{ marginLeft: '90px' }}>Contact</Link>
      <div style={{ marginLeft: 'auto', marginRight: '120px' }}>
        <div style={{ position: 'relative', marginBottom: "-15px" }}>
          <IconButton
            type="submit"
            sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </div>
       

      </div>
    </div>
  );
}

export default NavBar;
