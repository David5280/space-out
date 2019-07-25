import { cleanSearchData } from './cleaner.js';

export const getData = async (search) => {
  const query = search || 'Earth';
  try {
    const response = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);
    if (!response.ok) {
      throw new Error('Error fetching Data')
    }
    const data = await response.json()
    // const cleanData = await cleanSearchData(data);
    // console.log(cleanData)
    // return cleanData
    console.log(data.collection.items)
    return data.collection.items
  } catch {
    throw new Error('Problem with server')
  }
}