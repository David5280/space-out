import { cleanSearchData } from './cleaner.js';

export const getSearchData = async (search) => {
  const query = 'Earth' || search;
  try {
    const response = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);
    if (!response.ok) {
      throw new Error('Error fetching Data')
    }
    const data = await response.json()
    return data.collection
  } catch {
    throw new Error('Problem with server')
  }
}