import React from "react";

import './Styling/Homepage.css';
import Directory from "../../Components/Directory/Directory";

const HomePage = props => {
  console.log(props);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;