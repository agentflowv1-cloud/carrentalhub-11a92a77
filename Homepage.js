import React from 'react';
import CarCard from './CarCard';
import './Homepage.css';

const Homepage = () => {
  const cars = [
    { brandLogo: 'https://example.com/toyota-logo.png', modelName: 'Toyota Camry', description: 'Sedan car', ctaText: 'Learn More' },
    { brandLogo: 'https://example.com/honda-logo.png', modelName: 'Honda Civic', description: 'Sedan car', ctaText: 'Learn More' },
    { brandLogo: 'https://example.com/ford-logo.png', modelName: 'Ford Mustang', description: 'Sports car', ctaText: 'Learn More' }
  ];

  return (
    <div className='homepage'>
      <h1 className='homepage-title'>Car Collection</h1>
      <div className='car-cards-container'>
        {cars.map((car, index) => (
          <CarCard key={index} brandLogo={car.brandLogo} modelName={car.modelName} description={car.description} ctaText={car.ctaText} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;