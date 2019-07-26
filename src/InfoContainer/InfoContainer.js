import React from 'react';

const InfoContainer = ({ cutout, title }) => {
  return (
    <article className='single-article'>
      <img 
        src={cutout} 
        alt={title} 
        className='planet-home-image'
      />
    </article>
  )
}

export default InfoContainer;