import React from 'react';
import './CarCard.css';

const CarCard = ({ brandLogo, modelName, description, ctaText }) => {
  return (
    <div className='car-card">
      <div className='car-card-logo'>
        <img src={brandLogo} alt={modelName} />
      </div>
      <div className='car-card-info'>
        <h2 className='car-card-model'>{modelName}</h2>
        <p className='car-card-description'>{description}</p>
      </div>
      <div className='car-card-cta'>
        <button className='car-card-cta-button'>{ctaText}</button>
      </div>
    </div>
  );
};

export default CarCard;