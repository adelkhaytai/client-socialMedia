import React from "react";
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostSide from "../../components/postSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
import "./Home.css";
import ChatBox from "../../components/ChatBox/ChatBox";
import Chat from "../Chat/Chat";
const Home = () => {
  return (
    <div>
      
       <div className="Home">
     
      <ProfileSide />
     <PostSide />
     <RightSide /> 
   </div>

    </div>
  );
};

export default Home;
