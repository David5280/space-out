export const getData = async (search) => {
  try {
    const response = await fetch(`https://api.sheety.co/245cfb46-b5bf-41de-b58b-e63f721aa2e6`);
    if (!response.ok) {
      throw new Error('Error fetching Data')
    }
    const data = await response.json()
    return data
  } catch {
    throw new Error('Problem with server')
  }
}