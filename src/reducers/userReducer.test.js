import { userReducer } from './userReducer';

describe('userReducer', () => {
  it('should return an initial state', () => {
    const expected = {};
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });
  it('should update state.user after ADD_USER', () => {
    const state = {};
    const user = {
      user: {
        name: 'Dave',
        age:'25',
        weight: '180'
      }
    }
    const action = {
      type: 'ADD_USER',
      user
    };
    const result = userReducer(state, action);
    expect(result).toEqual(user);
  });
});