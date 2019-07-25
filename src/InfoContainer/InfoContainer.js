import React from 'react';

const InfoContainer = ({ description, imagePreview }) => {
  return (
    <article className='single-article'>
      <img src={imagePreview} alt='' className='single-image'/>
      {/* <p>{description}</p> */}
    </article>
  )
}

export default InfoContainer;