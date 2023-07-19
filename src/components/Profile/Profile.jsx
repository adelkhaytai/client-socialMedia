import React from 'react'
import './Profile.css'
import ProfileLeft from '../ProfileLeft/ProfileLeft'
import ProfileCard from '../ProfileCard/ProfileCard'
import RightSide from '../RightSide/RightSide'
import PostSide from '../postSide/PostSide'
const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft/>
      <div className="Profile-Center">
        <ProfileCard location='profilePage' />
        <PostSide />
      </div>
      <RightSide/>
    </div>
  )
}

export default Profile