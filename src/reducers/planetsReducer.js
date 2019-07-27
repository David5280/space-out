export const planetsReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_PLANETS':
      return [...state, ...action.planets]
    default:
      return state;
  }
}