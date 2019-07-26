import { cleanSearchData } from './cleaner.js';

export const getData = async (search) => {
  // const query = search || 'Earth';
  try {
    const response = await fetch(`https://api.sheety.co/8ea453d3-272f-4ea9-b112-5fd6de71ddcf`);
    if (!response.ok) {
      throw new Error('Error fetching Data')
    }
    const data = await response.json()
    return data
  } catch {
    throw new Error('Problem with server')
  }
}