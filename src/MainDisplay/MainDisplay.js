import React from 'react';
import InfoContainer from '../InfoContainer/InfoContainer';

const MainDisplay = ({ data }) => {
  const dataToDisplay = data.map(datum => {
    return (
      <InfoContainer 
      description={datum.description}
      imagePreview={datum.image}/>
    )
  })
  return (
    <section className='main-section-display'>
      {data && dataToDisplay}
    </section>
  )
}

export default MainDisplay;