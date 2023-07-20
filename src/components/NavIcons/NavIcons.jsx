import React from "react";

import { FiSettings } from 'react-icons/fi';

import { IoIosNotifications } from 'react-icons/io';

import { AiOutlineHome } from 'react-icons/ai';

import { BiComment } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const NavIcons = () => {
  return (
    <div className="navIcons">
       <Link to='../home' >
           <AiOutlineHome style={{fontSize:'30px'}}/>
          </Link>
          <FiSettings style={{fontSize:'30px'}} />
          <IoIosNotifications  style={{fontSize:'30px'}}/>
          <Link to='../chat' >
          <BiComment  style={{fontSize:'30px'}}/>
        
      </Link>
    </div>
  );
};

export default NavIcons;
