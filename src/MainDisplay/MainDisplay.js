import React from 'react';
import InfoContainer from '../InfoContainer/InfoContainer';

const MainDisplay = ({ data }) => {
  const dataToDisplay = data.map(datum => {
    return <InfoContainer description={datum.data[0].description}/>
  })
  return (
    <section className='main-section-display'>
      {data && dataToDisplay}
    </section>
  )
}

export default MainDisplay;