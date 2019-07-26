export const getData = async (search) => {
  try {
    const response = await fetch(`https://api.sheety.co/74bca3ba-733d-4e36-ac49-c165bee1a06d`);
    if (!response.ok) {
      throw new Error('Error fetching Data')
    }
    const data = await response.json()
    return data
  } catch {
    throw new Error('Problem with server')
  }
}