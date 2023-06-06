import React from "react";
import "./Card.css";

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <a href={link} className="card-link">
        <div className="card-image">
          <img src={image} alt="Card" />
        </div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
