import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch'
import FollowersCard from '../FollowersCard/FollowersCard'
import './ProfileSide.css'
import CardProfile from '../CardProfile/CardProfile'
const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch/>
        <CardProfile  location='homePage' />
      
    </div>
  )
}

export default ProfileSide