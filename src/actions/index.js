export const loadPlanets = (planets) => ({
  type: 'LOAD_PLANETS',
  planets
});

export const addUser = (user) => ({
  type: 'ADD_USER',
  user
});

export const loadComplete = () => ({
  type: 'LOAD_COMPLETE'
});

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
})