import React from 'react';

const InfoContainer = ({ description }) => {
  return (
    <article className='single-article'>
      <p>{description}</p>
    </article>
  )
}

export default InfoContainer;