export const getData = async (search) => {
  try {
    const response = await fetch(`https://api.sheety.co/d7540295-434f-4ab0-be80-664042d906c4`);
    if (!response.ok) {
      throw new Error('Error fetching Data')
    }
    const data = await response.json()
    return data
  } catch {
    throw new Error('Problem with server')
  }
}