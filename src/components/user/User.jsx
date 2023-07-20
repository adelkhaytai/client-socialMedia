import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../redux/actions/UserAction";
// import { followUser, unfollowUser } from "../../actions/UserAction";

const User = ({person}) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  const [following, setFollowing] = useState(person.followers.includes(user._id));


  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
        setFollowing((prev) => !prev);
  };

  return (
    <div className="User">
      <div className='followers'>
                    <div>
                        <img className='followerImage'
                         src={ person.profilePicture
                          ? serverPublic + person.profilePicture
                          : serverPublic + "defaultProfile.png"} alt="" />
                        <div className='name'>
                        <span>{person.name}</span>
                        <span>{person.firstname} </span>
                        </div>
                    </div>
                    <button className={  following ? "button-unfollow" : "button fc-button"} onClick={handleFollow}>  {following ? "Unfollow" : "Follow"}</button>
                </div>
    </div>
  );
};

export default User;
