import React from 'react'
import './RightSide.css'
import { FiSettings } from 'react-icons/fi';
import { IoIosNotifications } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import TrendCard from '../TrendCard/TrendCard';
import { useState } from 'react';
import ProfileModal from '../ProfileModal/ProfileModal';
import { Link } from 'react-router-dom';
import NavIcons from '../NavIcons/NavIcons';
import FollowersCard from '../FollowersCard/FollowersCard';
const RightSide = () => {
  const [modalOpened, setModalOpened]=useState(false)

  return (
    <div className='RightSide'>
       <NavIcons />
       <FollowersCard/>
        <TrendCard/>
        <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}

export default RightSide