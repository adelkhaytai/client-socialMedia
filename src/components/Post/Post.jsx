import React, { useState } from 'react'
import "./Post.css";
import { FcLike } from 'react-icons/fc';
import Heart from "../../img/like.png";
// import { FcComments, FcLike } from 'react-icons/fc';
// import { FcShare } from 'react-icons/fc';
import NotLike from "../../img/notlike.png";
import Share from "../../img/share.png";
import Comment from "../../img/comment.png";
import { useSelector } from 'react-redux';
import { likePost } from '../../api/PostRequest';
import { useParams } from 'react-router-dom';

const Post = ({data,location}) => {
  const ProfilePage = false;
    const { user } = useSelector((state) => state.authReducer.authData);
    const [liked, setLiked] = useState(data.likes.includes(user._id));
    const [likes, setLikes] = useState(data.likes.length)
    
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
        const params = useParams();
    const profileUserId = params.id;
        const [profileUser, setProfileUser] = useState({});

    const handleLike = () => {
      likePost(data._id, user._id);
      setLiked((prev) => !prev);
      liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
    };
  
    return (
    <div className='Post'>
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

        <div className="postReact">     
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />

        <img src={Comment} alt="" />
        <img src={Share} alt="" />
        </div>

        <span style={{fontSize:'12px',color:'var(--gray)'}}> {likes} Likes</span>
        <div className='detail'>
        
            <span> {data.name} </span>
            <span> {data.desc} </span>
         
        </div>
    </div>
  )
}

export default Post