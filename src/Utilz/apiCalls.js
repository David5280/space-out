import cleanPlanetData from './cleaner';

export const getData = async () => {
  try {
    const response = await fetch(`https://api.sheety.co/d7540295-434f-4ab0-be80-664042d906c4`);
    if (!response.ok) {
      throw new Error('Error fetching Data')
    }
    const data = await response.json()
    const planets = cleanPlanetData(data)
    return planets
  } catch ({ message }){
    throw new Error(message)
  }
};