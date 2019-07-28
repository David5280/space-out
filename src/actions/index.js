export const loadPlanets = (planets) => ({
  type: 'LOAD_PLANETS',
  planets
});

export const loadComplete = () => ({
  type: 'LOAD_COMPLETE'
});

export const addUser = (user) => ({
  type: 'ADD_USER',
  user
});