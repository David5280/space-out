import React from 'react';

const InfoContainer = ({ cutout, title }) => {
  return (
    <article className={`single-article ${title}-cutout`}>
      <img 
        src={cutout} 
        alt={title} 
        className='planet-home-image'
      />
    </article>
  )
}

export default InfoContainer;