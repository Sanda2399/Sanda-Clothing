import react from "react";

import "./Styling/MenuItem.css";

const MenuItem = ({ titleName, key, imageURL, size}) => {
  return (
    <div className={`${size} menu-item`}>
      <div className="background-image" style={{backgroundImage: `url(${imageURL})`}}/>
      <div className="content">
        <h1 className="title">{titleName.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;