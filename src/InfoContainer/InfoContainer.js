import React from 'react';

const InfoContainer = ({ description, imagePreview, title }) => {
  console.log(imagePreview)
  return (
    <article className='single-article'>
      <img 
        src={imagePreview} 
        alt={title} 
        className='planet-home-image'
      />
    </article>
  )
}

export default InfoContainer;