import * as actions from './index';

describe('actions', () => {
  it('should have a type of LOAD_PLANETS', () => {
    const planets = [{ title: 'mars' }]
    const expectedAction = {
      type: 'LOAD_PLANETS',
      planets: [{ title: 'mars' }]
    };
    const result = actions.loadPlanets(planets)
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOAD_COMPLETE', () => {
    const expectedAction = {
      type: 'LOAD_PLANETS',
    };
    const result = actions.loadPlanets()
    expect(result).toEqual(expectedAction);
  });  
  
  it('should have a type of ADD_USER', () => {
    const user = { name: 'dave', age: 25, weight: '180' }
    const expectedAction = {
      type: 'ADD_USER',
      user
    };
    const result = actions.addUser(user)
    expect(result).toEqual(expectedAction);
  });
});