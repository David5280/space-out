export const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return state = action.user
    default:
      return state;
  }
}