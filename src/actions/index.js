export const loadPlanets = (planets) => ({
  type: 'LOAD_PLANETS',
  planets
})

export const loadComplete = () => ({
  type: 'LOAD_COMPLETE'
})