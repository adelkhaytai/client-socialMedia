import React from "react";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileCard = ({ location }) => {
  const ProfilePage = false;
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const posts = useSelector((state) => state.postReducer.posts);
  return (
    <div className="ProfileCard0">
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "skys.jpg"
          }
          alt=""
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt="picture"
        />
      </div>

      <div className="ProfileName">
        <span>
          {" "}
          {user.firstname} {user.lastname}{" "}
        </span>
        <span> {user.worksAt ? user.worksAt : "whrite about yourself"} </span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span> {user.followers.length} </span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
          <span>{user.following.length}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          {location === "profilePage" && (
            <>
              <div className="follow">
                <div className="vl"></div>
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span className="pro">
          <Link
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </span>
      )}

    </div>
  );
};

export default ProfileCard;
