import React from 'react';
import './menu-item.styles.css';

const MenuItem = ({ title, imageUrl, description, percent }) => {
  return (
    <>
      <div className="menu-item">
        <div className="content">
          <img src={imageUrl} alt="desc" />
        </div>
        <div className="subtitle">
          <h1 className="">{title}</h1>
        </div>
      </div>
      <div className="subtitles">
        <h1 className="percent">{percent}</h1>
        <h3 className="description">{description}</h3>
      </div>
    </>
  );
};
export default MenuItem;
