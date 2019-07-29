import React from 'react'
import { Link } from 'react-router-dom'

const UserStats = ({ planet, user }) => {

  const userStats = (
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
      <p>
        You would weigh {(user.weight * parseFloat(planet.gravity)).toFixed(2)} pounds on the surface of {planet.title}
      </p>
      <p>
        If you left today, you would be {parseInt(user.age) + parseFloat(planet.travelTime)} years old upon arrival
      </p>
    </article>
  </section>
  );

  const noUserStats = (
    <section className='no-credentials-page'>
      <Link to='/enter-stats'>Please enter your information to view this page.</Link>
    </section>
  );

  const userStatsDisplay = user.name && user.age && user.weight ? 
    userStats : 
    noUserStats;

  return (
    userStatsDisplay
  )
};

export default UserStats;