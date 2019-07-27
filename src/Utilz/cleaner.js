export const cleanPlanetData = (data) => {
  const cleanPlanets = data.map(planet => {
    return {
      title: planet.title,
      description: planet.description,
      image: planet.image,
      cutout: planet.cutout,
      atmosphere: planet.atmosphere,
      sunRevolution: planet.sunRevolution,
      moons: planet.moons,
      travelTime: planet.travelTime,
      milesFromSun: planet.milesFromSun,
      successfulMissions: planet.successfulMissions,
      dayLength: planet.dayLength,
      averageTemp: planet.averageTemp,
      namesake: planet.nameSake,
      discovery: planet.discovery,
      diameter: planet.diameter,
      gravity: planet.gravity,
      isFavored: false,
      key: planet.id,
      climate: planet.climate
    }
  })
  return cleanPlanets;
}