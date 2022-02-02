import React from "react";
import { useNavigate } from "react-router-dom";


import "./Styling/MenuItem.css";

const MenuItem = ({ titleName, imageURL, size, destinationURL}) => {
  const navigate = useNavigate();

  return (
    <div className={`${size} menu-item`} onClick={() => navigate(destinationURL)} >
      <div className="background-image" style={{backgroundImage: `url(${imageURL})`}}/>
      <div className="content">
        <h1 className="title">{titleName.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;