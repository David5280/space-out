export const loadingReducer = (state = true, { type }) => {
  switch (type) {
    case 'LOAD_COMPLETE':
      return false;
    default:
      return state;
  }
};

export const errorReducer = (state = '', action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.message;
    default:
      return state;
  }
};