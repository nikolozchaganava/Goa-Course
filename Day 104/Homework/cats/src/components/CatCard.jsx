import React from 'react';
function CatCard({ name, image, description }) {
  return (
    <div className='cat-card'>
        <img src={image} alt={name} className='cat-image'/>
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
  );
}

export default CatCard;