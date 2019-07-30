const cleanPlanetData = (data) => {
return data.map(planet => {
    return {
      atmosphere: planet.atmosphere,
      averageTemp: planet.averageTemp,
      climate: planet.climate,
      cutout: planet.cutout,
      dayLength: planet.dayLength,
      description: planet.description,
      diameter: planet.diameter,
      discovery: planet.discovery,
      gravity: planet.gravity,
      id: planet.id,
      image2: planet.image2,
      image: planet.image,
      key: planet.id,
      milesFromSun: planet.milesFromSun,
      moons: planet.moons,
      namesake: planet.namesake,
      successfulMissions: planet.successfulMissions,
      sunRevolution: planet.sunRevolution,
      title: planet.title,
      travelTime: planet.travelTime
    }
  });
};

export default cleanPlanetData;