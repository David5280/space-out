export const loadingReducer = (state = true, { type }) => {
  switch (type) {
    case 'LOAD_COMPLETE':
      console.log(state)
      return false;
    default:
      return state;
  }
};