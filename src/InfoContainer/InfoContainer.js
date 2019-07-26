import React from 'react';

const InfoContainer = ({ image, title }) => {
  return (
    <article className='single-article'>
      <img 
        src={image} 
        alt={title} 
        className='planet-home-image'
      />
    </article>
  )
}

export default InfoContainer;