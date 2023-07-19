import React, { useEffect, useState } from 'react'
import './InfoCard.css'
import { BsPencil } from 'react-icons/bs';
import ProfileModal from '../ProfileModal/ProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from "../../api/UserRequest.js";
import { logout } from "../../redux/actions/AuthAction";
const InfoCard = () => {
    const [modalOpened, setModalOpened]=useState(false)
    const dispatch = useDispatch()
    const params = useParams();
    const profileUserId = params.id;
    const [profileUser, setProfileUser] = useState({});
    const { user } = useSelector((state) => state.authReducer.authData);
    // console.log("user",user)

    const handleLogOut = ()=> {
        dispatch(logout())
      }
    

    useEffect(() => {
        const fetchProfileUser = async () => {
          if (profileUserId === user._id) {
            setProfileUser(user);
          } else {
            console.log("fetching")
            const profileUser = await UserApi.getUser(profileUserId);
            setProfileUser(profileUser);
            console.log(profileUser)
          }
        };
        fetchProfileUser();
      }, [user]);
    

  return (
    <div className='InfoCard'>
        <div className="infoHead">
            <h4>Profile Info</h4>
            {user._id === profileUserId ? (
            <div>
            <BsPencil onClick={()=>{setModalOpened(true)} }/>

            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data={user}/>

            </div>
            ) : (
                ""
              )}
        </div>
        
        <div className="info">
            <span>
                <b>RelationShip :</b>
            
            </span>

            <span> {profileUser.relationship}</span>
        </div>
        <div className="info">
            <span>
                <b>livesIn :</b>
            </span>
            <span> {profileUser.livesIn}</span>
        </div>
        <div className="info">
            <span>
                <b>worksAt :</b>
            </span>
            <span> {profileUser.worksAt}</span>
        </div>
        <button className="button logout-button" onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default InfoCard