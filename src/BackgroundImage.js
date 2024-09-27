import React from 'react';
import './BackgroundImage.css'; // Import the CSS for this component

const BackgroundImage = ({ imageUrl }) => {
  return (
    <div className="background-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }} // Apply dynamic image URL
      >
        <div className="background-overlay"></div>
      </div>
    </div>
  );
};

export default BackgroundImage;
