import React from 'react'

const UserStats = ({ planet, user }) => {
  const parsedTravelTime = planet.travelTime > 1 ? 
    parseInt(planet.travelTime) : 
    parseFloat(planet.travelTime)
  const parsedGravity = planet.gravity > 1 ?
    parseInt(planet.gravity) :
    parseFloat(planet.gravity)
  return (
    <section className='user-stats'>
      <div className='user-stats-background-container'>
        <img 
          src={planet.image2} 
          alt={`${planet.title} background`} 
          className={`user-stats-background ${planet.title}-background`}
        />
      </div>
      <article className='user-stats-container'>
        <h3>{planet.title}</h3>
        <p>You would weigh {(user.weight * parsedGravity).toFixed(2)} pounds on the surface of {planet.title}</p>
        <p>If you left today, you would be {parseInt(user.age) + parsedTravelTime} years old upon arrival</p>

      </article>

    </section>
  )
};

export default UserStats;