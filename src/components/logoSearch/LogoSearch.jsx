import React from "react";
import "./LogoSearch.css";
import Logo from '../../img/icon.jpg'
import { FcSearch } from "react-icons/fc";
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      
      <img style={{width:'40px'}} src={Logo} alt="" />

      {/* <h3>My Sky</h3>
   */}

      <div className="Search">
        <input type="text" placeholder="Search" />
        <div className="icon">
          <FcSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
