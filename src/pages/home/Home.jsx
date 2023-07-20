import React from "react";
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostSide from "../../components/postSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
import "./Home.css";
const Home = () => {
  return (
    <div>
      
    <div className="Home">
      <div>
    <ProfileSide />
      </div>
      <div>
    <PostSide />
      </div>
      <div>
    <RightSide /> 
      </div>
   </div>

    </div>
  );
};

export default Home;
